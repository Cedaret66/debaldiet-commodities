import React from 'react';
import { siteData } from '../data/siteData';

export default function StatsCounter() {
  const { counters } = siteData;

  return (
    <section className="w-full py-[100px] bg-white border-b border-[#f0f0f2] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {counters.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#fcfcfd] border border-[#e8e8e9] hover:border-[#001659] transition-colors flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <span className="font-heading uppercase text-[11px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                  COUNTER 0{idx + 1}
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="font-heading font-black text-[42px] sm:text-[48px] text-[#001659] leading-none tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="font-heading font-bold text-[20px] text-[#001659]">
                      {item.unit}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="font-heading uppercase text-[11px] font-bold tracking-[1.2px] text-[#565969] leading-tight">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
