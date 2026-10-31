import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function ContactPage() {
  const { content } = useContent();
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Vehicle 70/30 Importation',
    budgetVolume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Title Banner (535px) */}
      <section
        className="relative w-full h-[535px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/contact-title-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#001659]/80" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-2xl text-white">
            <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
              GET IN TOUCH WITH OUR TEAM
            </span>
            <h1 className="font-heading font-black text-[50px] sm:text-[68px] lg:text-[76px] text-white leading-[1.05] tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed max-w-xl font-light">
              Connect directly with our headquarters in Accra, Ghana for vehicle orders, wholesale beauty supplies, and agricultural contracts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Headquarters Info & Contact Form Row */}
      <section className="w-full py-[110px] bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Accra Headquarters Details (Page 13) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                  ACCRA, GHANA
                </span>
                <h2 className="font-heading font-black text-[32px] sm:text-[40px] text-[#001659] leading-tight mb-4">
                  DeBaldiet Commodities (DC)
                </h2>
                <p className="font-body text-[16px] text-[#565969] leading-relaxed">
                  Our headquarters coordinates international supplier vetting, port operations, and direct customer deliveries across West Africa.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#001659] text-white flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#565969] block mb-1">
                      PHONE HOTLINE
                    </span>
                    <a
                      href={`tel:${contact.headquarters.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-heading font-bold text-[18px] text-[#001659] hover:text-[#ff5e14] transition-colors"
                    >
                      {contact.headquarters.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#001659] text-white flex items-center justify-center rounded-sm flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#565969] block mb-1">
                      WHATSAPP CHANNEL
                    </span>
                    <a
                      href={`https://wa.me/${contact.headquarters.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-bold text-[18px] text-[#001659] hover:text-[#ff5e14] transition-colors"
                    >
                      {contact.headquarters.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#001659] text-white flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#565969] block mb-1">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${contact.headquarters.email}`}
                      className="font-heading font-bold text-[17px] text-[#001659] hover:text-[#ff5e14] transition-colors"
                    >
                      {contact.headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#001659] text-white flex items-center justify-center rounded-sm flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#565969] block mb-1">
                      OPERATING SCHEDULE
                    </span>
                    <p className="font-heading font-bold text-[16px] text-[#001659]">
                      {contact.headquarters.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Inquiry Form (Page 13) */}
            <div className="lg:col-span-7 bg-[#fcfcfd] border border-[#e8e8e9] p-8 sm:p-12 shadow-sm">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                INQUIRY FORM
              </span>
              <h3 className="font-heading font-black text-[28px] sm:text-[34px] text-[#001659] mb-2">
                {contact.form.title}
              </h3>
              <p className="font-body text-[15px] text-[#565969] mb-8">
                {contact.form.subText}
              </p>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-xl text-green-900 mb-2">
                    Inquiry Submitted Successfully
                  </h4>
                  <p className="text-sm text-green-700">
                    Thank you, {formData.name}. Our procurement desk in Accra, Ghana will review your specifications and contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Mensah"
                      className="w-full h-[50px] px-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. samuel@example.com"
                        className="w-full h-[50px] px-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233..."
                        className="w-full h-[50px] px-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-[50px] px-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors"
                    >
                      {contact.form.servicesOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget / Volume */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                      Estimated Budget / Volume
                    </label>
                    <input
                      type="text"
                      value={formData.budgetVolume}
                      onChange={(e) => setFormData({ ...formData, budgetVolume: e.target.value })}
                      placeholder="e.g. SUV importation or 50kg grain"
                      className="w-full h-[50px] px-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your specific requirements..."
                      className="w-full p-4 bg-white border border-[#e8e8e9] focus:outline-none focus:border-[#001659] text-[15px] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-[52px] bg-[#ff5e14] hover:bg-[#001659] text-white font-heading font-bold text-[15px] uppercase tracking-[1px] transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
