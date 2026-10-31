import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

export default function ImageField({ label, value, onChange, helperText }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      alert('File size exceeds 4MB limit. Please compress the image or use a URL.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      if (base64) {
        onChange(base64);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659]">
        {label}
      </label>

      {/* Preview container */}
      <div className="flex items-start gap-4">
        <div className="w-28 h-20 bg-gray-100 border border-gray-200 rounded-sm overflow-hidden flex-shrink-0 relative group">
          {value ? (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="w-6 h-6 mb-1" />
              <span className="text-[10px]">No image</span>
            </div>
          )}
        </div>

        {/* Input Controls */}
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="e.g. /chinese-suv-byd.jpg or https://..."
              className="flex-1 h-10 px-3 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 h-10 bg-[#f4f5f7] hover:bg-[#e8e8e9] text-[#001659] text-xs font-heading font-bold uppercase tracking-wider border border-[#d2d4d8] rounded-sm flex items-center space-x-1 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
          {helperText && <p className="text-[11px] text-gray-500">{helperText}</p>}
        </div>
      </div>
    </div>
  );
}
