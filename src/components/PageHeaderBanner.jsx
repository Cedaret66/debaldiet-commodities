import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeaderBanner({ subtitle = "EXPLORE THE FEATURES", title, description, bgImage }) {
  return (
    <div className="relative py-16 sm:py-20 lg:py-24 bg-brand-navy text-white overflow-hidden border-b-4 border-brand-orange">
      {/* Background with subtle industrial grid & image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : `url('https://bridge510.qodeinteractive.com/wp-content/uploads/2019/02/our-services-title-img.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/80" />

      {/* Watermark in Header */}
      <div className="absolute right-4 bottom-0 font-heading font-black text-7xl sm:text-9xl text-white/[0.04] uppercase select-none pointer-events-none whitespace-nowrap">
        {title}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <span className="font-heading uppercase text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-orange block mb-2">
            {subtitle}
          </span>

          {/* Page Main Title */}
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {/* Breadcrumbs */}
          <div className="mt-6 flex items-center space-x-2 text-xs font-heading uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-white font-bold">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
