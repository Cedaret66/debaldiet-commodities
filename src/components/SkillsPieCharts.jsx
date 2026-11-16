import React from 'react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';

export default function SkillsPieCharts() {
  const { content } = useCms();
  const operationalStandards = content.operationalStandards || {};
  const items = operationalStandards.items || [
    {
      percentage: 100,
      subtitle: 'GRA & TECHNICAL CHECKS',
      title: 'Dual Inspection',
      desc: 'China pre-shipment diagnostics and Ghana port arrival roadworthiness verification.'
    },
    {
      percentage: 70,
      subtitle: 'FINANCIAL PARTNERSHIP',
      title: '70/30 Model',
      desc: '70% deposit secures and clears your vehicle; pay the final 30% on handover.'
    },
    {
      percentage: 99,
      subtitle: 'SCHEDULE ADHERENCE',
      title: 'On-Time Delivery',
      desc: 'Guaranteed 4 to 6 weeks China-to-Tema shipping timeline with live tracking.'
    }
  ];

  return (
    <section className="w-full py-[100px] bg-white border-b border-[#f0f0f2] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => {
            const num = Number(String(item.percentage).replace(/[^0-9]/g, '')) || 0;
            const radius = 56;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (Math.min(100, Math.max(0, num)) / 100) * circumference;

            return (
              <div key={idx} className="flex items-center space-x-6">
                {/* Circular ring */}
                <div className="relative w-[130px] h-[130px] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      className="stroke-[#f0f0f2]"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      className="stroke-[#ff5e14] transition-all duration-1000 ease-out"
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="square"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute font-heading font-black text-[26px] text-[#001659]">
                    <EditableText path={`operationalStandards.items[${idx}].percentage`} as="span">
                      {item.percentage}
                    </EditableText>
                    %
                  </span>
                </div>

                {/* Details */}
                <div>
                  <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#ff5e14] block mb-1">
                    <EditableText path={`operationalStandards.items[${idx}].subtitle`} as="span">
                      {item.subtitle}
                    </EditableText>
                  </span>
                  <EditableText
                    path={`operationalStandards.items[${idx}].title`}
                    as="h4"
                    className="font-heading font-bold text-[22px] text-[#001659] mb-1 block"
                  >
                    {item.title}
                  </EditableText>
                  <EditableText
                    path={`operationalStandards.items[${idx}].desc`}
                    as="p"
                    multiline
                    className="font-body text-[14px] text-[#565969] leading-snug block"
                  >
                    {item.desc}
                  </EditableText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
