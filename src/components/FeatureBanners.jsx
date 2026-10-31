import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function FeatureBanners() {
  const { content } = useCms();
  const { intro, corePillars } = content;

  return (
    <section className="w-full pt-[100px] pb-[90px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* 1.2 Intro / Welcome Callout Section */}
        <div className="max-w-4xl mb-16">
          <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            <EditableText path="intro.sectionTag">{intro.sectionTag}</EditableText>
          </span>
          <h2 className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-[#001659] leading-[1.08] tracking-tight mb-6">
            <EditableText path="intro.heading">{intro.heading}</EditableText>
          </h2>
          <div className="font-body text-[17px] sm:text-[18px] text-[#565969] leading-relaxed">
            <EditableText path="intro.paragraph" multiline>{intro.paragraph}</EditableText>
          </div>
        </div>

        {/* 1.3 The 3 Core Pillars (Bridge 510 Icon Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {corePillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group bg-white border border-[#e8e8e9] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Photo top */}
              <div className="w-full h-[240px] overflow-hidden bg-gray-100 relative">
                <EditableImage
                  path={`corePillars[${idx}].image`}
                  src={pillar.image}
                  alt={pillar.title}
                  title={`Change ${pillar.title} Image`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#001659] text-white px-3 py-1 font-heading font-black text-[11px] uppercase tracking-widest z-10 pointer-events-none">
                  {pillar.badge}
                </div>
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-heading uppercase text-[12px] font-bold tracking-[1.5px] text-[#565969] block mb-2">
                    {pillar.vertical}
                  </span>
                  <h3 className="font-heading font-black text-[22px] leading-tight text-[#001659] mb-4">
                    <EditableText path={`corePillars[${idx}].title`}>{pillar.title}</EditableText>
                  </h3>
                  <div className="font-body text-[15px] text-[#565969] leading-[26px] mb-6">
                    <EditableText path={`corePillars[${idx}].summary`} multiline>{pillar.summary}</EditableText>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-3 mb-8">
                    {pillar.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-3 text-[14px] text-[#303030]">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Orange Footer CTA Bar */}
                <div className="pt-4 border-t border-[#e8e8e9]">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center space-x-2 font-heading uppercase text-[13px] font-bold tracking-[1px] text-[#001659] group-hover:text-[#ff5e14] transition-colors"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-4 h-4 text-[#ff5e14] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
