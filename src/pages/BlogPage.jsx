import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Search, ArrowRight, User, CheckCircle2 } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Incoming China Vehicle Shipments & Ro-Ro Schedules for Accra Importers',
      date: '24 October, 2026',
      author: 'Joshua King Kotey',
      category: 'Automotive Import',
      image: '/news-1.jpg',
      excerpt: 'Comprehensive updates on vessel docking frequencies at Tema Port, customs clearance paperwork, and how our 70/30 financing model prevents delayed container releases.',
      content: 'Local dealership prices in Ghana often carry 40%–60% markups, while second-hand local vehicles frequently come with hidden mechanical faults. DeBaldiet Commodities manages the entire journey of your car directly from vetted automotive manufacturers and tier-one vehicle hubs in China to your driveway in Ghana.'
    },
    {
      id: 2,
      title: 'Virgin Hair Bundles & HD Lace Wigs: Wholesale Supply Guide for Ghanaian Salons',
      date: '18 October, 2026',
      author: 'Sarah Mensah',
      category: 'Beauty & Hair Care',
      image: '/news-2.jpg',
      excerpt: 'How top Accra beauty salons maintain 40%+ retail margins with DeBaldiet’s single-donor raw hair, transparent lace closures, and scheduled restocking.',
      content: 'Quality in the hair and beauty industry cannot be faked. DeBaldiet Commodities curates, imports, and distributes authentic hair products and styling supplies. We cater to everyday women who demand long-lasting glamour as well as commercial salons seeking reliable wholesale partners.'
    },
    {
      id: 3,
      title: 'Commercial Grain Market Analysis: Securing High-Grade Maize & Sorghum',
      date: '10 October, 2026',
      author: 'Kofi Osei',
      category: 'Agri-Commodities',
      image: '/news-3.jpg',
      excerpt: 'Screening for moisture content and purity: why structured farm-gate sourcing prevents post-harvest industrial losses for Ghanaian food processors.',
      content: 'Agriculture is the backbone of regional commerce. DeBaldiet Commodities operates active supply lines connecting agrarian farming cooperatives with urban distributors, industrial processors, institutional kitchens, and export buyers.'
    }
  ];

  const categories = [
    'Automotive Import',
    'Beauty & Hair Care',
    'Agri-Commodities',
    'Bank Partnerships'
  ];

  const filtered = articles.filter((item) => {
    if (selectedCategory && item.category !== selectedCategory) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* Title Banner */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/services-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/85" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              INSIGHTS, SHIPMENTS & NEWS
            </span>
            <h1 className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4">
              Latest News
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light">
              Market intelligence, China vessel shipping schedules, salon wholesale updates, and food commodity harvest reports from Accra.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <div className="max-w-[1300px] mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Feed */}
          <main className="lg:col-span-8 space-y-16">
            {filtered.map((post) => (
              <article key={post.id} className="border border-[#e8e8e9] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-[360px] sm:h-[420px] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-heading font-bold uppercase tracking-wider text-[#565969] mb-4">
                    <span className="flex items-center space-x-1.5 text-[#ff5e14]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2.5 py-0.5 text-[#001659]">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-heading font-black text-[26px] sm:text-[32px] text-[#001659] leading-snug mb-4">
                    {post.title}
                  </h2>

                  <p className="font-body text-[16px] text-[#565969] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-body text-[15px] text-[#303030] leading-relaxed mb-6 bg-gray-50 p-4 border-l-2 border-[#ff5e14]">
                      {post.content}
                    </p>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center space-x-2 font-heading font-bold text-[13px] uppercase tracking-[1px] text-[#ff5e14] hover:text-[#001659] transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Search Box */}
            <div className="p-6 bg-[#fcfcfd] border border-[#e8e8e9]">
              <h3 className="font-heading font-bold text-[16px] uppercase tracking-wider text-[#001659] mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Keywords..."
                  className="w-full h-[46px] pl-4 pr-10 bg-white border border-[#e8e8e9] text-sm focus:outline-none focus:border-[#001659]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Categories */}
            <div className="p-6 bg-[#fcfcfd] border border-[#e8e8e9]">
              <h3 className="font-heading font-bold text-[16px] uppercase tracking-wider text-[#001659] mb-4">
                Core Verticals
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left py-1.5 text-sm transition-colors ${
                    selectedCategory === null ? 'font-bold text-[#ff5e14]' : 'text-[#565969] hover:text-[#001659]'
                  }`}
                >
                  All Verticals
                </button>
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1.5 text-sm transition-colors ${
                      selectedCategory === cat ? 'font-bold text-[#ff5e14]' : 'text-[#565969] hover:text-[#001659]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-8 bg-[#001659] text-white">
              <span className="font-heading uppercase text-xs font-bold tracking-widest text-[#ff5e14] block mb-2">
                HEADQUARTERS
              </span>
              <h4 className="font-heading font-bold text-2xl text-white mb-3">
                DeBaldiet Commodities (DC)
              </h4>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Accra, Ghana. We are your accountable trading and logistics partner.
              </p>
              <Link
                to="/contact-us"
                className="w-full text-center py-3 bg-[#ff5e14] hover:bg-[#e04e0a] text-white font-heading font-bold text-xs uppercase tracking-wider block transition-colors"
              >
                Send Us an Inquiry
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
