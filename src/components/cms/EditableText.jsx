import React, { useState, useEffect, useRef } from 'react';
import { useCms } from '../../context/CmsContext';
import { Edit2 } from 'lucide-react';

export default function EditableText({
  path,
  as: Component = 'span',
  className = '',
  multiline = false,
  placeholder = 'Click to edit...',
  children,
}) {
  const { isEditMode, getNestedValue, updateField } = useCms();
  const rawValue = getNestedValue(path);
  const value = rawValue !== undefined && rawValue !== null ? rawValue : children || '';

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current.select) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  // If edit mode is OFF, render standard element
  if (!isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  const handleStartEditing = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = () => {
    updateField(path, draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      handleCancel();
    } else if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      e.stopPropagation();
      handleSave();
    } else if (e.key === 'Enter' && e.metaKey && multiline) {
      e.preventDefault();
      e.stopPropagation();
      handleSave();
    }
  };

  if (isEditing) {
    return (
      <span className="relative inline-block w-full z-30" onClick={(e) => e.stopPropagation()}>
        {multiline ? (
          <textarea
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            rows={Math.max(2, String(draft).split('\n').length)}
            className={`w-full bg-[#001659] text-white border-2 border-[#ff5e14] rounded-sm p-2 text-inherit font-inherit outline-none shadow-2xl resize-y ${className}`}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className={`w-full bg-[#001659] text-white border-2 border-[#ff5e14] rounded-sm px-2 py-1 text-inherit font-inherit outline-none shadow-2xl ${className}`}
          />
        )}
      </span>
    );
  }

  return (
    <Component
      onClick={handleStartEditing}
      className={`group/editable relative cursor-pointer transition-all hover:outline-dashed hover:outline-2 hover:outline-[#ff5e14] hover:bg-[#ff5e14]/10 rounded-xs px-0.5 ${className}`}
      title="Click to edit text directly"
    >
      {value || <span className="opacity-40 italic">{placeholder}</span>}
      <span className="inline-block opacity-0 group-hover/editable:opacity-100 transition-opacity ml-1.5 align-middle text-[#ff5e14]">
        <Edit2 className="w-3 h-3 inline" />
      </span>
    </Component>
  );
}
