import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function ProjectsPortfolio({ onSelectProject }) {
  const [startIndex, setStartIndex] = useState(0);
  const { content } = useCms();
  const portfolio = content.portfolio || {};
  const showcase = portfolio.items || [];

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, showcase.length - 3)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < showcase.length - 3 ? prev + 1 : 0));
  };

  const visibleItems = showcase.slice(startIndex, startIndex + 3);

  return (
    <section className="w-full py-[120px] bg-[#00235a] text-white overflow-hidden font-body">
      <div className="max-w-[1300px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
            <EditableText path="portfolio.tagline" as="span">
              {portfolio.tagline || 'DELIVERED COMMODITIES & VEHICLES'}
            </EditableText>
          </span>
          <EditableText
            path="portfolio.headline"
            as="h2"
            className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight block"
          >
            {portfolio.headline || 'Procurement Showcase'}
          </EditableText>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrev}
            className="w-[50px] h-[50px] border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5e14] hover:border-[#ff5e14] transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-[50px] h-[50px] border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5e14] hover:border-[#ff5e14] transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Projects Grid / Carousel */}
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {visibleItems.map((item, relIdx) => {
            const actualIdx = startIndex + relIdx;
            return (
              <div
                key={item.id || actualIdx}
                className="group relative bg-[#001c47] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="w-full h-[280px] overflow-hidden bg-gray-900 relative">
                  <EditableImage
                    path={`portfolio.items[${actualIdx}].image`}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    title={`Change image for ${item.title}`}
                  />
                  <div className="absolute top-4 right-4 bg-[#ff5e14] text-white px-2.5 py-0.5 text-[10px] font-heading font-black tracking-widest uppercase z-10">
                    <EditableText path={`portfolio.items[${actualIdx}].badge`} as="span">
                      {item.badge}
                    </EditableText>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-heading uppercase text-[12px] tracking-[1.5px] text-[#ff5e14] block mb-2 font-bold">
                      <EditableText path={`portfolio.items[${actualIdx}].category`} as="span">
                        {item.category}
                      </EditableText>
                    </span>
                    <EditableText
                      path={`portfolio.items[${actualIdx}].title`}
                      as="h3"
                      className="font-heading font-bold text-[22px] text-white leading-tight mb-3 block"
                    >
                      {item.title}
                    </EditableText>
                    <EditableText
                      path={`portfolio.items[${actualIdx}].desc`}
                      as="p"
                      multiline
                      className="font-body text-[14px] text-white/80 leading-relaxed mb-6 block"
                    >
                      {item.desc}
                    </EditableText>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to="/our-services"
                      className="inline-flex items-center space-x-2 text-[14px] text-white font-heading font-semibold hover:text-[#ff5e14] transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
