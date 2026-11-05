import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  ChevronRight,
  ArrowRight,
  Wrench,
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

export default function CarsShowcasePage() {
  const { content, isEditMode, deleteShowcaseItem, duplicateShowcaseItem } = useCms();
  const showcaseData = content.showcases?.cars || {};
  const cars = showcaseData.items || [];

  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = ['ALL', 'HYBRID & EV', 'EXECUTIVE LUXURY', 'RUGGED 4X4', '7-SEATER'];

  const filteredCars = cars.filter((car) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'HYBRID & EV') {
      return car.category?.toLowerCase().includes('energy') || car.powertrain?.toLowerCase().includes('hybrid') || car.powertrain?.toLowerCase().includes('ev');
    }
    if (selectedFilter === 'EXECUTIVE LUXURY') {
      return car.category?.toLowerCase().includes('executive') || car.category?.toLowerCase().includes('luxury');
    }
    if (selectedFilter === 'RUGGED 4X4') {
      return car.category?.toLowerCase().includes('off-road') || car.badge?.toLowerCase().includes('off-road');
    }
    if (selectedFilter === '7-SEATER') {
      return car.category?.toLowerCase().includes('7-seater') || car.badge?.toLowerCase().includes('7 seater');
    }
    return true;
  });

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Hero Title Banner */}
      <CmsSection id="cars-hero" name="Hero & Overview" className="relative w-full py-[80px] lg:py-[100px] bg-[#001659] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('/chinese-suv-byd.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001659]/95 via-[#001659]/85 to-[#001659]/70" />
        
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#ff5e14] mb-4 font-heading font-semibold">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white/70">Showcases</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white">Chinese SUVs & Vehicles</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3.5 py-1 text-[11px] font-heading uppercase tracking-[2px] font-bold mb-4">
              <Car className="w-3.5 h-3.5" />
              <EditableText path="showcases.cars.tagline" as="span">
                {showcaseData.tagline || 'DIRECT FROM FACTORY & HUBS IN CHINA • BRAND NEW & LOW-MILEAGE'}
              </EditableText>
            </span>
            <EditableText
              path="showcases.cars.headline"
              as="h1"
              className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[62px] text-white leading-[1.08] tracking-tight mb-5 block"
            >
              {showcaseData.headline || 'Chinese SUV & Vehicle Showcase'}
            </EditableText>
            <EditableText
              path="showcases.cars.subHeadline"
              as="p"
              multiline
              className="font-body text-[16px] sm:text-[18px] text-white/85 leading-relaxed font-light mb-8 block"
            >
              {showcaseData.subHeadline || 'Explore top-tier Chinese SUVs available for immediate China-to-Accra procurement. Backed by our 70/30 financing plan, dual pre-export inspections, and optional Buy N Spec bespoke customizations.'}
            </EditableText>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">70/30</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Flexible Payment Terms</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">Dual Stage</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Inspections in China & GRA</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2">
                <span className="block text-[#ff5e14] font-heading font-black text-xl">Buy N Spec</span>
                <span className="text-[11px] text-white/80 font-heading uppercase tracking-wider">Custom Interior & Tech Tuning</span>
              </div>
            </div>
          </div>
        </div>
      </CmsSection>

      {/* 2. Main Showcase Grid Section */}
      <CmsSection id="cars-grid" name="Featured Chinese SUVs Grid" className="w-full py-[80px] bg-[#f8f9fa] fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          {/* Header Controls & Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-1">
                AVAILABLE MODELS ({cars.length})
              </span>
              <h2 className="font-heading font-black text-[30px] sm:text-[38px] text-[#001659] leading-tight">
                Featured Chinese SUVs Ready to Ship
              </h2>
            </div>

            {/* Actions & Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Add New Vehicle Button (Visible in Edit Mode) */}
              {isEditMode && (
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 bg-[#ff5e14] hover:bg-[#e04f0e] text-white text-xs font-heading font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all mr-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Vehicle</span>
                </button>
              )}

              {/* Category Filter Pills */}
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
            {filteredCars.map((car, idx) => (
              <div
                key={car.id || idx}
                className="relative bg-white border border-[#e8e8e9] overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Admin Card Action Bar (Visible in Edit Mode) */}
                {isEditMode && (
                  <div className="absolute top-2 right-2 z-30 flex items-center gap-1 bg-[#001659]/90 backdrop-blur-sm p-1 rounded border border-white/20 shadow-lg">
                    <button
                      type="button"
                      onClick={() => duplicateShowcaseItem('cars', idx)}
                      className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded transition-colors"
                      title="Duplicate this vehicle"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Delete "${car.name}" from showcase?`)) {
                          deleteShowcaseItem('cars', idx);
                        }
                      }}
                      className="p-1 text-red-400 hover:text-white hover:bg-red-500 rounded transition-colors"
                      title="Delete this vehicle"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[250px] overflow-hidden bg-gray-100">
                    <EditableImage
                      path={`showcases.cars.items[${idx}].image`}
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Brand Tag Top Left */}
                    <div className="absolute top-3 left-3 bg-[#001659] text-white px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                      {car.brand || 'CHINESE SUV'}
                    </div>
                    {/* Badge Top Right */}
                    {car.badge && !isEditMode && (
                      <div className="absolute top-3 right-3 bg-[#ff5e14] text-white px-3 py-1 text-[10px] font-heading font-black uppercase tracking-widest shadow-sm">
                        {car.badge}
                      </div>
                    )}
                    {/* Condition Pill Bottom Left */}
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-heading uppercase tracking-wider">
                      {car.condition || 'New & Low-Mileage'}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Title / Name */}
                    <h3 className="font-heading font-black text-[22px] text-[#001659] group-hover:text-[#ff5e14] transition-colors leading-snug mb-2">
                      <EditableText path={`showcases.cars.items[${idx}].name`}>
                        {car.name}
                      </EditableText>
                    </h3>

                    {/* Price Block */}
                    <div className="mb-4 pb-4 border-b border-[#e8e8e9]">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#565969]">
                          Landed Tema Price
                        </span>
                        <span className="font-heading font-black text-[20px] text-[#001659]">
                          <EditableText path={`showcases.cars.items[${idx}].price`}>
                            {car.price}
                          </EditableText>
                        </span>
                      </div>
                      {/* 70/30 Breakdown highlight */}
                      {car.deposit70 && (
                        <div className="mt-2 py-1.5 px-2.5 bg-[#f8f9fa] border-l-2 border-[#ff5e14] flex items-center justify-between text-xs font-heading">
                          <span className="text-[#565969] font-medium">70% Initial Deposit:</span>
                          <span className="text-[#ff5e14] font-bold">
                            <EditableText path={`showcases.cars.items[${idx}].deposit70`}>
                              {car.deposit70}
                            </EditableText>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Car Details / Description */}
                    <div className="mb-6">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] block mb-1.5">
                        Details:
                      </span>
                      <EditableText
                        path={`showcases.cars.items[${idx}].description`}
                        as="div"
                        multiline
                        className="text-[13px] text-[#565969] leading-relaxed whitespace-pre-line block bg-[#f8f9fa] p-3.5 border border-[#e8e8e9] rounded-xs"
                      >
                        {car.description || (Array.isArray(car.details) ? car.details.join('\n\n') : '')}
                      </EditableText>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="w-full py-3 bg-[#001659] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ff5e14] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Inquire / Order Car</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/buy-and-spec"
                    className="w-full py-2.5 border border-gray-300 text-[#001659] font-heading font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Wrench className="w-3.5 h-3.5 text-[#ff5e14]" />
                    <span>Customize with Buy N Spec</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* In Edit Mode: Dedicated "+ Add Vehicle" Dashed Card at End of Grid */}
            {isEditMode && (
              <div
                onClick={() => setIsAddModalOpen(true)}
                className="cursor-pointer border-2 border-dashed border-[#ff5e14]/60 hover:border-[#ff5e14] hover:bg-[#ff5e14]/5 transition-all p-8 flex flex-col items-center justify-center min-h-[400px] text-center group rounded-xs"
              >
                <div className="w-14 h-14 rounded-full bg-[#ff5e14]/10 text-[#ff5e14] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-black text-lg text-[#001659] uppercase tracking-wide mb-1">
                  + Add New Vehicle
                </h4>
                <p className="text-xs text-[#565969] max-w-xs leading-relaxed">
                  Click to add a new car to this showcase with full images, landed pricing, and copy-paste specs.
                </p>
              </div>
            )}
          </div>

          {/* Bottom 70/30 Callout Banner */}
          <CmsSection id="cars-cta" name="70/30 Custom Sourcing CTA" className="mt-16 bg-[#001659] text-white p-8 lg:p-12 border-l-4 border-[#ff5e14] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-heading font-bold text-xs uppercase tracking-[2px] text-[#ff5e14] block mb-2">
                FLEXIBLE AUTO FINANCING
              </span>
              <h3 className="font-heading font-black text-2xl lg:text-3xl leading-snug">
                Don't See Your Desired Model? We Source Any Chinese Vehicle on Demand.
              </h3>
              <p className="font-body text-white/80 text-sm mt-3 leading-relaxed">
                Whether you need a specific BYD EV trim, an executive Zeekr, or commercial fleet vans, tell us your make and model. We inspect it in China, cover 30% under our flexible plan, and deliver it across Ghana and Africa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff5e14] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#001659] transition-all shadow-lg"
              >
                Request Custom Vehicle Quote
              </Link>
              <Link
                to="/buy-and-spec"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#001659] transition-all"
              >
                Explore Buy N Spec
              </Link>
            </div>
          </CmsSection>
        </div>
      </CmsSection>

      {/* Add Item Modal */}
      <ShowcaseItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        category="cars"
      />

      {/* Inquiry Modal */}
      {selectedCar && (
        <ShowcaseInquiryModal
          item={selectedCar}
          type="cars"
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
}
