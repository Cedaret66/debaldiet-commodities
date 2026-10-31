import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, ChevronRight, MessageCircle } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';

export default function Footer() {
  const { content } = useCms();
  const footer = content.footer || {};
  const company = content.company || {};
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
      {/* Main 3-Column Footer */}
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
              {footer.col1?.title || 'ABOUT DEBALDIET'}
            </h4>
            <EditableText
              path="footer.col1.text"
              as="p"
              multiline
              className="text-[15px] text-gray-300 leading-relaxed block"
            >
              {footer.col1?.text || 'DeBaldiet Commodities (DC) is an Accra-based trade and logistics firm.'}
            </EditableText>

            <div className="space-y-2 pt-2 text-[14px]">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />
                <EditableText path="company.headquarters" as="span">
                  {company.headquarters || 'Accra, Ghana'}
                </EditableText>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />
                <EditableText path="company.phoneHotline" as="span">
                  {company.phoneHotline || '+233 55 166 0943'}
                </EditableText>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>WhatsApp: </span>
                <EditableText path="company.whatsapp" as="span">
                  {company.whatsapp || '+234 54 148 3758'}
                </EditableText>
              </div>
            </div>
          </div>

          {/* COL 2: CORE VERTICALS */}
          <div>
            <h4 className="font-heading font-bold text-[14px] uppercase tracking-[1.5px] text-[#ff5e14] mb-6">
              {footer.col2?.title || 'CORE VERTICALS'}
            </h4>

            <ul className="space-y-3.5 text-[15px]">
              {(footer.col2?.links || []).map((link, idx) => (
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
              {footer.col3?.title || 'NEWSLETTER SIGNUP'}
            </h4>

            <EditableText
              path="footer.col3.text"
              as="p"
              multiline
              className="text-[15px] text-gray-300 leading-relaxed mb-6 block"
            >
              {footer.col3?.text || 'Subscribe to receive updates on incoming car shipments, beauty stock, and grain prices.'}
            </EditableText>

            {subscribed ? (
              <div className="p-4 bg-[#ff5e14] text-white text-sm font-heading font-bold uppercase tracking-wider">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full h-[46px] px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-[#ff5e14] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full h-[46px] bg-[#ff5e14] hover:bg-white hover:text-[#001659] text-white font-heading font-bold text-[13px] uppercase tracking-[1.5px] transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
        <EditableText path="footer.copyright" as="p">
          {footer.copyright || '© 2026 DeBaldiet Commodities (DC). All Rights Reserved. Accra, Ghana.'}
        </EditableText>
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-white/80 hover:text-[#ff5e14] transition-colors font-heading uppercase tracking-wider font-semibold"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
