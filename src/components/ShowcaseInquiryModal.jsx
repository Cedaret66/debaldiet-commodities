import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Phone, Send, ShieldCheck, Tag } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import { calculate70PercentDeposit } from '../utils/pricing';

export default function ShowcaseInquiryModal({ item, type = 'cars', onClose }) {
  const { content } = useCms();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Accra, Ghana',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!item) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const deposit = calculate70PercentDeposit(item.price) || item.deposit70;
    const depositNote = deposit ? ` [70% Deposit: ${deposit}]` : '';
    const text = encodeURIComponent(
      `Hello DeBaldiet Commodities! I am interested in inquiring about: ${item.name} (${item.price || ''}${depositNote}). Please share landed availability and ordering details.`
    );
    const waRaw = content?.company?.whatsapp || '+233 54 148 3758';
    const waClean = waRaw.replace(/[^0-9]/g, '') || '233541483758';
    return `https://wa.me/${waClean}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001659]/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#001659] text-white shrink-0">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-[#ff5e14]" />
            <span className="font-heading font-bold text-xs uppercase tracking-[2px] text-[#ff5e14]">
              {type === 'cars' ? 'Automotive Inquiry (70/30 Available)' : type === 'hair' ? 'Hair & Beauty Order' : 'Bulk Commodity Quote'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Selected Item Card Preview */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-[#f8f9fa] border border-[#e8e8e9]">
            <div className="w-full sm:w-36 h-28 shrink-0 overflow-hidden bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 w-full text-left">
              {item.badge && (
                <span className="inline-block bg-[#001659] text-white font-heading font-black text-[9px] uppercase tracking-widest px-2 py-0.5 mb-1.5">
                  {item.badge}
                </span>
              )}
              <h3 className="font-heading font-bold text-lg text-[#001659] leading-snug">
                {item.name}
              </h3>
              <p className="font-heading font-bold text-[#ff5e14] text-base mt-1">
                {item.price}
              </p>
              {type === 'cars' && (
                <div className="mt-2 py-1 px-2 bg-white border border-[#e8e8e9] inline-flex items-center gap-1.5 text-xs font-heading">
                  <span className="text-[#565969]">70% Initial Deposit:</span>
                  <span className="text-[#ff5e14] font-bold">
                    {calculate70PercentDeposit(item.price) || item.deposit70}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#001659] text-[11px]">30% on Handover</span>
                </div>
              )}
              {item.specsOverview && (
                <p className="font-body text-xs text-[#565969] mt-1 line-clamp-1">
                  {item.specsOverview}
                </p>
              )}
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-black text-2xl text-[#001659]">
                Inquiry Received!
              </h4>
              <p className="font-body text-sm text-[#565969] max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{item.name}</strong>. A DeBaldiet trade specialist will contact you within 24 hours with complete availability, landed quotes, and inspection reports.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] text-white font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-[#001659] text-[#001659] font-heading font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full h-11 px-3 text-sm border border-gray-300 focus:outline-hidden focus:border-[#ff5e14]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+233 55 123 4567"
                    className="w-full h-11 px-3 text-sm border border-gray-300 focus:outline-hidden focus:border-[#ff5e14]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full h-11 px-3 text-sm border border-gray-300 focus:outline-hidden focus:border-[#ff5e14]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Delivery Destination
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Accra, Kumasi, Takoradi, etc."
                    className="w-full h-11 px-3 text-sm border border-gray-300 focus:outline-hidden focus:border-[#ff5e14]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                  Specific Requirements / Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    type === 'cars'
                      ? 'e.g. Interested in the 70/30 plan, custom Nappa interior or English UI conversion.'
                      : type === 'hair'
                      ? 'e.g. Looking for wholesale salon pricing on 20 bundles with 13x6 frontals.'
                      : 'e.g. Require 25 Metric Tons delivered to Tema industrial area by next month.'
                  }
                  className="w-full p-3 text-sm border border-gray-300 focus:outline-hidden focus:border-[#ff5e14]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 h-12 bg-[#ff5e14] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#001659] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Order Inquiry</span>
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-5 bg-[#25D366] text-white font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-[#565969] pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero obligation • Verified landed quotes • Direct factory/farm sourcing</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
