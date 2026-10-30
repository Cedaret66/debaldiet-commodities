import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    {
      title: 'How does the 70/30 vehicle financing plan work?',
      content: 'Select your desired vehicle model (sedan, SUV, truck, or EV). You pay 70% of the total vehicle cost into our secured account. DeBaldiet Commodities tops up the remaining 30% and completes the direct factory or dealership purchase in China immediately. We manage shipping, port customs clearance, and local transit. You inspect the car in Accra and only pay the final 30% upon handover.'
    },
    {
      title: 'What does the dual-stage inspection cover?',
      content: 'Every vehicle undergoes two thorough assessments: Stage 1 in China prior to container loading (verifying mechanical systems, engine health, chassis integrity, and electronics) and Stage 2 in Ghana upon arrival at Tema Port (confirming compliance with Ghana Revenue Authority benchmarks and DVLA roadworthiness standards).'
    },
    {
      title: 'How do salon wholesale hair supplies work?',
      content: 'We partner directly with beauty salon directors, stylists, and cosmetics retailers across Ghana. We supply 100% authentic virgin human hair bundles, custom HD lace frontals, closures, and organic treatment formulations at tiered wholesale pricing with low Minimum Order Quantities (MOQs) and scheduled restocking.'
    },
    {
      title: 'Which agricultural commodities do you supply in bulk?',
      content: 'DC connects farm cooperatives directly with commercial processors, millers, and wholesale distributors. We regularly supply yellow and white maize, polished rice, sorghum, millet, soybeans, groundnuts, cowpeas, and raw feed mill inputs with rigorous moisture content and purity grading.'
    }
  ];

  return (
    <section className="w-full py-[110px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image (651px) */}
          <div className="lg:col-span-6">
            <div className="w-full h-[455px] overflow-hidden shadow-lg border border-gray-100 relative">
              <img
                src="/home-accordion-img.jpg"
                alt="DeBaldiet Logistics"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001659]/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="font-heading uppercase text-xs tracking-widest text-[#ff5e14] font-bold mb-1">
                  TRADE ACCOUNTABILITY
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  Zero Hidden Fees. 100% Traceability.
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Accordions */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-heading font-black text-[32px] sm:text-[40px] text-[#001659] leading-tight">
                Clear Answers on Procurement & Terms
              </h2>
            </div>

            <div className="space-y-4">
              {accordions.map((acc, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="border border-[#e8e8e9] transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-heading font-bold text-[18px] sm:text-[20px] text-[#001659]">
                        {acc.title}
                      </span>
                      <span className="w-7 h-7 rounded-full border border-[#001659]/20 flex items-center justify-center text-[#001659] flex-shrink-0 ml-4">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-body text-[15px] text-[#565969] leading-relaxed border-t border-gray-100 pt-4">
                        {acc.content}
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
