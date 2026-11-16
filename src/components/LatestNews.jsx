import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function LatestNews() {
  const { content } = useCms();
  const news = content.news || {};
  const articles = news.articles || [];

  return (
    <section className="w-full py-[120px] bg-white border-t border-[#f0f0f2] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              <EditableText path="news.tagline" as="span">
                {news.tagline || 'MARKET BRIEFS & ANNOUNCEMENTS'}
              </EditableText>
            </span>
            <EditableText
              path="news.heading"
              as="h2"
              className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[60px] text-[#001659] leading-tight tracking-tight block"
            >
              {news.heading || 'Latest Insights & Shipments'}
            </EditableText>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 font-heading uppercase text-[13px] font-bold tracking-[1.5px] text-[#ff5e14] hover:text-[#001659] transition-colors inline-flex items-center space-x-1"
          >
            <EditableText path="news.viewAllText" as="span">
              {news.viewAllText || 'View All Updates'}
            </EditableText>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {articles.map((item, idx) => (
            <article
              key={item.id || idx}
              className="group bg-white border border-[#e8e8e9] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[260px] overflow-hidden bg-gray-100 relative">
                <EditableImage
                  path={`news.articles[${idx}].image`}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  title={`Change image for ${item.title}`}
                />
                <div className="absolute top-4 left-4 bg-[#001659] text-white px-3 py-1 font-heading font-black text-[10px] uppercase tracking-widest z-10">
                  <EditableText path={`news.articles[${idx}].category`} as="span">
                    {item.category}
                  </EditableText>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center space-x-2 text-[12px] font-heading font-bold uppercase tracking-wider text-[#565969] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5e14]" />
                    <EditableText path={`news.articles[${idx}].date`} as="span">
                      {item.date}
                    </EditableText>
                  </div>
                  <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#001659] leading-snug mb-4 group-hover:text-[#ff5e14] transition-colors">
                    <EditableText path={`news.articles[${idx}].title`} as="span">
                      {item.title}
                    </EditableText>
                  </h3>
                  <EditableText
                    path={`news.articles[${idx}].excerpt`}
                    as="p"
                    multiline
                    className="font-body text-[14px] text-[#565969] leading-relaxed mb-6 block"
                  >
                    {item.excerpt}
                  </EditableText>
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
