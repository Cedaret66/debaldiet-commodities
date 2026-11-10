import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Upload, Sparkles, Check, Car, Layers, Sprout, Calculator } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import { calculate70PercentDeposit } from '../../utils/pricing';

export default function ShowcaseItemModal({
  isOpen,
  onClose,
  category = 'cars', // 'cars' | 'hair' | 'agriculture'
}) {
  const { addShowcaseItem, uploadImageFile } = useCms();

  const categoryTitles = {
    cars: {
      title: 'Add New Vehicle to Showcase',
      nameLabel: 'Car / Model Name',
      namePlaceholder: 'e.g. BYD Leopard 5 Hybrid Off-Road SUV',
      pricePlaceholder: 'e.g. $42,500 Landed Tema',
      depositPlaceholder: 'e.g. $29,750 (70% Initial Deposit)',
      tagPlaceholder: 'e.g. Hybrid & EV or Off-Road 4x4',
      badgePlaceholder: 'e.g. NEW ARRIVAL, POPULAR',
      defaultImg: '/chinese-suv-byd.jpg',
      sampleDesc: 'Dual-motor plug-in hybrid architecture with intelligent electric 4WD.\nLanded Tema clearing handled completely under the 70/30 auto scheme.\nStandard factory warranty with full replacement parts pipeline.',
    },
    hair: {
      title: 'Add New Hair / Beauty Product',
      nameLabel: 'Product Name / Texture',
      namePlaceholder: 'e.g. Raw Cambodian Deep Wavy 3-Bundle Deal',
      pricePlaceholder: 'e.g. $145 – $260 / Bundle Set',
      depositPlaceholder: 'e.g. 70/30 Commercial Salon Plan',
      tagPlaceholder: 'e.g. Raw Bundles or HD Lace Wigs',
      badgePlaceholder: 'e.g. 100% UNPROCESSED, SALON GRADE',
      defaultImg: '/feature-interior.jpg',
      sampleDesc: '100% single-donor unprocessed virgin hair with intact cuticles.\nCan be bleached safely to #613 blonde without tangling or shedding.\nDirect factory bulk carton discounts available for commercial salons.',
    },
    agriculture: {
      title: 'Add New Agro-Commodity',
      nameLabel: 'Commodity Name & Grade',
      namePlaceholder: 'e.g. Premium White Sesame Seeds (99.5% Purity)',
      pricePlaceholder: 'e.g. $1,420 – $1,550 / Metric Ton',
      depositPlaceholder: 'e.g. Spot CIF Tema or Farm-Gate FOB',
      tagPlaceholder: 'e.g. Export Cash Crops or Grains & Cereals',
      badgePlaceholder: 'e.g. EXPORT QUALITY, ASSAY TESTED',
      defaultImg: '/feature-product.jpg',
      sampleDesc: 'Moisture content strictly below 8.0% with maximum 0.5% admixture.\nAggregated directly from vetted farmer clusters across Northern Ghana.\nSupplied in 50kg double-stitched export polypropylene bags with SGS inspection.',
    },
  };

  const meta = categoryTitles[category] || categoryTitles.cars;

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    deposit70: '',
    category: '',
    badge: 'NEW ARRIVAL',
    brand: '',
    availability: 'available', // 'available' | 'sold'
    image: meta.defaultImg,
    description: meta.sampleDesc,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newItem = {
      id: `${category}-${Date.now()}`,
      name: formData.name.trim(),
      price: formData.price.trim() || 'Inquire for landed quote',
      deposit70: formData.deposit70.trim(),
      category: formData.category.trim() || 'Featured',
      badge: formData.badge.trim(),
      brand: formData.brand.trim() || 'DIRECT SOURCING',
      availability: formData.availability || 'available',
      image: formData.image.trim() || meta.defaultImg,
      description: formData.description.trim(),
    };

    addShowcaseItem(category, newItem);
    onClose();
  };

  const handleImageFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (typeof uploadImageFile === 'function') {
        const cdnUrl = await uploadImageFile(file);
        if (cdnUrl) {
          setFormData((prev) => ({ ...prev, image: cdnUrl }));
          return;
        }
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setFormData((prev) => ({ ...prev, image: uploadEvent.target.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn font-body"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-[#001659]/20 shadow-2xl rounded-sm overflow-hidden text-[#303030] my-auto"
        style={{ overscrollBehavior: 'contain' }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#001659] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#ff5e14]" />
            <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase">
              {meta.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 max-h-[82vh] overflow-y-auto"
          style={{ overscrollBehavior: 'contain' }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Item Name */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
              {meta.nameLabel} *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={meta.namePlaceholder}
              className="w-full px-3.5 py-2 text-sm text-[#111827] bg-white border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none"
            />
          </div>

          {/* Pricing & Auto 70% Deposit Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                Headline Price / Quote *
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => {
                  const newPrice = e.target.value;
                  const autoDeposit = calculate70PercentDeposit(newPrice);
                  setFormData((prev) => ({
                    ...prev,
                    price: newPrice,
                    deposit70: autoDeposit || prev.deposit70,
                  }));
                }}
                placeholder={meta.pricePlaceholder}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none"
              />
              <span className="text-[11px] text-[#565969] mt-0.5 block">
                e.g. $35,000 or $38,000 – $42,000
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659]">
                  70% Initial Deposit
                </label>
                {formData.price && calculate70PercentDeposit(formData.price) && (
                  <span className="text-[10px] text-emerald-600 font-bold uppercase flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Auto-calculated
                  </span>
                )}
              </div>
              <input
                type="text"
                value={formData.deposit70}
                onChange={(e) => setFormData({ ...formData, deposit70: e.target.value })}
                placeholder={meta.depositPlaceholder}
                className="w-full px-3.5 py-2 text-sm border border-emerald-300 bg-emerald-50/40 rounded focus:border-[#ff5e14] focus:outline-none font-bold text-[#ff5e14]"
              />
              <span className="text-[11px] text-[#565969] mt-0.5 block">
                Automatically calculated at 70% of the price.
              </span>
            </div>
          </div>

          {/* Availability Status */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1.5">
              Availability Status
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, availability: 'available' }))}
                className={`py-2 px-3 text-xs font-heading font-black uppercase tracking-wider rounded border transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  formData.availability !== 'sold'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>Available</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, availability: 'sold' }))}
                className={`py-2 px-3 text-xs font-heading font-black uppercase tracking-wider rounded border transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  formData.availability === 'sold'
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>Sold</span>
              </button>
            </div>
          </div>

          {/* Category Tag & Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                Category Filter / Type
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder={meta.tagPlaceholder}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                Card Badge Label
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder={meta.badgePlaceholder}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none"
              />
            </div>
          </div>

          {/* Image URL or Upload */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
              Card Image
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="Image URL or choose file below"
                className="flex-1 px-3.5 py-2 text-xs border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none"
              />
              <label className="cursor-pointer px-3 py-2 bg-[#001659] hover:bg-[#ff5e14] text-white text-xs font-heading font-bold uppercase rounded flex items-center gap-1.5 transition-colors shrink-0">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
              </label>
            </div>
            {formData.image && (
              <div className="mt-2 w-full h-28 bg-gray-100 rounded overflow-hidden border border-gray-200">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Multi-line Details / Description */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
              Details / Description (Copy & Paste Content)
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Paste item specs, description, features or assay details..."
              className="w-full px-3.5 py-2 text-xs text-[#111827] bg-white border border-gray-300 rounded focus:border-[#ff5e14] focus:outline-none font-mono"
            />
            <p className="text-[11px] text-[#565969] mt-1">
              Line breaks and paragraphs will appear formatted directly on the card.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-gray-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-xs font-heading font-bold uppercase text-[#565969] hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#ff5e14] hover:bg-[#e04f0e] text-white rounded text-xs font-heading font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Showcase</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
