import React from 'react';

export default function ClientsCarousel() {
  const logos = [
    '/client-1.png',
    '/client-2.png',
    '/client-3.png',
    '/client-4.png',
    '/client-5.png',
    '/client-6.png',
    '/client-7.png',
    '/client-8.png'
  ];

  return (
    <section
      className="relative w-full py-[100px] bg-cover bg-center"
      style={{ backgroundImage: `url('/clients-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#001659]/40" />
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-[200px] h-[90px] flex items-center justify-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="max-h-[60px] max-w-[140px] object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
