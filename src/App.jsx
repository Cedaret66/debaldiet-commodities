import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SearchModal from './components/SearchModal';
import SideDrawer from './components/SideDrawer';
import ProjectModal from './components/ProjectModal';
import { CmsProvider } from './context/CmsContext';

// CMS In-Place Components
import AdminToolbar from './components/cms/AdminToolbar';
import CmsDrawer from './components/cms/CmsDrawer';
import ImageUploadModal from './components/cms/ImageUploadModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PartnershipsPage from './pages/PartnershipsPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BuyAndSpecPage from './pages/BuyAndSpecPage';
import CMSAdminPage from './pages/CMSAdminPage';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const smootherRef = useRef(null);

  // Check if current page is the secret login route
  const isLoginPage = location.pathname === '/admin' || location.pathname === '/cms-portal';

  // Initialize GSAP ScrollSmoother (disabled on login page)
  useLayoutEffect(() => {
    if (isLoginPage) return;

    const ctx = gsap.context(() => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
    });

    return () => ctx.revert();
  }, [isLoginPage]);

  // On page/route changes: refresh ScrollSmoother and trigger fade-in animations
  useEffect(() => {
    if (isLoginPage) return;

    if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      // Simple, elegant scroll fade-in animation
      const targets = gsap.utils.toArray('.fade-in-scroll');
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, isLoginPage]);

  // If visiting the login page route, render the admin login gate
  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/admin" element={<CMSAdminPage />} />
        <Route path="/cms-portal" element={<CMSAdminPage />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#303030] relative">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Main Navigation Header: Fixed outside smooth-wrapper to stay pinned cleanly */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* GSAP ScrollSmoother Viewport & Content Container */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="pt-[74px] lg:pt-[82px] min-h-screen flex flex-col">
          {/* Main Multi-Page Route View */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/our-services" element={<ServicesPage />} />
              <Route path="/buy-and-spec" element={<BuyAndSpecPage />} />
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
        </div>
      </div>

      {/* Floating In-Place Admin Toolbar (Visible after Admin Login) */}
      <AdminToolbar />

      {/* Master Content Drawer (Sections side-panel) */}
      <CmsDrawer />

      {/* Interactive Image Upload / Replacement Modal */}
      <ImageUploadModal />

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
    <CmsProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CmsProvider>
  );
}
