import React, { useState, useEffect, useRef } from 'react';
import { useCms } from '../../context/CmsContext';
import { X, Upload, Link2, Image as ImageIcon, Check, Loader2 } from 'lucide-react';

export default function ImageUploadModal() {
  const { imageModalState, closeImageUpload, uploadImageFile, updateField } = useCms();
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'preset' | 'url'
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const presets = [
    { label: 'BYD Song Plus', url: '/chinese-suv-byd.jpg' },
    { label: 'Geely Monjaro', url: '/chinese-suv-geely.jpg' },
    { label: 'Haval H6 Facelift', url: '/chinese-suv-haval.jpg' },
    { label: 'Chery Tiggo 8 Pro', url: '/chinese-suv-chery.jpg' },
    { label: 'Tank 300 Off-Road', url: '/chinese-suv-tank300.jpg' },
    { label: 'Li Auto L9', url: '/chinese-suv-liauto.jpg' },
    { label: 'Hair & Beauty', url: '/feature-interior.jpg' },
    { label: 'Agro Commodity', url: '/feature-product.jpg' },
    { label: 'About Project Mgmt', url: '/about-project-mgmt.jpg' },
  ];

  useEffect(() => {
    if (imageModalState.isOpen) {
      setPreviewUrl(imageModalState.currentUrl || '');
      setCustomUrl(imageModalState.currentUrl || '');
      setSelectedFile(null);
      setIsUploading(false);
    }
  }, [imageModalState.isOpen, imageModalState.currentUrl]);

  if (!imageModalState.isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleApply = async () => {
    if (activeTab === 'upload') {
      if (selectedFile) {
        setIsUploading(true);
        await uploadImageFile(selectedFile, imageModalState.path);
        setIsUploading(false);
      } else {
        closeImageUpload();
      }
    } else {
      if (customUrl) {
        updateField(imageModalState.path, customUrl);
        closeImageUpload();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-body">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#001659] border border-white/20 p-6 sm:p-7 shadow-2xl text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#ff5e14] flex items-center justify-center text-white">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-heading font-black text-white">{imageModalState.title}</h3>
              <p className="text-[11px] text-white/60 font-mono">{imageModalState.path}</p>
            </div>
          </div>
          <button
            onClick={closeImageUpload}
            className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 my-4 p-1 bg-black/30 rounded-lg">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-md transition-all ${
              activeTab === 'upload' ? 'bg-[#ff5e14] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('preset')}
            className={`flex-1 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-md transition-all ${
              activeTab === 'preset' ? 'bg-[#ff5e14] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            Presets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-md transition-all ${
              activeTab === 'url' ? 'bg-[#ff5e14] text-white shadow' : 'text-white/60 hover:text-white'
            }`}
          >
            Paste URL
          </button>
        </div>

        {/* Body Content */}
        {activeTab === 'upload' && (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-[#ff5e14] bg-[#ff5e14]/15'
                : 'border-white/20 hover:border-[#ff5e14]/70 bg-white/5'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {previewUrl && selectedFile ? (
              <div className="space-y-3">
                <img
                  src={previewUrl}
                  alt="Upload preview"
                  className="max-h-36 mx-auto rounded-lg object-contain shadow-md"
                />
                <p className="text-xs text-emerald-400 font-medium">Ready: {selectedFile.name}</p>
              </div>
            ) : (
              <div className="space-y-2 py-4">
                <Upload className="w-8 h-8 text-[#ff5e14] mx-auto animate-bounce" />
                <p className="text-xs font-semibold text-white">Click or drag image here</p>
                <p className="text-[11px] text-white/50">PNG, JPG, WEBP up to 5MB</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'preset' && (
          <div className="grid grid-cols-3 gap-2.5 max-h-52 overflow-y-auto p-1">
            {presets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCustomUrl(p.url);
                  setPreviewUrl(p.url);
                }}
                className={`p-1.5 rounded-lg border text-left transition-all ${
                  customUrl === p.url
                    ? 'border-[#ff5e14] bg-[#ff5e14]/20'
                    : 'border-white/10 hover:border-white/30 bg-white/5'
                }`}
              >
                <div className="w-full h-14 rounded overflow-hidden mb-1 bg-black/40">
                  <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-white/80 font-bold block truncate">{p.label}</span>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'url' && (
          <div className="space-y-3 py-2">
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-white/80">
              Image URL / Path
            </label>
            <input
              type="text"
              value={customUrl}
              onChange={(e) => {
                setCustomUrl(e.target.value);
                setPreviewUrl(e.target.value);
              }}
              placeholder="e.g. /chinese-suv-haval.jpg or https://images..."
              className="w-full h-11 px-3.5 bg-black/40 border border-white/20 rounded-md text-sm text-white focus:outline-none focus:border-[#ff5e14]"
            />
            {previewUrl && (
              <div className="pt-2">
                <img
                  src={previewUrl}
                  alt="URL Preview"
                  className="max-h-32 mx-auto rounded-lg object-contain shadow"
                  onError={() => {}}
                />
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-5 mt-4 border-t border-white/10">
          <button
            type="button"
            onClick={closeImageUpload}
            className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-white/70 hover:text-white rounded-md"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleApply}
            disabled={isUploading}
            className="px-5 py-2 bg-[#ff5e14] hover:bg-[#e04e0a] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 shadow-lg disabled:opacity-50"
          >
            {isUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
            <span>Apply Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
