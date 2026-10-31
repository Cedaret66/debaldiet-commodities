import React from 'react';
import TeamSection from '../components/TeamSection';
import StatsCounter from '../components/StatsCounter';
import { useCms } from '../context/CmsContext';
import EditableText from '../components/cms/EditableText';

export default function TeamPage() {
  const { content } = useCms();
  const teamMeta = content.teamMeta || {};

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* Title Banner */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/about-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/85" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              LEADERSHIP & OPERATIONS
            </span>
            <EditableText
              path="teamMeta.headline"
              as="h1"
              className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4 block"
            >
              {teamMeta.headline || 'Our Team'}
            </EditableText>
            <EditableText
              path="teamMeta.subHeadline"
              as="p"
              multiline
              className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light block"
            >
              {teamMeta.subHeadline || 'Led by Managing Director Joshua King Kotey, our specialized procurement, customs clearance, and logistics specialists guarantee end-to-end trade accountability.'}
            </EditableText>
          </div>
        </div>
      </section>

      {/* Team Section Component with Executive Profile & 4 Core Leads */}
      <TeamSection />

      {/* Stats Counter */}
      <StatsCounter />
    </div>
  );
}
