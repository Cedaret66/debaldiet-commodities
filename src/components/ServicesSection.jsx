import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ServicesSection() {
  const { services } = siteData;

  const verticals = [
    {
      data: services.automotive,
      icon: <Truck className="w-8 h-8 text-[#ff5e14]" />,
      image: '/chinese-suv-geely.jpg',
      link: '/our-services#car-import',
      features: ['Chinese SUVs (New & Low-Mileage)', 'Buy & Spec Customization', '70/30 Flexible Financing']
    },
    {
      data: services.beauty,
      icon: <Sparkles className="w-8 h-8 text-[#ff5e14]" />,
      image: '/feature-interior.jpg',
      link: '/our-services#beauty',
      features: ['100% Virgin Bundles', 'HD Lace Wigs & Frontals', 'Wholesale Salon Accounts']
    },
    {
      data: services.agriculture,
      icon: <Sprout className="w-8 h-8 text-[#ff5e14]" />,
      image: '/feature-product.jpg',
      link: '/our-services#agriculture',
      features: ['Bulk Maize & Grains', 'Legumes & Soybeans', 'Farm-to-Warehouse Logistics']
    }
  ];

  return (
    <section className="w-full py-[120px] bg-[#f8f9fa] font-body border-t border-[#e8e8e9]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              DIVERSIFIED OPERATIONS
            </span>
            <h2 className="font-heading font-black text-[38px] sm:text-[50px] lg:text-[60px] text-[#001659] leading-tight tracking-tight">
              Our 3 Core Verticals
            </h2>
          </div>
          <p className="text-[#565969] text-[16px] max-w-md mt-4 md:mt-0">
            Tailored supply chains, rigorous quality screening, and customer-first terms across vehicles, hair care, and agri-trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {verticals.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-[#e8e8e9] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[280px] overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.data.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 shadow-md">
                  {item.icon}
                </div>
                <div className="absolute top-4 right-4 bg-[#001659] text-white px-3 py-1 font-heading font-black text-[11px] uppercase tracking-wider">
                  {item.data.badge}
                </div>
              </div>

              {/* Content box */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-heading uppercase text-[12px] font-bold tracking-[1.5px] text-[#ff5e14] block mb-2">
                    {item.data.vertical}
                  </span>
                  <h3 className="font-heading font-bold text-[22px] sm:text-[24px] text-[#001659] mb-4 group-hover:text-[#ff5e14] transition-colors leading-snug">
                    {item.data.headline}
                  </h3>
                  <p className="font-body text-[15px] text-[#565969] leading-[25px] mb-6 line-clamp-3">
                    {item.data.overview}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-gray-100">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs font-heading font-bold uppercase tracking-wider text-[#303030] flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#ff5e14] rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={item.link}
                  className="font-heading uppercase text-[13px] font-bold tracking-[1.2px] text-[#001659] group-hover:text-[#ff5e14] transition-colors inline-flex items-center space-x-2"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
