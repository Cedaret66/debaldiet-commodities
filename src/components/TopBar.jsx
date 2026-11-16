import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';

export default function TopBar() {
  const { content } = useCms();
  const topBar = content.topBar || {};

  const cleanPhone = String(topBar.phone || '').replace(/[^0-9+]/g, '');
  const cleanWhatsapp = String(topBar.whatsapp || '').replace(/[^0-9]/g, '');

  return (
    <div className="hidden lg:block bg-[#001659] text-white/85 text-[12px] border-b border-white/10 font-body">
      <div className="max-w-[1300px] mx-auto px-6 h-10 flex items-center justify-between">
        {/* Left Contacts */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5e14]" />
            </a>
            <EditableText path="topBar.phone" as="span" className="font-medium">
              {topBar.phone}
            </EditableText>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={`https://wa.me/${cleanWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            </a>
            <span className="font-medium">WhatsApp: </span>
            <EditableText path="topBar.whatsapp" as="span" className="font-medium">
              {topBar.whatsapp}
            </EditableText>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={`mailto:${topBar.email}`}
              className="flex items-center space-x-2 hover:text-[#ff5e14] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff5e14]" />
            </a>
            <EditableText path="topBar.email" as="span">
              {topBar.email}
            </EditableText>
          </div>
        </div>

        {/* Right Hours */}
        <div className="flex items-center space-x-2 text-white/70">
          <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
          <EditableText path="topBar.hours" as="span">
            {topBar.hours}
          </EditableText>
        </div>
      </div>
    </div>
  );
}
