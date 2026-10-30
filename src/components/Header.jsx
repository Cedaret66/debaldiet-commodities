import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Truck, Sparkles, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header({ onOpenSearch, onOpenDrawer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname, location.hash]);

  const getSubIcon = (label) => {
    if (label.includes('Auto') || label.includes('Automotive')) {
      return <Truck className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />;
    }
    if (label.includes('Beauty')) {
      return <Sparkles className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />;
    }
    if (label.includes('Agriculture')) {
      return <Sprout className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />;
    }
    return <ShieldCheck className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />;
  };

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 bg-white shadow-md py-3'
          : 'relative bg-white border-b border-[#e8e8e9] py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#001659] text-white flex items-center justify-center font-heading font-black text-xl tracking-wider rounded-sm group-hover:bg-[#ff5e14] transition-colors">
              DC
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#001659] leading-none">
                DeBaldiet
              </span>
              <span className="font-heading uppercase text-[10px] tracking-[2.5px] font-bold text-[#565969]">
                Commodities
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {siteData.navLinks.map((link) => {
              if (link.dropdown) {
                const isServicesActive = location.pathname.startsWith('/our-services');

                return (
                  <div key={link.label} className="relative group py-2">
                    {/* Top Level Item with Dropdown Trigger */}
                    <NavLink
                      to={link.href}
                      className={`relative font-heading uppercase text-[13px] font-bold tracking-[1.2px] transition-colors duration-200 py-1 flex items-center space-x-1 group ${
                        isServicesActive ? 'text-[#ff5e14]' : 'text-[#001659] hover:text-[#ff5e14]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5e14] transition-transform duration-300 origin-left ${
                          isServicesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </NavLink>

                    {/* Bridge-Style Elegant Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-3 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50 transform -translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white border-t-2 border-[#ff5e14] shadow-2xl border border-gray-100 rounded-b-sm overflow-hidden py-2">
                        {link.dropdown.map((subItem, sIdx) => (
                          <Link
                            key={sIdx}
                            to={subItem.href}
                            className="group/item flex items-start space-x-3.5 px-5 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                          >
                            <div className="mt-0.5 p-1.5 bg-[#f8f9fa] group-hover/item:bg-[#ff5e14]/10 transition-colors rounded-sm">
                              {getSubIcon(subItem.label)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <span className="font-heading uppercase text-[13px] font-bold tracking-wider text-[#001659] group-hover/item:text-[#ff5e14] transition-colors">
                                  {subItem.label}
                                </span>
                                {subItem.badge && (
                                  <span className="ml-2 bg-[#ff5e14] text-white font-heading font-black text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-xs">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              {subItem.desc && (
                                <p className="font-body text-[12px] text-[#565969] leading-snug mt-0.5">
                                  {subItem.desc}
                                </p>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#ff5e14] group-hover/item:translate-x-1 transition-all self-center" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative font-heading uppercase text-[13px] font-bold tracking-[1.2px] transition-colors duration-200 py-1 group ${
                      isActive ? 'text-[#ff5e14]' : 'text-[#001659] hover:text-[#ff5e14]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5e14] transition-transform duration-300 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex items-center justify-center h-[42px] px-5 bg-[#ff5e14] text-white font-heading font-bold text-[13px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors duration-300 shadow-sm"
            >
              Request a Quote
            </Link>

            <Link
              to="/our-services#car-import"
              className="hidden md:inline-flex items-center space-x-1.5 h-[42px] px-4 border border-[#001659] text-[#001659] font-heading font-bold text-[13px] uppercase tracking-[1px] hover:bg-[#001659] hover:text-white transition-colors duration-300"
            >
              <Truck className="w-4 h-4 text-[#ff5e14]" />
              <span>Track Shipment</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#001659] hover:text-[#ff5e14] transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-[#e8e8e9] shadow-xl p-6 transition-all z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {siteData.navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full flex items-center justify-between font-heading uppercase text-sm font-bold tracking-widest py-2 text-[#001659]"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#ff5e14] transition-transform duration-200 ${
                          mobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-2 bg-[#f8f9fa] border-l-2 border-[#ff5e14] my-2">
                        {link.dropdown.map((subItem, sIdx) => (
                          <Link
                            key={sIdx}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#001659] hover:text-[#ff5e14]"
                          >
                            <div className="flex items-center justify-between">
                              <span>{subItem.label}</span>
                              {subItem.badge && (
                                <span className="bg-[#ff5e14] text-white text-[9px] px-1.5 py-0.2 rounded-xs">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            {subItem.desc && (
                              <p className="text-[11px] font-normal text-gray-500 normal-case">
                                {subItem.desc}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading uppercase text-sm font-bold tracking-widest py-2 border-b border-gray-100 ${
                      isActive ? 'text-[#ff5e14]' : 'text-[#001659]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}

            <div className="pt-4 flex flex-col space-y-3">
              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#ff5e14] text-white font-heading font-bold uppercase text-xs tracking-wider"
              >
                Request a Quote
              </Link>
              <Link
                to="/our-services#car-import"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 border border-[#001659] text-[#001659] font-heading font-bold uppercase text-xs tracking-wider"
              >
                Track Shipment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
