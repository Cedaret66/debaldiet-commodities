import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';

export default function FloatingWhatsApp() {
  const { content } = useCms();
  const [isHovered, setIsHovered] = useState(false);

  // Retrieve dynamic WhatsApp number from CMS or fallback
  const rawWa = content?.company?.whatsapp || '+233 54 148 3758';
  const cleanNumber = rawWa.replace(/[^0-9]/g, '') || '233541483758';
  const defaultMessage = encodeURIComponent(
    'Hello DeBaldiet Commodities! I would like to make an inquiry about your services.'
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp Support Channel"
      className="fixed bottom-6 right-6 z-[100] font-body print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/30"
        aria-label="Chat with DeBaldiet Commodities on WhatsApp"
        title="Chat with us on WhatsApp (+233 54 148 3758)"
      >
        {/* Pulsing indicator ring */}
        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40 duration-1000" />
          {/* Official WhatsApp Vector Logo */}
          <svg
            className="w-6 h-6 fill-white relative z-10 drop-shadow-sm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.635-.929-2.241-.244-.59-.492-.51-.678-.52-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.579-.087 1.78-.727 2.032-1.43.251-.703.251-1.305.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.666c-1.74 0-3.447-.468-4.945-1.356l-.354-.21-3.677.964.981-3.585-.23-.367a9.61 9.61 0 0 1-1.472-5.112c0-5.32 4.328-9.648 9.65-9.648 2.577 0 5.001 1.004 6.822 2.827a9.588 9.588 0 0 1 2.825 6.824c-.003 5.323-4.331 9.663-9.601 9.663h.001zm0-17.666c-4.417 0-8.013 3.596-8.013 8.014 0 1.411.368 2.788 1.066 3.998l.164.285-.632 2.308 2.361-.619.276.164c1.168.694 2.513 1.06 3.888 1.06 4.417 0 8.013-3.596 8.013-8.014 0-2.141-.834-4.154-2.348-5.669A7.96 7.96 0 0 0 12.042 4z" />
          </svg>
        </span>

        {/* Text Pill (Always visible or desktop styled) */}
        <div className="flex flex-col text-left">
          <span className="hidden sm:inline font-heading font-black text-xs uppercase tracking-wider text-white drop-shadow-xs">
            Chat on WhatsApp
          </span>
          <span className="hidden sm:inline text-[10px] text-white/90 font-medium">
            Fast Response • Online
          </span>
        </div>

        {/* Subtle hover tooltip on small screens */}
        <div className="sm:hidden absolute bottom-full mb-2 right-0 bg-[#001659] text-white text-[11px] font-heading font-bold px-2.5 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </div>
      </a>
    </aside>
  );
}
