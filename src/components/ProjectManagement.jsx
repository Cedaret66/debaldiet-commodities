import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Clock, Truck, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProjectManagement() {
  const { scheme7030, operationalExcellence } = siteData;

  return (
    <section id="car-import" className="w-full py-[110px] bg-[#f8f9fa] border-y border-[#e8e8e9] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            {scheme7030.tagline}
          </span>
          <h2 className="font-heading font-black text-[36px] sm:text-[48px] lg:text-[54px] text-[#001659] leading-[1.12] mb-5">
            {scheme7030.headline}
          </h2>
          <p className="font-body text-[17px] text-[#565969] leading-relaxed">
            {scheme7030.intro}
          </p>
        </div>

        {/* 4-Step Progressive Timeline matching Page 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scheme7030.steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-white p-7 border border-[#e8e8e9] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#001659] text-white flex items-center justify-center font-heading font-black text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-[20px] text-[#001659] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] text-[#565969] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider">
                <span>Phase 0{item.step}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 1.5 Operational Excellence & Dual-Stage Inspection matching Page 7 */}
        <div className="bg-white border border-[#e8e8e9] p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-1">
                TRUST BADGES
              </span>
              <h3 className="font-heading font-black text-[26px] sm:text-[32px] text-[#001659]">
                Operational Excellence & Dual-Stage Inspection
              </h3>
            </div>
            <Link
              to="/contact-us"
              className="mt-4 md:mt-0 inline-flex items-center justify-center h-[46px] px-6 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors"
            >
              Order a Vehicle
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalExcellence.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#565969] block">
                  {item.stage}
                </span>
                <h4 className="font-heading font-bold text-[20px] text-[#001659]">
                  {item.title}
                </h4>
                <p className="font-body text-[14px] text-[#565969] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
