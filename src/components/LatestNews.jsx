import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function LatestNews() {
  const articles = [
    {
      id: 1,
      title: 'Incoming China Vehicle Shipments & Ro-Ro Schedules for Accra Importers',
      date: '24 October, 2026',
      image: '/news-1.jpg',
      category: 'AUTOMOTIVE IMPORT',
      excerpt: 'Key vessel docking updates at Tema Port, customs clearance timelines, and how the 70/30 scheme accelerates vehicle release.'
    },
    {
      id: 2,
      title: 'Virgin Hair Bundles & HD Lace Wigs: Wholesale Supply Guide for Ghanaian Salons',
      date: '18 October, 2026',
      image: '/news-2.jpg',
      category: 'BEAUTY & SALON',
      excerpt: 'How top Accra beauty salons maintain 40%+ retail margins with DeBaldiet’s single-donor raw hair and transparent lace closures.'
    },
    {
      id: 3,
      title: 'Commercial Grain Market Analysis: Securing High-Grade Maize & Sorghum',
      date: '10 October, 2026',
      image: '/news-3.jpg',
      category: 'AGRI-COMMODITIES',
      excerpt: 'Screening for moisture content and purity: why structured farm-gate sourcing prevents post-harvest industrial losses.'
    }
  ];

  return (
    <section className="w-full py-[120px] bg-white border-t border-[#f0f0f2] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              MARKET BRIEFS & ANNOUNCEMENTS
            </span>
            <h2 className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-[#001659] leading-tight tracking-tight">
              Latest Insights & Shipments
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 font-heading uppercase text-[13px] font-bold tracking-[1.5px] text-[#ff5e14] hover:text-[#001659] transition-colors inline-flex items-center space-x-1"
          >
            <span>View All Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {articles.map((item) => (
            <article
              key={item.id}
              className="group bg-white border border-[#e8e8e9] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[260px] overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#001659] text-white px-3 py-1 font-heading font-black text-[10px] uppercase tracking-widest">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center space-x-2 text-[12px] font-heading font-bold uppercase tracking-wider text-[#565969] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5e14]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#001659] leading-snug mb-4 group-hover:text-[#ff5e14] transition-colors">
                    <Link to="/blog">{item.title}</Link>
                  </h3>
                  <p className="font-body text-[14px] text-[#565969] leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>

                <Link
                  to="/blog"
                  className="font-heading uppercase text-[12px] font-bold tracking-[1px] text-[#001659] group-hover:text-[#ff5e14] transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
