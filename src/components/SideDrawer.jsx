import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, MapPin, Phone, Mail, ChevronRight, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useCms } from '../context/CmsContext';

export default function SideDrawer({ isOpen, onClose }) {
  const { content } = useCms();
  const topBar = content?.topBar || {};
  const company = content?.company || {};
  const navLinks = content?.navLinks || [];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-visibility duration-300 ${
        isOpen ? 'visible' : 'invisible pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slide-out Menu Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-full sm:w-[420px] bg-brand-navy text-white shadow-2xl z-10 p-8 sm:p-12 overflow-y-auto transform transition-transform duration-300 ease-out border-l-4 border-brand-orange flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Top Header with Close Button */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <Link to="/" onClick={onClose} className="inline-block py-1">
              <img
                src="/logo-white-text.png"
                alt="DeBaldiet Commodities"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors"
              aria-label="Close Side Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Site Navigation Links */}
          <div className="mb-8 pb-6 border-b border-white/10">
            <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-orange block mb-3">
              Navigation
            </span>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between text-base font-heading font-bold uppercase tracking-wider text-white hover:text-brand-orange py-1 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-black text-xl uppercase tracking-tight text-white">
              Quick contact info
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-body">
              Introducing a truly professional theme built to last! Engineered for heavy industrial construction, architecture and civil infrastructure sites.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div className="flex items-start space-x-3 text-gray-200">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold uppercase tracking-wider text-white">Hours</div>
                  <div>Mon - Sat 8:00 - 17:30</div>
                  <div className="text-gray-400">Sunday - CLOSED</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-200">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold uppercase tracking-wider text-white">Location</div>
                  <div>{company.address || 'Plot 14, Spintex Road, Accra, Ghana'}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-200">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold uppercase tracking-wider text-white">Telephone / WhatsApp</div>
                  <div>{company.phoneHotline || '+233 55 166 0943'}</div>
                  <div className="text-brand-orange">{company.whatsapp || '+233 54 148 3758'} (WhatsApp)</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-200">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold uppercase tracking-wider text-white">Email Address</div>
                  <a href={`mailto:${company.email || 'info@debaldietcommodities.com'}`} className="hover:text-brand-orange transition-colors">
                    {company.email || 'info@debaldietcommodities.com'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer of Drawer */}
        <div className="pt-6 mt-6 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <span className="text-[11px] uppercase font-heading tracking-widest text-gray-400">Connect:</span>
            {topBar.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors"
                aria-label={s.name}
              >
                {s.name === 'Twitter' && <Twitter className="w-3.5 h-3.5" />}
                {s.name === 'Facebook' && <Facebook className="w-3.5 h-3.5" />}
                {s.name === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5" />}
                {s.name === 'Instagram' && <Instagram className="w-3.5 h-3.5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
