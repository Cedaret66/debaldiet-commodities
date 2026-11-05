import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBanners from '../components/FeatureBanners';
import ProjectManagement from '../components/ProjectManagement';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import ServicesSection from '../components/ServicesSection';
import ParallaxBanner from '../components/ParallaxBanner';
import StatsCounter from '../components/StatsCounter';
import TestimonialsSlider from '../components/TestimonialsSlider';
import TeamSection from '../components/TeamSection';
import SkillsPieCharts from '../components/SkillsPieCharts';
import AccordionSection from '../components/AccordionSection';
import LatestNews from '../components/LatestNews';
import CmsSection from '../components/cms/CmsSection';

export default function HomePage({ onSelectProject }) {
  return (
    <div className="w-full bg-white font-body selection:bg-brand-orange selection:text-white">
      {/* 1. Hero Revolution Slider */}
      <CmsSection id="home-hero" name="Hero Slider Banner">
        <HeroSlider />
      </CmsSection>

      {/* 2. Services Header & 4 Cards */}
      <CmsSection id="home-features" name="3 Core Verticals & Banners" className="fade-in-scroll">
        <FeatureBanners />
      </CmsSection>

      {/* 3. Full Project Management Section */}
      <CmsSection id="home-7030" name="70/30 Structured Capital Scheme" className="fade-in-scroll">
        <ProjectManagement />
      </CmsSection>

      {/* 4. Featured Projects Showcase */}
      <CmsSection id="home-portfolio" name="Showcase Portfolio Grid" className="fade-in-scroll">
        <ProjectsPortfolio onSelectProject={onSelectProject} />
      </CmsSection>

      {/* 5. Specialized Services Grid */}
      <CmsSection id="home-services" name="Core Logistics & Solutions" className="fade-in-scroll">
        <ServicesSection />
      </CmsSection>

      {/* 6. Full-Width Parallax Management Feature */}
      <CmsSection id="home-parallax" name="Quality Assurance Guarantee" className="fade-in-scroll">
        <ParallaxBanner />
      </CmsSection>

      {/* 7. Numerical Stats Counters */}
      <CmsSection id="home-stats" name="Performance Metrics & Stats" className="fade-in-scroll">
        <StatsCounter />
      </CmsSection>

      {/* 8. Client Testimonials Slider */}
      <CmsSection id="home-testimonials" name="Client Testimonials" className="fade-in-scroll">
        <TestimonialsSlider />
      </CmsSection>

      {/* 9. Leadership Team */}
      <CmsSection id="home-team" name="Executive Leadership" className="fade-in-scroll">
        <TeamSection />
      </CmsSection>

      {/* 10. Performance & Progress */}
      <CmsSection id="home-skills" name="Operational Standards" className="fade-in-scroll">
        <SkillsPieCharts />
      </CmsSection>

      {/* 11. Accordions Section */}
      <CmsSection id="home-faq" name="Frequently Asked Questions" className="fade-in-scroll">
        <AccordionSection />
      </CmsSection>

      {/* 12. Latest News & Articles Grid */}
      <CmsSection id="home-news" name="Market News & Intelligence" className="fade-in-scroll">
        <LatestNews />
      </CmsSection>
    </div>
  );
}
