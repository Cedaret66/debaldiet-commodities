import React from 'react';
import { Mail, Phone, MapPin, Quote } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';

export default function TeamSection() {
  const { content } = useCms();
  const leadership = content.about?.leadership || {};
  const teamList = content.team || [
    {
      name: leadership.name || 'Joshua King Kotey',
      role: 'Managing Director',
      badge: 'EXECUTIVE LEADERSHIP',
      image: '/team-1.jpg',
      bio: 'Directing multi-sector trade strategy, international supplier vetting, and institutional bank financing partnerships across Ghana and Africa.'
    },
    {
      name: 'Michael Addo',
      role: 'Head of Automotive & China Sourcing',
      badge: 'AUTOMOTIVE LOGISTICS',
      image: '/team-2.jpg',
      bio: 'Supervising direct factory procurement in China, dual-stage technical inspections, and ocean freight logistics.'
    },
    {
      name: 'Sarah Mensah',
      role: 'Director of Beauty & Cosmetics',
      badge: 'BEAUTY SUPPLY',
      image: '/team-3.jpg',
      bio: 'Curating 100% virgin human hair extensions, lace frontals, and managing wholesale salon supply distribution across Ghana.'
    },
    {
      name: 'Kofi Osei',
      role: 'Agri-Commodity Trade Manager',
      badge: 'AGRICULTURE',
      image: '/team-4.jpg',
      bio: 'Leading farm-gate aggregation, grain quality screening, and commercial bulk supply contracts for processors.'
    }
  ];

  return (
    <section className="w-full pt-[110px] pb-[90px] bg-white font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Executive Profile Feature */}
        <div className="bg-[#001659] text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                EXECUTIVE PROFILE & LEADERSHIP MESSAGE
              </span>
              <EditableText
                path="about.leadership.name"
                as="h3"
                className="font-heading font-black text-[32px] sm:text-[40px] text-white mb-2 block"
              >
                {leadership.name || 'Joshua King Kotey'}
              </EditableText>
              <EditableText
                path="about.leadership.role"
                as="p"
                className="font-heading uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-6 block"
              >
                {leadership.role || 'Managing Director, DeBaldiet Commodities (DC)'}
              </EditableText>
              
              <div className="relative pl-6 border-l-2 border-[#ff5e14] mb-8">
                <EditableText
                  path="about.leadership.quote"
                  as="p"
                  multiline
                  className="font-body text-[17px] sm:text-[19px] text-white/95 leading-relaxed italic block"
                >
                  {leadership.quote || 'Our business is built on trust and delivered promises.'}
                </EditableText>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#ff5e14]" />
                  <EditableText path="about.leadership.location" as="span">
                    {leadership.location || 'Accra, Ghana'}
                  </EditableText>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#ff5e14]" />
                  <span>Direct: </span>
                  <EditableText path="about.leadership.phone" as="span">
                    {leadership.phone || '+233 55 166 0943'}
                  </EditableText>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#ff5e14]" />
                  <EditableText path="about.leadership.email" as="span">
                    {leadership.email || 'debaldietcommodities@gmail.com'}
                  </EditableText>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-[260px] sm:w-[300px] aspect-[4/5] overflow-hidden border-4 border-white/20 shadow-2xl bg-[#001659] relative">
                <EditableImage
                  path="about.leadership.image"
                  src={leadership.image || '/team-1.jpg'}
                  alt={leadership.name || 'Managing Director'}
                  className="w-full h-full object-cover object-center"
                  title="Change Leadership Photo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Operational Leadership Section */}
        <div className="mb-12">
          <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
            ACCOUNTABLE OPERATIONS
          </span>
          <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-tight tracking-tight">
            Leadership Across Our 3 Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamList.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white border border-[#e8e8e9] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="w-full h-[320px] overflow-hidden bg-gray-100 relative">
                <EditableImage
                  path={`team[${idx}].image`}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  title={`Change photo for ${member.name}`}
                />
                <div className="absolute top-3 right-3 bg-[#001659] text-white px-2.5 py-0.5 font-heading font-black text-[10px] uppercase tracking-wider z-10 pointer-events-none">
                  {member.badge}
                </div>
              </div>

              <div className="p-6">
                <EditableText
                  path={`team[${idx}].name`}
                  as="h4"
                  className="font-heading font-bold text-[20px] text-[#001659] mb-1 block"
                >
                  {member.name}
                </EditableText>
                <EditableText
                  path={`team[${idx}].role`}
                  as="p"
                  className="font-heading uppercase text-[11px] font-bold tracking-wider text-[#ff5e14] mb-3 block"
                >
                  {member.role}
                </EditableText>
                <EditableText
                  path={`team[${idx}].bio`}
                  as="p"
                  multiline
                  className="font-body text-[13px] text-[#565969] leading-relaxed block"
                >
                  {member.bio}
                </EditableText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
