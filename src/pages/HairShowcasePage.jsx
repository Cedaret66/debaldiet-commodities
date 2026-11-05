import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';
import ShowcaseInquiryModal from '../components/ShowcaseInquiryModal';

export default function HairShowcasePage() {
  const { content } = useContent();
  const showcaseData = content.showcases?.hair || {};
  const hairItems = showcaseData.items || [];

  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['ALL', 'RAW BUNDLES', 'HD LACE WIGS', 'GLUELESS UNITS', 'WHOLESALE CARTONS'];

  const filteredItems = hairItems.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'RAW BUNDLES') {
      return item.category?.toLowerCase().includes('bundles') || item.grade?.toLowerCase().includes('raw');
    }
    if (selectedFilter === 'HD LACE WIGS') {
      return item.category?.toLowerCase().includes('lace') || item.name?.toLowerCase().includes('frontal');
    }
    if (selectedFilter === 'GLUELESS UNITS') {
      return item.category?.toLowerCase().includes('glueless') || item.name?.toLowerCase().includes('bob');
    }
    if (selectedFilter === 'WHOLESALE CARTONS') {
      return item.category?.toLowerCase().includes('wholesale') || item.badge?.toLowerCase().includes('wholesale');
    }
    return true;
  });

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Hero Title Banner */}
      <section className="relative w-full py-[80px] lg:py-[100px] bg-[#001659] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('/feature-interior.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001659]/95 via-[#001659]/85 to-[#001659]/70" />

        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#ff5e14] mb-4 font-heading font-semibold">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white/70">Showcases</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white">Luxury Hair & Beauty</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3.5 py-1 text-[11px] font-heading uppercase tracking-[2px] font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <EditableText path="showcases.hair.tagline" as="span">
                {showcaseData.tagline || '100% UNPROCESSED VIRGIN HUMAN HAIR • WHOLESALE & RETAIL'}
              </EditableText>
            </span>
            <EditableText
              path="showcases.hair.headline"
              as="h1"
              className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[62px] text-white leading-[1.08] tracking-tight mb-5 block"
            >
              {showcaseData.headline || 'Luxury Virgin Hair & Salon Showcase'}
            </EditableText>
            <EditableText
              path="showcases.hair.subHeadline"
              as="p"
              multiline
              className="font-body text-[16px] sm:text-[18px] text-white/85 leading-relaxed font-light mb-8 block"
            >
              {showcaseData.subHeadline || 'Supplying individual clients and commercial salons across Ghana and Africa with single-donor virgin hair bundles, flawless HD lace wigs, transparent closures, and bulk salon cartons.'}
            </EditableText>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">100%</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Virgin Human Hair</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">HD Melt</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Invisible Swiss Lace</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">Wholesale</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Direct Salon Tier Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Showcase Grid Section */}
      <section className="w-full py-[80px] bg-[#f8f9fa] fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          {/* Header Controls & Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-1">
                CURATED INVENTORY
              </span>
              <h2 className="font-heading font-black text-[30px] sm:text-[38px] text-[#001659] leading-tight">
                Authentic Virgin Bundles & Custom Units
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
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
                className="bg-white border border-[#e8e8e9] overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[250px] overflow-hidden bg-gray-100">
                    <EditableImage
                      path={`showcases.hair.items[${idx}].image`}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Tag Top Left */}
                    <div className="absolute top-3 left-3 bg-[#001659] text-white px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                      {item.grade || '100% VIRGIN'}
                    </div>
                    {/* Badge Top Right */}
                    {item.badge && (
                      <div className="absolute top-3 right-3 bg-[#ff5e14] text-white px-3 py-1 text-[10px] font-heading font-black uppercase tracking-widest shadow-sm">
                        {item.badge}
                      </div>
                    )}
                    {/* Texture Pill Bottom Left */}
                    {item.texture && (
                      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-heading uppercase tracking-wider">
                        {item.texture}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Title / Name */}
                    <h3 className="font-heading font-black text-[22px] text-[#001659] group-hover:text-[#ff5e14] transition-colors leading-snug mb-2">
                      <EditableText path={`showcases.hair.items[${idx}].name`}>
                        {item.name}
                      </EditableText>
                    </h3>

                    {/* Price Block */}
                    <div className="mb-4 pb-4 border-b border-[#e8e8e9]">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#565969]">
                          Pricing
                        </span>
                        <span className="font-heading font-black text-[20px] text-[#ff5e14]">
                          <EditableText path={`showcases.hair.items[${idx}].price`}>
                            {item.price}
                          </EditableText>
                        </span>
                      </div>
                      {item.localPrice && (
                        <div className="mt-2 py-1.5 px-2.5 bg-[#f8f9fa] border-l-2 border-[#001659] flex items-center justify-between text-xs font-heading">
                          <span className="text-[#565969] font-medium">Local Wholesale Estimate:</span>
                          <span className="text-[#001659] font-bold">{item.localPrice}</span>
                        </div>
                      )}
                    </div>

                    {/* Hair Details / Description */}
                    <div className="mb-6">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] block mb-1.5">
                        Details:
                      </span>
                      <EditableText
                        path={`showcases.hair.items[${idx}].description`}
                        as="div"
                        multiline
                        className="text-[13px] text-[#565969] leading-relaxed whitespace-pre-line block bg-[#f8f9fa] p-3.5 border border-[#e8e8e9] rounded-xs"
                      >
                        {item.description || (Array.isArray(item.details) ? item.details.join('\n\n') : '')}
                      </EditableText>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="w-full py-3 bg-[#001659] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ff5e14] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Order / Inquire Stock</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/our-services#beauty"
                    className="w-full py-2.5 border border-gray-300 text-[#001659] font-heading font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>View Wholesale Terms</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Salon Wholesale Banner */}
          <div className="mt-16 bg-[#001659] text-white p-8 lg:p-12 border-l-4 border-[#ff5e14] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-heading font-bold text-xs uppercase tracking-[2px] text-[#ff5e14] block mb-2">
                COMMERCIAL SALON PARTNERSHIP
              </span>
              <h3 className="font-heading font-black text-2xl lg:text-3xl leading-snug">
                Own a Salon or Beauty Studio? Access Wholesale Direct Pricing.
              </h3>
              <p className="font-body text-white/80 text-sm mt-3 leading-relaxed">
                Stock your salon with high-margin, verifiable raw virgin hair without the stress of custom seizures, scam vendors, or thin bundles. We provide sample packs, recurring restock schedules, and doorstep delivery across Ghana.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5e14] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#001659] transition-all shadow-lg"
              >
                Open Salon Wholesale Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {selectedItem && (
        <ShowcaseInquiryModal
          item={selectedItem}
          type="hair"
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
