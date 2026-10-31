import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function ParallaxBanner() {
  const { scheme7030 } = siteData;

  return (
    <section
      className="relative w-full py-[100px] lg:py-[140px] bg-cover bg-center font-body overflow-hidden"
      style={{ backgroundImage: `url('/chinese-suv-tank300.jpg')` }}
      data-speed="0.95"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-[1300px] mx-auto px-6 flex justify-end">
        {/* Right offset safety-orange box */}
        <div className="w-full max-w-[671px] bg-[#ff5e14] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-white/90 block mb-4">
            {scheme7030.tagline}
          </span>
          <h2 className="font-heading font-black text-[36px] sm:text-[46px] lg:text-[54px] text-white leading-[1.1] mb-6">
            {scheme7030.headline}
          </h2>
          <p className="font-body text-[16px] sm:text-[18px] text-white/95 leading-[28px] mb-8">
            {scheme7030.intro}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#001659] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300"
            >
              Start Vehicle Order
            </Link>
            <Link
              to="/our-services#car-import"
              className="inline-flex items-center justify-center h-[48px] px-8 border-2 border-white text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#ff5e14] transition-all duration-300"
            >
              How 70/30 Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
