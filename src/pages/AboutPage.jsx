import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, MapPin, Phone, Mail, ArrowRight, Quote, Award } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from '../components/cms/EditableText';
import EditableImage from '../components/cms/EditableImage';

export default function AboutPage() {
  const { content } = useCms();
  const { about = {}, testimonials = [] } = content;
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Title Banner - Height 535px */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/about-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/80" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              ABOUT DEBALDIET COMMODITIES
            </span>
            <EditableText
              path="about.headline"
              as="h1"
              className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4"
            >
              {about.headline || 'About DeBaldiet Commodities'}
            </EditableText>
            <EditableText
              path="about.subHeadline"
              as="p"
              multiline
              className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light"
            >
              {about.subHeadline || 'Bridging Global Sourcing with Reliable Local Execution Across Ghana and Africa.'}
            </EditableText>
          </div>
        </div>
      </section>

      {/* 2. Company Overview & Our Story */}
      <section className="w-full py-[110px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="w-full h-[480px] overflow-hidden shadow-2xl border-4 border-gray-100">
                <EditableImage
                  path="about.storyImage"
                  src={about.storyImage || '/about-project-mgmt.jpg'}
                  alt="DeBaldiet Commodities Headquarters"
                  className="w-full h-full object-cover"
                  title="Change Headquarters Image"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#ff5e14] text-white p-6 shadow-xl max-w-[240px] z-10">
                <div className="font-heading font-black text-2xl">ACCRA, GHANA</div>
                <div className="font-heading uppercase text-xs tracking-wider mt-1 font-semibold text-white/90">
                  Trade Hub for Ghana & Africa
                </div>
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-7">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
                OUR STORY & TRADE PHILOSOPHY
              </span>
              <h2 className="font-heading font-black text-[34px] sm:text-[44px] text-[#001659] leading-[1.15] mb-6">
                Bridging Global Sourcing with Reliable Local Execution
              </h2>
              
              <div className="space-y-4 text-[16px] text-[#565969] leading-relaxed">
                {(about.story || []).map((paragraph, idx) => (
                  <EditableText
                    key={idx}
                    path={`about.story[${idx}]`}
                    as="p"
                    multiline
                    className="block leading-relaxed"
                  >
                    {paragraph}
                  </EditableText>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center h-[48px] px-7 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors"
                >
                  Our 3 Verticals
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center h-[48px] px-7 border-2 border-[#001659] text-[#001659] font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] hover:text-white transition-colors"
                >
                  Contact Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="w-full py-[100px] bg-[#f8f9fa] border-y border-[#e8e8e9] fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-12 border border-[#e8e8e9] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                  OUR VISION
                </span>
                <EditableText
                  path="about.vision.title"
                  as="h3"
                  className="font-heading font-black text-[26px] sm:text-[30px] text-[#001659] mb-4"
                >
                  {about.vision?.title || "To Be Africa's Benchmark in Accountable Trade"}
                </EditableText>
                <EditableText
                  path="about.vision.desc"
                  as="p"
                  multiline
                  className="font-body text-[16px] text-[#565969] leading-relaxed"
                >
                  {about.vision?.desc || "To establish DeBaldiet Commodities as Africa's most trusted multi-sector trading partner."}
                </EditableText>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-[#001659]">
                <Award className="w-4 h-4 text-[#ff5e14]" />
                <span>BENCHMARK IN ACCOUNTABLE TRADE</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#001659] text-white p-8 sm:p-12 shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                  OUR MISSION
                </span>
                <EditableText
                  path="about.mission.title"
                  as="h3"
                  className="font-heading font-black text-[26px] sm:text-[30px] text-white mb-4"
                >
                  {about.mission?.title || "Accessible Quality & Total Transparency Across Africa"}
                </EditableText>
                <EditableText
                  path="about.mission.desc"
                  as="p"
                  multiline
                  className="font-body text-[16px] text-white/90 leading-relaxed"
                >
                  {about.mission?.desc || "To deliver verified, high-value vehicles, custom vehicle speccing, authentic beauty products, and vital food commodities."}
                </EditableText>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ff5e14]">
                <ShieldCheck className="w-4 h-4 text-[#ff5e14]" />
                <span>ACCESSIBLE QUALITY & TOTAL TRANSPARENCY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Matrix */}
      <section className="w-full py-[110px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-heading font-black text-[36px] sm:text-[46px] text-[#001659] leading-tight">
              Our 4 Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(about.coreValues || []).map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[#e8e8e9] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#001659] text-white flex items-center justify-center font-heading font-black text-lg mb-6">
                    {idx + 1}
                  </div>
                  <EditableText
                    path={`about.coreValues[${idx}].value`}
                    as="h3"
                    className="font-heading font-bold text-[22px] text-[#001659] mb-3"
                  >
                    {val.value}
                  </EditableText>
                  <EditableText
                    path={`about.coreValues[${idx}].meaning`}
                    as="p"
                    multiline
                    className="font-body text-[14px] text-[#565969] leading-relaxed"
                  >
                    {val.meaning}
                  </EditableText>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider">
                  Guaranteed Practice
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Profile & Leadership Message */}
      <section className="w-full py-[110px] bg-[#00235a] text-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
                EXECUTIVE PROFILE & LEADERSHIP STATEMENT
              </span>
              <EditableText
                path="about.leadership.name"
                as="h2"
                className="font-heading font-black text-[38px] sm:text-[50px] text-white mb-2"
              >
                {about.leadership?.name || 'Joshua King Kotey'}
              </EditableText>
              <EditableText
                path="about.leadership.role"
                as="p"
                className="font-heading uppercase text-[14px] font-bold tracking-widest text-[#ff5e14] mb-8"
              >
                {about.leadership?.role || 'Managing Director, DeBaldiet Commodities (DC)'}
              </EditableText>

              <div className="relative pl-6 border-l-4 border-[#ff5e14] mb-8">
                <Quote className="w-8 h-8 text-[#ff5e14] mb-2 opacity-50" />
                <EditableText
                  path="about.leadership.quote"
                  as="p"
                  multiline
                  className="font-body text-[18px] sm:text-[21px] text-white/95 leading-relaxed italic"
                >
                  {about.leadership?.quote || 'Our business is built on trust and delivered promises.'}
                </EditableText>
              </div>

              <div className="flex flex-wrap gap-6 text-[15px] text-white/80 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#ff5e14]" />
                  <EditableText path="about.leadership.location" as="span">
                    {about.leadership?.location || 'Accra, Ghana'}
                  </EditableText>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#ff5e14]" />
                  <span>Direct: </span>
                  <EditableText path="about.leadership.phone" as="span">
                    {about.leadership?.phone || '+233 55 166 0943'}
                  </EditableText>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#ff5e14]" />
                  <EditableText path="about.leadership.email" as="span">
                    {about.leadership?.email || 'debaldietcommodities@gmail.com'}
                  </EditableText>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] overflow-hidden border-4 border-white/20 shadow-2xl">
                <EditableImage
                  path="about.leadership.image"
                  src={about.leadership?.image || '/team-1.jpg'}
                  alt={about.leadership?.name || 'Managing Director'}
                  className="w-full h-full object-cover"
                  title="Change Leadership Photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Slider */}
      <section className="w-full py-[120px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="mb-12">
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-heading font-black text-[38px] sm:text-[50px] text-[#001659] leading-tight">
              Endorsed by Partners Across Ghana and Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {testimonials.slice(activeTestimonialSlide, activeTestimonialSlide + 2).map((item, idx) => {
              const actualIdx = activeTestimonialSlide + idx;
              return (
                <div
                  key={idx}
                  className="bg-[#00235a] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[420px]"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-white/20">
                        <EditableImage
                          path={`testimonials[${actualIdx}].avatar`}
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          title="Change Client Avatar"
                        />
                      </div>
                      <div>
                        <span className="inline-block bg-[#ff5e14] text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5">
                          {item.clientType}
                        </span>
                      </div>
                    </div>
                    <Quote className="w-10 h-10 text-white/30" />
                  </div>

                  <div>
                    <EditableText
                      path={`testimonials[${actualIdx}].quote`}
                      as="p"
                      multiline
                      className="font-body text-[16px] text-white/90 leading-[26px] mb-6 italic block"
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

          <div className="flex items-center justify-center space-x-3 mt-10">
            {[0, 1].map((dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveTestimonialSlide(dotIdx)}
                className={`transition-all duration-300 rounded-full ${
                  activeTestimonialSlide === dotIdx
                    ? 'w-6 h-2.5 bg-[#001659]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
