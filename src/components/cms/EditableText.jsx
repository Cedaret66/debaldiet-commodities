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
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            rows={Math.max(3, Math.min(10, String(draft).split('\n').length))}
            style={{
              overscrollBehavior: 'contain',
              color: '#111827',
              backgroundColor: '#ffffff',
            }}
            className="w-full text-[#111827] bg-white border-2 border-[#ff5e14] rounded-sm p-3 text-sm font-body leading-relaxed outline-none shadow-2xl resize-y overflow-y-auto max-h-[320px] ring-2 ring-[#ff5e14]/25"
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            style={{
              color: '#111827',
              backgroundColor: '#ffffff',
            }}
            className="w-full text-[#111827] bg-white border-2 border-[#ff5e14] rounded-sm px-3 py-1.5 text-sm font-body outline-none shadow-2xl ring-2 ring-[#ff5e14]/25"
          />
        )}
        <span className="block mt-1 text-[10px] text-[#ff5e14] font-heading font-bold uppercase tracking-wider">
          {multiline ? 'Click outside to save • Esc to cancel' : 'Press Enter or click outside to save • Esc to cancel'}
        </span>
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
