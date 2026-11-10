import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Plus,
  Trash2,
  Copy,
  PlusCircle,
} from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import CmsSection from '../components/cms/CmsSection';
import ShowcaseItemModal from '../components/cms/ShowcaseItemModal';
import ShowcaseInquiryModal from '../components/ShowcaseInquiryModal';

export default function AgriShowcasePage() {
  const { content, isEditMode, deleteShowcaseItem, duplicateShowcaseItem, updateField } = useCms();
  const showcaseData = content.showcases?.agriculture || {};
  const agriItems = showcaseData.items || [];

  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleDetails = (idx) => {
    setExpandedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const categories = ['ALL', 'GRAINS & CEREALS', 'OILSEEDS & LEGUMES', 'EXPORT CROPS', 'COSMETIC OILS'];

  const filteredItems = agriItems.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'GRAINS & CEREALS') {
      return item.category?.toLowerCase().includes('grains') || item.name?.toLowerCase().includes('maize') || item.name?.toLowerCase().includes('rice') || item.name?.toLowerCase().includes('sorghum');
    }
    if (selectedFilter === 'OILSEEDS & LEGUMES') {
      return item.category?.toLowerCase().includes('legumes') || item.category?.toLowerCase().includes('oilseeds') || item.name?.toLowerCase().includes('soybean');
    }
    if (selectedFilter === 'EXPORT CROPS') {
      return item.category?.toLowerCase().includes('export') || item.name?.toLowerCase().includes('cashew') || item.name?.toLowerCase().includes('sesame');
    }
    if (selectedFilter === 'COSMETIC OILS') {
      return item.category?.toLowerCase().includes('cosmetic') || item.name?.toLowerCase().includes('shea');
    }
    return true;
  });

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Hero Title Banner */}
      <CmsSection id="agri-hero" name="Hero & Overview" className="relative w-full py-[80px] lg:py-[100px] bg-[#001659] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('/feature-product.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001659]/95 via-[#001659]/85 to-[#001659]/70" />

        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#ff5e14] mb-4 font-heading font-semibold">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white/70">Showcases</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white">Agricultural Commodities</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3.5 py-1 text-[11px] font-heading uppercase tracking-[2px] font-bold mb-4">
              <Sprout className="w-3.5 h-3.5" />
              <EditableText path="showcases.agriculture.tagline" as="span">
                {showcaseData.tagline || 'COMMERCIAL STAPLE GRAINS & CASH CROPS • DIRECT FARM-GATE SUPPLY'}
              </EditableText>
            </span>
            <EditableText
              path="showcases.agriculture.headline"
              as="h1"
              className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[62px] text-white leading-[1.08] tracking-tight mb-5 block"
            >
              {showcaseData.headline || 'Agricultural Commodities Showcase'}
            </EditableText>
            <EditableText
              path="showcases.agriculture.subHeadline"
              as="p"
              multiline
              className="font-body text-[16px] sm:text-[18px] text-white/85 leading-relaxed font-light mb-8 block"
            >
              {showcaseData.subHeadline || 'Aggregating yellow maize, parboiled rice, high-protein soybeans, and export-grade cashew directly from verified farmer clusters across Bono, Ahafo, and Northern Ghana.'}
            </EditableText>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">&lt; 12.5%</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Moisture Assured</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">Direct</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Farm-Gate Aggregation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">Tema CIF</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Port & Local Depot Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </CmsSection>

      {/* 2. Main Showcase Grid Section */}
      <CmsSection id="agri-grid" name="Agro-Commodities Catalog Grid" className="w-full py-[80px] bg-[#f8f9fa] fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          {/* Header Controls & Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-1">
                COMMODITY CATALOG ({agriItems.length})
              </span>
              <h2 className="font-heading font-black text-[30px] sm:text-[38px] text-[#001659] leading-tight">
                Staple Grains & Export Crops In Stock
              </h2>
            </div>

            {/* Actions & Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Add New Commodity Button (Visible in Edit Mode) */}
              {isEditMode && (
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 bg-[#ff5e14] hover:bg-[#e04f0e] text-white text-xs font-heading font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all mr-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Commodity</span>
                </button>
              )}

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 border ${
                    selectedFilter === cat
                      ? 'bg-[#001659] text-white border-[#001659] shadow-md'
                      : 'bg-white text-[#565969] border-[#e8e8e9] hover:border-[#ff5e14] hover:text-[#001659]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-COLUMN DESKTOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative bg-white border border-[#e8e8e9] overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Admin Card Action Bar (Visible in Edit Mode on Top Left) */}
                {isEditMode && (
                  <div className="absolute top-2.5 left-2.5 z-30 flex items-center gap-1.5 bg-[#001659]/95 backdrop-blur-sm px-2 py-1 rounded shadow-lg border border-white/20">
                    <button
                      type="button"
                      onClick={() => duplicateShowcaseItem('agriculture', idx)}
                      className="p-1 text-white/90 hover:text-white hover:bg-white/20 rounded transition-colors flex items-center gap-1 text-[10px] font-heading font-bold uppercase tracking-wider"
                      title="Duplicate this commodity"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy</span>
                    </button>
                    <span className="text-white/30 text-xs">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Delete "${item.name}" from showcase?`)) {
                          deleteShowcaseItem('agriculture', idx);
                        }
                      }}
                      className="p-1 text-red-300 hover:text-white hover:bg-red-500 rounded transition-colors flex items-center gap-1 text-[10px] font-heading font-bold uppercase tracking-wider"
                      title="Delete this commodity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                )}

                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[250px] overflow-hidden bg-gray-100">
                    <EditableImage
                      path={`showcases.agriculture.items[${idx}].image`}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Availability Tag (Admin Editable in Edit Mode) */}
                    {isEditMode ? (
                      <div
                        className="absolute top-3 right-3 z-30 flex items-center bg-white/95 backdrop-blur-xs p-1 rounded shadow-md border border-[#001659]/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => updateField(`showcases.agriculture.items[${idx}].availability`, 'available')}
                          className={`px-2 py-0.5 text-[10px] font-heading font-black uppercase tracking-wider rounded-xs transition-colors flex items-center space-x-1 ${
                            (item.availability || 'available').toLowerCase() !== 'sold'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'text-gray-500 hover:text-emerald-700 hover:bg-emerald-50'
                          }`}
                          title="Set status to Available"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>Available</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => updateField(`showcases.agriculture.items[${idx}].availability`, 'sold')}
                          className={`ml-1 px-2 py-0.5 text-[10px] font-heading font-black uppercase tracking-wider rounded-xs transition-colors flex items-center space-x-1 ${
                            (item.availability || '').toLowerCase() === 'sold'
                              ? 'bg-red-600 text-white shadow-sm'
                              : 'text-gray-500 hover:text-red-700 hover:bg-red-50'
                          }`}
                          title="Set status to Sold"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>Sold</span>
                        </button>
                      </div>
                    ) : (
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-heading font-black uppercase tracking-widest shadow-md rounded-xs flex items-center space-x-1.5 text-white z-10 ${
                          (item.availability || '').toLowerCase() === 'sold'
                            ? 'bg-red-600'
                            : 'bg-emerald-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-white ${
                            (item.availability || '').toLowerCase() === 'sold' ? 'animate-pulse' : ''
                          }`}
                        />
                        <span>{(item.availability || '').toLowerCase() === 'sold' ? 'SOLD' : 'AVAILABLE'}</span>
                      </div>
                    )}
                    {/* Packaging Pill Bottom Left */}
                    {item.packaging && (
                      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-heading uppercase tracking-wider">
                        {item.packaging}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Title / Name */}
                    <h3 className="font-heading font-black text-[22px] text-[#001659] group-hover:text-[#ff5e14] transition-colors leading-snug mb-2">
                      <EditableText path={`showcases.agriculture.items[${idx}].name`}>
                        {item.name}
                      </EditableText>
                    </h3>

                    {/* Price Block */}
                    <div className="mb-4 pb-4 border-b border-[#e8e8e9]">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#565969]">
                          Commercial Rate
                        </span>
                        <span className="font-heading font-black text-[20px] text-[#001659]">
                          <EditableText path={`showcases.agriculture.items[${idx}].price`}>
                            {item.price}
                          </EditableText>
                        </span>
                      </div>
                      {item.localPrice && (
                        <div className="mt-2 py-1.5 px-2.5 bg-[#f8f9fa] border-l-2 border-[#ff5e14] flex items-center justify-between text-xs font-heading">
                          <span className="text-[#565969] font-medium">Spot / Local Price:</span>
                          <span className="text-[#ff5e14] font-bold">
                            <EditableText path={`showcases.agriculture.items[${idx}].localPrice`}>
                              {item.localPrice}
                            </EditableText>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Commodity Details / Description (Collapsible) */}
                    <div className="mb-6">
                      <button
                        type="button"
                        onClick={() => toggleDetails(idx)}
                        className="w-full flex items-center justify-between py-2 px-3 bg-[#f8f9fa] hover:bg-[#eef1f6] border border-[#e8e8e9] rounded-xs text-left transition-colors cursor-pointer group/toggle"
                        aria-expanded={expandedItems[idx] || false}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659]">
                            Details:
                          </span>
                          <span className="text-[11px] text-[#ff5e14] font-semibold">
                            {expandedItems[idx] ? 'Hide Details ▲' : 'Show Details ▼'}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#001659] transition-transform duration-200 ${
                            expandedItems[idx] ? 'rotate-180 text-[#ff5e14]' : ''
                          }`}
                        />
                      </button>

                      {(expandedItems[idx] || isEditMode) && (
                        <div className="mt-2 animate-fadeIn">
                          <EditableText
                            path={`showcases.agriculture.items[${idx}].description`}
                            as="div"
                            multiline
                            className="text-[13px] text-[#0d1527] leading-relaxed whitespace-pre-line block bg-[#f8f9fa] p-3.5 border border-[#e8e8e9] rounded-xs"
                          >
                            {item.description || (Array.isArray(item.details) ? item.details.join('\n\n') : '')}
                          </EditableText>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="w-full py-3 bg-[#001659] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ff5e14] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Request Bulk Supply Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/our-services#agriculture"
                    className="w-full py-2.5 border border-gray-300 text-[#001659] font-heading font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>View Aggregation Terms</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* In Edit Mode: Dedicated "+ Add Commodity" Dashed Card */}
            {isEditMode && (
              <div
                onClick={() => setIsAddModalOpen(true)}
                className="cursor-pointer border-2 border-dashed border-[#ff5e14]/60 hover:border-[#ff5e14] hover:bg-[#ff5e14]/5 transition-all p-8 flex flex-col items-center justify-center min-h-[400px] text-center group rounded-xs"
              >
                <div className="w-14 h-14 rounded-full bg-[#ff5e14]/10 text-[#ff5e14] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-black text-lg text-[#001659] uppercase tracking-wide mb-1">
                  + Add New Commodity
                </h4>
                <p className="text-xs text-[#565969] max-w-xs leading-relaxed">
                  Click to add grains, legumes, export crops or vegetable oils with moisture assays and rate notes.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Bulk Supply Banner */}
          <CmsSection id="agri-cta" name="Offtake & Tender Inquiry CTA" className="mt-16 bg-[#001659] text-white p-8 lg:p-12 border-l-4 border-[#ff5e14] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-heading font-bold text-xs uppercase tracking-[2px] text-[#ff5e14] block mb-2">
                COMMERCIAL OFF-TAKE AGREEMENTS
              </span>
              <h3 className="font-heading font-black text-2xl lg:text-3xl leading-snug">
                Need Scheduled Grain Deliveries or Export Forward Contracts?
              </h3>
              <p className="font-body text-white/80 text-sm mt-3 leading-relaxed">
                We structure reliable forward-supply agreements for industrial processors, feed mills, breweries, and export houses. Enjoy locked-in quality grading, warehouse-receipt assurance, and nationwide logistics.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5e14] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#001659] transition-all shadow-lg"
              >
                Inquire For Forward Contracts
              </Link>
            </div>
          </CmsSection>
        </div>
      </CmsSection>

      {/* Add Item Modal */}
      <ShowcaseItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        category="agriculture"
      />

      {/* Inquiry Modal */}
      {selectedItem && (
        <ShowcaseInquiryModal
          item={selectedItem}
          type="agriculture"
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
