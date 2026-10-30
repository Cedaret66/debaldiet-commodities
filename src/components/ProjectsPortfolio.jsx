import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ProjectsPortfolio({ onSelectProject }) {
  const [startIndex, setStartIndex] = useState(0);

  const showcase = [
    {
      id: 1,
      title: 'Direct SUV & Electric Vehicle Imports',
      category: 'Automotive (70/30 Scheme)',
      image: '/project-1.jpg',
      badge: 'CHINA TO ACCRA',
      desc: 'Dual-inspected luxury and commercial vehicles shipped via containerized freight directly to Tema Port.'
    },
    {
      id: 2,
      title: 'Commercial Haulage Vans & Trucks',
      category: 'Automotive Procurement',
      image: '/project-2.jpg',
      badge: 'COMMERCIAL FLEET',
      desc: 'Heavy-duty transport trucks and delivery vans sourced directly from top-tier Chinese manufacturers.'
    },
    {
      id: 3,
      title: '100% Virgin Human Hair & HD Lace Wigs',
      category: 'Beauty & Hair Care',
      image: '/project-3.jpg',
      badge: 'SALON WHOLESALE',
      desc: 'Single donor straight, body wave, and deep wave bundles with intact cuticles and custom HD lace frontals.'
    },
    {
      id: 4,
      title: 'Bulk Maize, Rice & Sorghum Supplies',
      category: 'Agricultural Commodities',
      image: '/project-4.jpg',
      badge: 'STAPLE CROPS',
      desc: 'Direct farm-gate aggregation delivering high-purity yellow maize, white rice, and sorghum to food processors.'
    },
    {
      id: 5,
      title: 'Soybeans, Legumes & Animal Feed Inputs',
      category: 'Commercial Agro-Trade',
      image: '/project-5.jpg',
      badge: 'GRAIN TRADE',
      desc: 'Screened oilseeds and raw agricultural inputs for commercial feed mills and institutional buyers.'
    }
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : showcase.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < showcase.length - 3 ? prev + 1 : 0));
  };

  const visibleItems = showcase.slice(startIndex, startIndex + 3);

  return (
    <section className="w-full py-[120px] bg-[#00235a] text-white overflow-hidden font-body">
      <div className="max-w-[1300px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
            DELIVERED COMMODITIES & VEHICLES
          </span>
          <h2 className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight">
            Procurement Showcase
          </h2>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrev}
            className="w-[50px] h-[50px] border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5e14] hover:border-[#ff5e14] transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-[50px] h-[50px] border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5e14] hover:border-[#ff5e14] transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Projects Grid / Carousel */}
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#001c47] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="w-full h-[280px] overflow-hidden bg-gray-900 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#ff5e14] text-white px-2.5 py-0.5 text-[10px] font-heading font-black tracking-widest uppercase">
                  {item.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-heading uppercase text-[12px] tracking-[1.5px] text-[#ff5e14] block mb-2 font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-[22px] text-white leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-[14px] text-white/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/our-services"
                    className="inline-flex items-center space-x-2 text-[14px] text-white font-heading font-semibold hover:text-[#ff5e14] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
