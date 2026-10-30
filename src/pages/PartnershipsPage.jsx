import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, TrendingUp, Users, CheckCircle2, ArrowRight, FileCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PartnershipsPage() {
  const { partnerships } = siteData;

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Title Banner */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/services-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/85" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              {partnerships.tagline} • {partnerships.badge}
            </span>
            <h1 className="font-heading font-black text-[46px] sm:text-[62px] lg:text-[70px] text-white leading-[1.05] tracking-tight mb-4">
              {partnerships.headline}
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light">
              Structured collaboration models for commercial banks, credit unions, and corporate institutions across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Executive Proposal Summary */}
      <section className="w-full py-[110px] bg-white border-b border-[#e8e8e9]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              EXECUTIVE PROPOSAL SUMMARY
            </span>
            <h2 className="font-heading font-black text-[34px] sm:text-[46px] text-[#001659] leading-[1.15] mb-6">
              Empowering Financial Institutions with Accountable Vehicle Sourcing
            </h2>
            <p className="font-body text-[18px] text-[#565969] leading-relaxed">
              {partnerships.summary}
            </p>
          </div>

          {/* 2 Main Collaboration Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {partnerships.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#fcfcfd] border border-[#e8e8e9] p-8 sm:p-10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#001659] text-white flex items-center justify-center font-heading font-black text-xl mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-[24px] sm:text-[26px] text-[#001659] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[16px] text-[#565969] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-200 flex items-center space-x-2 text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5e14]" />
                  <span>Turnkey Institutional Execution</span>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Benefit Matrix */}
          <div>
            <div className="mb-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                STRATEGIC VALUE PROPOSITION
              </span>
              <h3 className="font-heading font-black text-[28px] sm:text-[34px] text-[#001659]">
                Institutional Benefit Matrix
              </h3>
            </div>

            <div className="border border-[#e8e8e9] shadow-sm overflow-hidden">
              <div className="bg-[#001659] text-white px-6 py-4 font-heading font-bold text-[14px] uppercase tracking-wider grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4">Benefit to Bank</span>
                <span className="md:col-span-8">How DeBaldiet Commodities Delivers It</span>
              </div>

              <div className="divide-y divide-gray-100 bg-white">
                {partnerships.matrix.map((row, idx) => (
                  <div key={idx} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors">
                    <div className="md:col-span-4 font-heading font-bold text-[18px] text-[#001659] flex items-center space-x-2.5">
                      <span className="w-2 h-2 bg-[#ff5e14] rounded-full flex-shrink-0" />
                      <span>{row.benefit}</span>
                    </div>
                    <div className="md:col-span-8 font-body text-[15px] text-[#565969] leading-relaxed">
                      {row.delivery}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="w-full py-[100px] bg-[#001659] text-white">
        <div className="max-w-[1300px] mx-auto px-6 text-center max-w-3xl">
          <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            B2B COLLABORATION
          </span>
          <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-white leading-tight mb-6">
            Partner with DeBaldiet Commodities Today
          </h2>
          <p className="font-body text-[17px] text-white/90 leading-relaxed mb-8">
            Schedule an executive consultation with Managing Director Joshua King Kotey to structure a preferred vendor agreement or joint asset-financing facility for your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center h-[50px] px-8 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300"
            >
              Schedule Partnership Meeting
            </Link>
            <a
              href="mailto:debaldietcommodities@gmail.com"
              className="inline-flex items-center justify-center h-[50px] px-8 border-2 border-white text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300"
            >
              Direct Email Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
