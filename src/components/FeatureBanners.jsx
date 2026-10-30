import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FeatureBanners() {
  const { intro, corePillars } = siteData;

  return (
    <section className="w-full pt-[100px] pb-[90px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* 1.2 Intro / Welcome Callout Section */}
        <div className="max-w-4xl mb-16">
          <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            {intro.sectionTag}
          </span>
          <h2 className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-[#001659] leading-[1.08] tracking-tight mb-6">
            {intro.heading}
          </h2>
          <p className="font-body text-[17px] sm:text-[18px] text-[#565969] leading-relaxed">
            {intro.paragraph}
          </p>
        </div>

        {/* 1.3 The 3 Core Pillars (Bridge 510 Icon Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {corePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-white border border-[#e8e8e9] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Photo top */}
              <div className="w-full h-[240px] overflow-hidden bg-gray-100 relative">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#001659] text-white px-3 py-1 font-heading font-black text-[11px] uppercase tracking-widest">
                  {pillar.badge}
                </div>
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-heading uppercase text-[12px] font-bold tracking-[1.5px] text-[#565969] block mb-2">
                    {pillar.vertical}
                  </span>
                  <h3 className="font-heading font-bold text-[24px] text-[#001659] leading-tight mb-4 group-hover:text-[#ff5e14] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[15px] text-[#565969] leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-[#f0f0f2] mb-8">
                    {pillar.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2.5 text-[14px] text-[#303030]">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center space-x-2 font-heading font-bold text-[14px] uppercase tracking-[1px] text-[#ff5e14] group-hover:text-[#001659] transition-colors"
                >
                  <span>{pillar.linkText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
