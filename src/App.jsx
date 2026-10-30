import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SearchModal from './components/SearchModal';
import SideDrawer from './components/SideDrawer';
import ProjectModal from './components/ProjectModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PartnershipsPage from './pages/PartnershipsPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#303030]">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Main Navigation Header with Dedicated Routing */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Main Multi-Page Route View */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Modals & Slideouts */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
