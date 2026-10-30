import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.slides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <section className="relative w-full h-[720px] lg:h-[880px] overflow-hidden bg-[#001659]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${active.bgImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001659]/90 via-[#001659]/60 to-[#001659]/30" />
      </div>

      {/* Content Container (1300px max) */}
      <div className="relative w-full h-full max-w-[1300px] mx-auto px-6 flex items-center z-10">
        <div className="max-w-3xl text-white">
          {/* Overline */}
          <div className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3.5 py-1 text-[12px] font-heading uppercase tracking-[2px] font-bold mb-4">
            <span>{active.overline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-[42px] sm:text-[58px] lg:text-[70px] text-white leading-[1.05] tracking-tight mb-5 drop-shadow-sm">
            {active.headline}
          </h1>

          {/* Supporting Body */}
          <p className="font-body text-[16px] sm:text-[18px] text-white/90 leading-relaxed mb-6 max-w-2xl">
            {active.body}
          </p>

          {/* Banner Tag / Benefit */}
          {active.benefitTag && (
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#ff5e14] px-4 py-1.5 text-[13px] font-heading uppercase tracking-[1.5px] font-bold mb-8">
              <CheckCircle2 className="w-4 h-4 text-[#ff5e14]" />
              <span className="text-white">{active.benefitTag}</span>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={active.primaryBtn.href}
              className="inline-flex items-center justify-center min-w-[180px] h-[50px] px-6 bg-[#ff5e14] text-white font-heading font-bold text-[15px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300 shadow-lg"
            >
              {active.primaryBtn.text}
            </Link>
            <Link
              to={active.secondaryBtn.href}
              className="inline-flex items-center justify-center min-w-[180px] h-[50px] px-6 border-2 border-white text-white font-heading font-bold text-[15px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300"
            >
              {active.secondaryBtn.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows Bottom-Right */}
      <div className="absolute bottom-10 right-8 z-20 hidden sm:flex items-center space-x-2">
        <button
          onClick={prevSlide}
          className="w-[60px] h-[60px] bg-white/90 flex items-center justify-center text-[#001659] hover:bg-[#ff5e14] hover:text-white transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-[60px] h-[60px] bg-[#ff5e14] flex items-center justify-center text-white hover:bg-[#001659] transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx ? 'w-8 h-2.5 bg-[#ff5e14]' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Slide ${idx + 1}: ${slide.pillar}`}
          />
        ))}
      </div>
    </section>
  );
}
