import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles, Sprout, CheckCircle2, ShieldCheck, ArrowRight, Download, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ServicesPage() {
  const { services } = siteData;

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Title Banner */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/services-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/80" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              COMPREHENSIVE TRADING SOLUTIONS
            </span>
            <h1 className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4">
              Our Services
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light">
              End-to-end China-to-Ghana automotive importation, luxury human hair distribution, and commercial agricultural commodity trade.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Service Vertical 1: Automotive Sourcing & Logistics (Section 3.1) */}
      <section id="car-import" className="w-full py-[110px] bg-white border-b border-[#e8e8e9]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3 py-1 text-[11px] font-heading font-black tracking-widest uppercase mb-4">
              <span>{services.automotive.badge}</span>
            </div>
            <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-[1.12] mb-5">
              {services.automotive.headline}
            </h2>
            <p className="font-body text-[17px] text-[#565969] leading-relaxed">
              {services.automotive.overview}
            </p>
          </div>

          {/* 6-Stage Scope of Service Table */}
          <div className="border border-[#e8e8e9] shadow-sm overflow-hidden mb-12">
            <div className="bg-[#001659] text-white px-6 py-4 font-heading font-bold text-[14px] uppercase tracking-wider flex justify-between items-center">
              <span>Service Stage</span>
              <span className="hidden sm:inline">What DeBaldiet Commodities Executes</span>
            </div>

            <div className="divide-y divide-gray-100 bg-white">
              {services.automotive.scope.map((item, idx) => (
                <div key={idx} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-4 font-heading font-bold text-[17px] text-[#001659] flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-[#ff5e14]/10 text-[#ff5e14] flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </span>
                    <span>{item.stage}</span>
                  </div>
                  <div className="md:col-span-8 font-body text-[15px] text-[#565969] leading-relaxed">
                    {item.executes}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#f8f9fa] border border-[#e8e8e9] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-bold text-[22px] text-[#001659] mb-1">
                Ready to Import Your Vehicle with 70/30 Terms?
              </h4>
              <p className="font-body text-[15px] text-[#565969]">
                Submit your desired vehicle make, model, and specifications for a transparent landed cost quote.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors flex-shrink-0"
            >
              Start Vehicle Order
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Service Vertical 2: Beauty & Hair Care Products (Section 3.2) */}
      <section id="beauty" className="w-full py-[110px] bg-[#fcfcfd] border-b border-[#e8e8e9]">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center space-x-2 bg-[#001659] text-white px-3 py-1 text-[11px] font-heading font-black tracking-widest uppercase mb-4">
                <span>{services.beauty.badge}</span>
              </div>
              <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-[1.12] mb-5">
                {services.beauty.headline}
              </h2>
              <p className="font-body text-[17px] text-[#565969] leading-relaxed mb-8">
                {services.beauty.overview}
              </p>
              
              <div className="bg-white p-6 border border-[#e8e8e9] shadow-sm mb-6">
                <h4 className="font-heading font-bold text-[18px] text-[#001659] mb-2 uppercase tracking-wide">
                  Wholesale & Salon Partnership
                </h4>
                <p className="font-body text-[15px] text-[#565969] leading-relaxed mb-6">
                  {services.beauty.wholesale}
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center space-x-2 h-[46px] px-6 bg-[#001659] text-white font-heading font-bold text-[13px] uppercase tracking-[1px] hover:bg-[#ff5e14] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Beauty Catalog</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="w-full h-[460px] overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/feature-interior.jpg"
                  alt="Luxury Hair Extensions and Beauty Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Offerings Grid */}
          <div className="mb-6">
            <h3 className="font-heading font-black text-[24px] uppercase tracking-wider text-[#001659] mb-8">
              Product Offerings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.beauty.offerings.map((item, idx) => (
                <div key={idx} className="bg-white p-7 border border-[#e8e8e9] shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-[#ff5e14]/10 text-[#ff5e14] flex items-center justify-center font-heading font-bold text-sm mb-4">
                    0{idx + 1}
                  </span>
                  <h4 className="font-heading font-bold text-[19px] text-[#001659] mb-2">
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

      {/* 4. Service Vertical 3: Agriculture & Food Commodities (Section 3.3) */}
      <section id="agriculture" className="w-full py-[110px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full h-[460px] overflow-hidden shadow-xl border-4 border-gray-100">
                <img
                  src="/feature-product.jpg"
                  alt="Agricultural Commodities Distribution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3 py-1 text-[11px] font-heading font-black tracking-widest uppercase mb-4">
                <span>{services.agriculture.badge}</span>
              </div>
              <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-[1.12] mb-5">
                {services.agriculture.headline}
              </h2>
              <p className="font-body text-[17px] text-[#565969] leading-relaxed mb-6">
                {services.agriculture.overview}
              </p>

              <div className="bg-[#f8f9fa] p-6 border border-[#e8e8e9] shadow-sm">
                <h4 className="font-heading font-bold text-[18px] text-[#001659] mb-2 uppercase tracking-wide">
                  Quality Assurance Protocols
                </h4>
                <p className="font-body text-[15px] text-[#565969] leading-relaxed mb-6">
                  {services.agriculture.qualityAssurance}
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center h-[46px] px-6 bg-[#ff5e14] text-white font-heading font-bold text-[13px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors"
                >
                  Inquire for Bulk Produce
                </Link>
              </div>
            </div>
          </div>

          {/* Commodities Handled */}
          <div>
            <h3 className="font-heading font-black text-[24px] uppercase tracking-wider text-[#001659] mb-8">
              Commodities Handled
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.agriculture.commodities.map((item, idx) => (
                <div key={idx} className="bg-[#fcfcfd] p-7 border border-[#e8e8e9] shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#001659] text-white flex items-center justify-center font-heading font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="font-heading font-bold text-[19px] text-[#001659] mb-2">
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
    </div>
  );
}
