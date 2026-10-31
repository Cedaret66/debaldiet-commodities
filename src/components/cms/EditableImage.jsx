import React from 'react';
import { useCms } from '../../context/CmsContext';
import { Camera, Upload } from 'lucide-react';

export default function EditableImage({
  path,
  src,
  alt = '',
  className = '',
  imgClassName = '',
  title = 'Change Image',
}) {
  const { isEditMode, getNestedValue, openImageUpload } = useCms();
  const rawSrc = getNestedValue(path);
  const currentSrc = rawSrc || src || '';

  // Determine explicit object-fit behavior: default to object-cover so aspect ratio is NEVER warped
  const objectFitClass = className.includes('object-contain')
    ? 'object-contain'
    : className.includes('object-fill')
    ? 'object-fill'
    : className.includes('object-scale-down')
    ? 'object-scale-down'
    : className.includes('object-none')
    ? 'object-none'
    : 'object-cover';

  const objectPosClass = className.includes('object-top')
    ? 'object-top'
    : className.includes('object-bottom')
    ? 'object-bottom'
    : className.includes('object-left')
    ? 'object-left'
    : className.includes('object-right')
    ? 'object-right'
    : 'object-center';

  // Strip object-fit and object-position from outer wrapper div so they only apply to img
  const containerClasses = className
    .replace(/\bobject-(cover|contain|fill|none|scale-down)\b/g, '')
    .replace(/\bobject-(top|bottom|left|right|center)\b/g, '')
    .trim();

  if (!isEditMode) {
    return (
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${objectFitClass} ${objectPosClass} ${imgClassName}`}
      />
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openImageUpload(path, currentSrc, title);
  };

  return (
    <div
      onClick={handleClick}
      className={`group/editable-img relative cursor-pointer overflow-hidden rounded-[inherit] transition-all hover:outline-dashed hover:outline-2 hover:outline-[#ff5e14] hover:ring-4 hover:ring-[#ff5e14]/20 ${containerClasses}`}
      title="Click to replace image"
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full ${objectFitClass} ${objectPosClass} rounded-[inherit] ${imgClassName}`}
      />

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
