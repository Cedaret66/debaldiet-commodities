import React from 'react';
import { Phone, Mail, Clock, MessageSquareQuote, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TopBar() {
  const { topBar } = siteData;

  return (
    <div className="hidden lg:block bg-[#001659] text-white/85 text-[12px] border-b border-white/10 font-body">
      <div className="max-w-[1300px] mx-auto px-6 h-10 flex items-center justify-between">
        {/* Left Contacts */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${topBar.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff5e14]" />
            <span className="font-medium">{topBar.phone}</span>
          </a>

          <a
            href={`https://wa.me/${topBar.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            <span className="font-medium">WhatsApp: {topBar.whatsapp}</span>
          </a>

          <a
            href={`mailto:${topBar.email}`}
            className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff5e14]" />
            <span>{topBar.email}</span>
          </a>
        </div>

        {/* Right Hours */}
        <div className="flex items-center space-x-2 text-white/70">
          <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
          <span>{topBar.hours}</span>
        </div>
      </div>
    </div>
  );
}
