import React from 'react';
import { useCms } from '../../context/CmsContext';
import { Camera, Upload } from 'lucide-react';

export default function EditableImage({
  path,
  src,
  alt = '',
  className = '',
  title = 'Change Image',
}) {
  const { isEditMode, getNestedValue, openImageUpload } = useCms();
  const rawSrc = getNestedValue(path);
  const currentSrc = rawSrc || src || '';

  if (!isEditMode) {
    return <img src={currentSrc} alt={alt} className={className} />;
  }

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openImageUpload(path, currentSrc, title);
  };

  return (
    <div
      onClick={handleClick}
      className={`group/editable-img relative cursor-pointer overflow-hidden rounded-[inherit] transition-all hover:outline-dashed hover:outline-2 hover:outline-[#ff5e14] hover:ring-4 hover:ring-[#ff5e14]/20 ${className}`}
      title="Click to replace image"
    >
      <img src={currentSrc} alt={alt} className="w-full h-full object-[inherit] rounded-[inherit]" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/editable-img:opacity-100 transition-opacity flex items-center justify-center p-2 z-20 backdrop-blur-[2px]">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff5e14] hover:bg-[#e04e0a] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Change Image</span>
        </button>
      </div>
    </div>
  );
}
