import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCms } from '../../context/CmsContext';
import {
  Edit3,
  Eye,
  Save,
  RotateCcw,
  Sliders,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Compass,
  Bookmark,
  ChevronUp,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const SITE_PAGES = [
  { label: 'Home', path: '/', badge: 'Core' },
  { label: 'Chinese SUVs (Cars)', path: '/showcases/cars', badge: 'Showcase' },
  { label: 'Luxury Hair & Wigs', path: '/showcases/hair', badge: 'Showcase' },
  { label: 'Agricultural Commodities', path: '/showcases/agriculture', badge: 'Showcase' },
  { label: 'About Debaldiet', path: '/about-us', badge: 'Company' },
  { label: 'Our Services', path: '/our-services', badge: 'Services' },
  { label: 'Buy N Spec (Custom)', path: '/buy-and-spec', badge: 'Bespoke' },
  { label: 'Strategic Partnerships', path: '/partnerships', badge: 'Institutional' },
  { label: 'Our Executive Team', path: '/our-team', badge: 'Leadership' },
  { label: 'Contact & Tema Desk', path: '/contact-us', badge: 'Contact' },
];

export default function AdminToolbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isAuthenticated,
    isEditMode,
    toggleEditMode,
    isDirty,
    isSaving,
    saveChanges,
    discardChanges,
    setIsDrawerOpen,
    logout,
    toastMessage,
  } = useCms();

  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [availableSections, setAvailableSections] = useState([]);

  const pagesRef = useRef(null);
  const sectionsRef = useRef(null);

  // Scan document for demarcated sections on route change
  useEffect(() => {
    const updateSections = () => {
      const sectionEls = document.querySelectorAll('[data-cms-section]');
      const list = Array.from(sectionEls).map((el, i) => ({
        id: el.id || el.getAttribute('data-cms-section-id') || `section-${i}`,
        name: el.getAttribute('data-cms-section') || `Section ${i + 1}`,
      }));
      setAvailableSections(list);
    };

    const timer = setTimeout(updateSections, 350);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close popups on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setIsPagesOpen(false);
      }
      if (sectionsRef.current && !sectionsRef.current.contains(e.target)) {
        setIsSectionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const jumpToSection = (sectionId) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      try {
        if (window.ScrollSmoother && typeof window.ScrollSmoother.get === 'function') {
          const smoother = window.ScrollSmoother.get();
          if (smoother) {
            smoother.scrollTo(elem, true);
          } else {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      elem.classList.add('ring-4', 'ring-[#ff5e14]', 'ring-offset-4', 'transition-all', 'duration-300');
      setTimeout(() => {
        elem.classList.remove('ring-4', 'ring-[#ff5e14]', 'ring-offset-4');
      }, 2000);
    }
    setIsSectionsOpen(false);
  };

  if (!isAuthenticated) return null;

  const currentPage = SITE_PAGES.find((p) => p.path === location.pathname) || {
    label: 'Current Page',
    path: location.pathname,
  };

  return (
    <>
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[130] animate-fadeIn font-body">
          <div
            className={`px-4 py-2.5 rounded-full backdrop-blur-xl border flex items-center gap-2.5 shadow-2xl text-xs sm:text-sm font-bold tracking-wide ${
              toastMessage.type === 'warning'
                ? 'bg-amber-500/90 border-amber-400 text-white'
                : toastMessage.type === 'info'
                ? 'bg-sky-600/90 border-sky-400 text-white'
                : 'bg-emerald-600/95 border-emerald-400 text-white'
            }`}
          >
            {toastMessage.type === 'warning' ? (
              <AlertCircle className="w-4 h-4 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            )}
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}

      {/* Floating Bottom Admin Control Capsule */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] max-w-[96vw] font-body select-none">
        <div className="relative bg-[#001659]/95 backdrop-blur-2xl border border-white/20 rounded-full px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.65)] text-white text-xs">
          
          {/* Admin Status Pill */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/15 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-heading font-black tracking-widest uppercase text-white hidden md:inline">CMS</span>
          </div>

          {/* Edit Mode Toggle */}
          <button
            type="button"
            onClick={toggleEditMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-heading font-bold uppercase tracking-wider transition-all ${
              isEditMode
                ? 'bg-[#ff5e14] text-white shadow-md shadow-[#ff5e14]/40 ring-2 ring-white/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
            }`}
            title="Toggle between in-place editing and preview"
          >
            {isEditMode ? (
              <>
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editing ON</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </>
            )}
          </button>

          {/* Page Switcher Dropdown */}
          <div className="relative" ref={pagesRef}>
            <button
              type="button"
              onClick={() => {
                setIsPagesOpen((prev) => !prev);
                setIsSectionsOpen(false);
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold uppercase tracking-wider transition-all"
              title="Navigate directly to any page"
            >
              <Compass className="w-3.5 h-3.5 text-[#ff5e14]" />
              <span className="hidden sm:inline max-w-[110px] truncate">{currentPage.label}</span>
              <span className="sm:hidden">Pages</span>
              {isPagesOpen ? <ChevronDown className="w-3 h-3 opacity-60" /> : <ChevronUp className="w-3 h-3 opacity-60" />}
            </button>

            {/* Pages Dropdown Popover */}
            {isPagesOpen && (
              <div className="absolute bottom-full mb-3 left-0 sm:left-1/2 sm:-translate-x-1/2 w-64 bg-[#001659] border border-white/20 rounded-lg shadow-2xl overflow-hidden py-1.5 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 border-b border-white/10 text-[10px] font-heading font-bold uppercase tracking-widest text-[#ff5e14] flex items-center justify-between">
                  <span>Switch Page</span>
                  <span className="text-white/40">10 Pages</span>
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {SITE_PAGES.map((page) => {
                    const isActive = location.pathname === page.path;
                    return (
                      <button
                        key={page.path}
                        type="button"
                        onClick={() => {
                          navigate(page.path);
                          setIsPagesOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                          isActive
                            ? 'bg-[#ff5e14] text-white font-bold'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{page.label}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                            isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'
                          }`}
                        >
                          {page.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sections Jump Dropdown (for current page) */}
          <div className="relative" ref={sectionsRef}>
            <button
              type="button"
              onClick={() => {
                setIsSectionsOpen((prev) => !prev);
                setIsPagesOpen(false);
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold uppercase tracking-wider transition-all"
              title="Jump directly to any section on this page"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#ff5e14]" />
              <span className="hidden sm:inline">Sections</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-white/15 rounded text-white/80">
                {availableSections.length}
              </span>
              {isSectionsOpen ? <ChevronDown className="w-3 h-3 opacity-60" /> : <ChevronUp className="w-3 h-3 opacity-60" />}
            </button>

            {/* Sections Dropdown Popover */}
            {isSectionsOpen && (
              <div className="absolute bottom-full mb-3 left-0 sm:left-1/2 sm:-translate-x-1/2 w-72 bg-[#001659] border border-white/20 rounded-lg shadow-2xl overflow-hidden py-1.5 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 border-b border-white/10 text-[10px] font-heading font-bold uppercase tracking-widest text-[#ff5e14] flex items-center justify-between">
                  <span>Page Sections</span>
                  <span className="text-white/40">Smooth Scroll</span>
                </div>
                <div className="max-h-64 overflow-y-auto py-1">
                  {availableSections.length === 0 ? (
                    <div className="px-3 py-3 text-xs text-white/50 italic text-center">
                      No sections demarcated yet on this view.
                    </div>
                  ) : (
                    availableSections.map((sec, idx) => (
                      <button
                        key={sec.id || idx}
                        type="button"
                        onClick={() => jumpToSection(sec.id)}
                        className="w-full px-3 py-2 text-left text-xs text-white/80 hover:bg-white/10 hover:text-white flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span className="text-[10px] text-[#ff5e14] font-mono font-bold">
                            {String(idx + 1).padStart(2, '0')}.
                          </span>
                          <span className="truncate">{sec.name}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-white/40 group-hover:text-[#ff5e14] shrink-0 transition-colors" />
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Master Content Drawer Button */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold uppercase tracking-wider transition-all"
            title="Open Master Content Drawer"
          >
            <Sliders className="w-3.5 h-3.5 text-[#ff5e14]" />
            <span className="hidden md:inline">Drawer</span>
          </button>

          {/* Save Changes Button */}
          <button
            type="button"
            onClick={saveChanges}
            disabled={isSaving || !isDirty}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-heading font-bold uppercase tracking-wider transition-all ${
              isDirty
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md animate-pulse'
                : 'bg-white/5 text-white/40 cursor-default'
            }`}
            title={isDirty ? 'Click to publish all unsaved edits live' : 'All changes saved'}
          >
            {isSaving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            <span>{isDirty ? 'Save' : 'Saved'}</span>
          </button>

          {/* Discard Edits (Only shown if changes made) */}
          {isDirty && (
            <button
              type="button"
              onClick={discardChanges}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              title="Discard unsaved changes"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Logout Button */}
          <div className="pl-1 border-l border-white/15">
            <button
              type="button"
              onClick={logout}
              className="p-1.5 rounded-full bg-white/5 hover:bg-red-500/20 text-white/60 hover:text-red-400 transition-colors"
              title="Log out of CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
