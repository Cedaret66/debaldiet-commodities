import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { content } = useCms();
  const faq = content.faq || {};
  const accordions = faq.items || [];

  return (
    <section className="w-full py-[110px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image (651px) */}
          <div className="lg:col-span-6">
            <div className="w-full h-[455px] overflow-hidden shadow-lg border border-gray-100 relative">
              <EditableImage
                path="faq.bannerImage"
                src={faq.bannerImage || '/home-accordion-img.jpg'}
                alt="DeBaldiet Logistics"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                title="Change FAQ Banner Image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001659]/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white pointer-events-none">
                <span className="font-heading uppercase text-xs tracking-widest text-[#ff5e14] font-bold mb-1 pointer-events-auto">
                  <EditableText path="faq.bannerTag" as="span">
                    {faq.bannerTag || 'TRADE ACCOUNTABILITY'}
                  </EditableText>
                </span>
                <div className="pointer-events-auto">
                  <EditableText
                    path="faq.bannerTitle"
                    as="h3"
                    className="font-heading font-black text-2xl sm:text-3xl text-white block"
                  >
                    {faq.bannerTitle || 'Zero Hidden Fees. 100% Traceability.'}
                  </EditableText>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordions */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                <EditableText path="faq.tagline" as="span">
                  {faq.tagline || 'FREQUENTLY ASKED QUESTIONS'}
                </EditableText>
              </span>
              <EditableText
                path="faq.heading"
                as="h2"
                className="font-heading font-black text-[32px] sm:text-[40px] text-[#001659] leading-tight block"
              >
                {faq.heading || 'Clear Answers on Procurement & Terms'}
              </EditableText>
            </div>

            <div className="space-y-4">
              {accordions.map((acc, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="border border-[#e8e8e9] transition-colors"
                  >
                    <div className="w-full py-4 px-6 flex items-center justify-between text-left">
                      <div className="flex-grow pr-4">
                        <EditableText
                          path={`faq.items[${idx}].title`}
                          as="h4"
                          className="font-heading font-bold text-[18px] sm:text-[20px] text-[#001659] block cursor-pointer"
                        >
                          {acc.title}
                        </EditableText>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className="w-7 h-7 rounded-full border border-[#001659]/20 flex items-center justify-center text-[#001659] flex-shrink-0 ml-4 hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors"
                        aria-label={isOpen ? "Collapse FAQ" : "Expand FAQ"}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="px-6 pb-6 text-body text-[15px] text-[#565969] leading-relaxed border-t border-gray-100 pt-4">
                        <EditableText
                          path={`faq.items[${idx}].content`}
                          as="p"
                          multiline
                          className="block"
                        >
                          {acc.content}
                        </EditableText>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
