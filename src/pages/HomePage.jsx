import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBanners from '../components/FeatureBanners';
import ProjectManagement from '../components/ProjectManagement';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import ClientsCarousel from '../components/ClientsCarousel';
import ServicesSection from '../components/ServicesSection';
import ParallaxBanner from '../components/ParallaxBanner';
import StatsCounter from '../components/StatsCounter';
import TestimonialsSlider from '../components/TestimonialsSlider';
import TeamSection from '../components/TeamSection';
import SkillsPieCharts from '../components/SkillsPieCharts';
import AccordionSection from '../components/AccordionSection';
import LatestNews from '../components/LatestNews';

export default function HomePage({ onSelectProject }) {
  return (
    <div className="w-full bg-white font-body selection:bg-brand-orange selection:text-white">
      {/* 1. Hero Revolution Slider (Node 4294967305) */}
      <HeroSlider />

      {/* 2. Services Header & 4 Cards (Nodes 4294967350 & 4294967355) */}
      <FeatureBanners />

      {/* 3. Full Project Management Section (Node 4294967432) */}
      <ProjectManagement />

      {/* 4. Featured Projects Showcase (Node 4294967462) */}
      <ProjectsPortfolio onSelectProject={onSelectProject} />

      {/* 5. Client Logos Banner (Node 4294967549) */}
      <ClientsCarousel />

      {/* 6. Specialized Services Grid: Interior, Graphic, Product (Node 4294967604) */}
      <ServicesSection />

      {/* 7. Full-Width Parallax Management Feature (Node 4294967677) */}
      <ParallaxBanner />

      {/* 8. Numerical Stats Counters (Node 4294967697) */}
      <StatsCounter />

      {/* 9. Client Testimonials Slider (Node 4294967746) */}
      <TestimonialsSlider />

      {/* 10. Professionals Leadership Team (Node 4294967912) */}
      <TeamSection />

      {/* 11. Performance & Skill Progress Rings (Node 4294967952) */}
      <SkillsPieCharts />

      {/* 12. Accordions Section (Node 4294967997) */}
      <AccordionSection />

      {/* 13. Latest News & Articles Grid (Node 4294968050) */}
      <LatestNews />
    </div>
  );
}
