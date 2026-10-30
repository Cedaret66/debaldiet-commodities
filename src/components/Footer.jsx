import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, ChevronRight, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const { footer, company } = siteData;
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001659] text-white/80 font-body">
      {/* Main 3-Column Footer matching Page 13 */}
      <div className="max-w-[1300px] mx-auto px-6 py-16 lg:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* COL 1: ABOUT DEBALDIET */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#ff5e14] text-white flex items-center justify-center font-heading font-black text-xl tracking-wider rounded-sm">
                DC
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white leading-none">
                  DeBaldiet
                </span>
                <span className="font-heading uppercase text-[10px] tracking-[2.5px] font-bold text-white/60">
                  Commodities
                </span>
              </div>
            </Link>

            <h4 className="font-heading font-bold text-[14px] uppercase tracking-[1.5px] text-[#ff5e14]">
              {footer.col1.title}
            </h4>
            <p className="text-[15px] text-gray-300 leading-relaxed">
              {footer.col1.text}
            </p>

            <div className="space-y-2 pt-2 text-[14px]">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />
                <span>{company.headquarters}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />
                <span>{company.phoneHotline}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>WhatsApp: {company.whatsapp}</span>
              </div>
            </div>
          </div>

          {/* COL 2: CORE VERTICALS */}
          <div>
            <h4 className="font-heading font-bold text-[14px] uppercase tracking-[1.5px] text-[#ff5e14] mb-6">
              {footer.col2.title}
            </h4>

            <ul className="space-y-3.5 text-[15px]">
              {footer.col2.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-[#ff5e14] transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#ff5e14] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: NEWSLETTER SIGNUP */}
          <div>
            <h4 className="font-heading font-bold text-[14px] uppercase tracking-[1.5px] text-[#ff5e14] mb-6">
              {footer.col3.title}
            </h4>

            <p className="text-[15px] text-gray-300 leading-relaxed mb-6">
              {footer.col3.text}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full h-[48px] px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#ff5e14] transition-colors"
              />
              <button
                type="submit"
                className="w-full h-[48px] bg-[#ff5e14] hover:bg-[#e04e0a] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] transition-colors"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="mt-3 text-sm text-green-400">
                Thank you for subscribing to DeBaldiet updates!
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-400">
              Operating Hours: {company.hours}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>{footer.copyright}</p>

        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-gray-300 hover:text-[#ff5e14] transition-colors uppercase font-heading font-bold tracking-wider text-[11px]"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 text-[#ff5e14]" />
        </button>
      </div>
    </footer>
  );
}
