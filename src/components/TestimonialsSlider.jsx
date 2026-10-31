import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function TestimonialsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { content } = useCms();
  const testimonials = content.testimonials || [];

  return (
    <section className="w-full py-[120px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              SOCIAL PROOF & REVIEWS
            </span>
            <h2 className="font-heading font-black text-[38px] sm:text-[50px] lg:text-[60px] text-[#001659] leading-tight tracking-tight">
              Client Testimonials
            </h2>
          </div>
          <p className="text-[#565969] text-[16px] max-w-md mt-4 md:mt-0">
            Real feedback from private automotive importers, commercial beauty salons, and agricultural distribution partners across Ghana and Africa.
          </p>
        </div>

        {/* Testimonial Cards Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {testimonials.slice(activeSlide, activeSlide + 2).map((item, idx) => {
            const actualIdx = activeSlide + idx;
            return (
              <div
                key={idx}
                className="bg-[#00235a] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[440px] relative overflow-hidden"
              >
                {/* Top: Avatar, Category Badge & Rating */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                      <EditableImage
                        path={`testimonials[${actualIdx}].avatar`}
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        title="Change Client Avatar"
                      />
                    </div>
                    <div>
                      <span className="inline-block bg-[#ff5e14] text-white text-[11px] font-heading font-black uppercase tracking-wider px-2.5 py-0.5 mb-1.5">
                        {item.clientType}
                      </span>
                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-12 h-12 text-white/20" />
                </div>

                {/* Content */}
                <div>
                  <EditableText
                    path={`testimonials[${actualIdx}].quote`}
                    as="p"
                    multiline
                    className="font-body text-[16px] text-white/90 leading-[26px] mb-8 italic block"
                  >
                    {item.quote}
                  </EditableText>
                  <div>
                    <EditableText
                      path={`testimonials[${actualIdx}].name`}
                      as="h4"
                      className="font-heading font-bold text-[22px] text-white mb-1 block"
                    >
                      {item.name}
                    </EditableText>
                    <EditableText
                      path={`testimonials[${actualIdx}].title`}
                      as="span"
                      className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-white/70 block"
                    >
                      {item.title}
                    </EditableText>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center space-x-3 mt-10">
          {[0, 1].map((dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === dotIdx
                  ? 'w-6 h-2.5 bg-[#001659]'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
