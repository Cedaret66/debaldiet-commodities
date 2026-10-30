import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import StatsCounter from '../components/StatsCounter';
import { siteData } from '../data/siteData';

export default function TeamPage() {
  const { about } = siteData;

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
            <h1 className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4">
              Our Team
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-2xl font-light">
              Led by Managing Director Joshua King Kotey, our specialized procurement, customs clearance, and logistics specialists guarantee end-to-end trade accountability.
            </p>
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
