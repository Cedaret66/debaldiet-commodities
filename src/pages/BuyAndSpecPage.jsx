import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Palette, 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Truck, 
  Car,
  Wrench,
  Gauge
} from 'lucide-react';

export default function BuyAndSpecPage() {
  const specPackages = [
    {
      id: 'interior',
      icon: <Layers className="w-8 h-8 text-[#ff5e14]" />,
      title: 'Interior Luxury & Upholstery',
      subtitle: 'Premium Cabin Personalization',
      desc: 'Transform your vehicle cockpit before shipment with custom bespoke materials and tailored craftsmanship.',
      features: [
        'Custom Nappa or Italian leather upholstery in bespoke shades (Cognac, Tan, Ivory, Crimson)',
        'Diamond-quilted stitching and embossed custom headrests',
        'Starlight headliner illumination packages',
        'Alcantara steering wheel wraps & roof lining',
        'Custom all-weather luxury floor mats with metal accents'
      ],
      badge: 'POPULAR'
    },
    {
      id: 'exterior',
      icon: <Palette className="w-8 h-8 text-[#ff5e14]" />,
      title: 'Exterior Styling & Protection',
      subtitle: 'Standout Aesthetics & Durability',
      desc: 'Give your Chinese SUV a distinct, commanding road presence built to withstand West African road and weather conditions.',
      features: [
        'Factory color wraps & stealth satin/matte protective film (PPF)',
        'Multi-layer 9H ceramic coating for long-term UV and heat resistance',
        'Upgraded forged alloy rims & heavy-duty all-terrain tires',
        'De-chroming, black-edition styling kits, and aero body mouldings',
        'Electric retractable side steps for easy cabin entry'
      ],
      badge: 'STYLING'
    },
    {
      id: 'technology',
      icon: <Cpu className="w-8 h-8 text-[#ff5e14]" />,
      title: 'Tech, Infotainment & Audio',
      subtitle: 'Cutting-Edge Connectivity',
      desc: 'Localize, optimize, and supercharge your vehicle’s onboard technology and entertainment systems.',
      features: [
        'Global English firmware localization & language conversion',
        'Wireless Apple CarPlay & Android Auto integration',
        'Audiophile speaker upgrades & acoustic sound-deadening insulation',
        '360-degree high-definition dash cameras with 24/7 parking surveillance',
        'Rear-seat entertainment multimedia displays'
      ],
      badge: 'TECH UPGRADE'
    },
    {
      id: 'tropicalization',
      icon: <Gauge className="w-8 h-8 text-[#ff5e14]" />,
      title: 'Tropicalization & Mechanical Prep',
      subtitle: 'Engineered for Africa',
      desc: 'Specialized preparation ensuring your SUV thrives reliably across all African climates and road terrains.',
      features: [
        'Heavy-duty engine cooling & tropical climate air conditioning tuning',
        'Underbody corrosion protection and anti-gravel undercoating',
        'Suspension lift kits & reinforced heavy-duty shock absorbers',
        'High-capacity dual-stage cabin air filtration filters',
        'Spare wheel carrier additions and emergency recovery gear kits'
      ],
      badge: 'RELIABILITY'
    }
  ];

  const popularModels = [
    {
      name: 'BYD Song Plus (EV & DM-i Hybrid)',
      type: 'Flagship New Energy SUV',
      image: '/chinese-suv-byd.jpg',
      specs: 'Range up to 1,200km combined • Blade Battery • Rotating 15.6" screen',
      specIdeas: 'English UI conversion, bespoke Nappa interior, 9H ceramic coating'
    },
    {
      name: 'Geely Monjaro (Xingyue L)',
      type: 'Executive Luxury SUV',
      image: '/chinese-suv-geely.jpg',
      specs: 'Volvo CMA Architecture • 2.0T Turbocharged • Triple-screen dashboard',
      specIdeas: 'Black-out trim package, custom forged 20" wheels, Alcantara roof'
    },
    {
      name: 'Haval H6 (Gen 3 & GT)',
      type: 'Best-Selling Mid-Size SUV',
      image: '/chinese-suv-haval.jpg',
      specs: 'Proven 1.5T/2.0T engines • Level 2 Autonomous Driving • Head-Up Display',
      specIdeas: 'Electric side steps, wireless CarPlay integration, leather refit'
    },
    {
      name: 'Chery Tiggo 8 Pro Max',
      type: '7-Seater Family & Executive SUV',
      image: '/chinese-suv-chery.jpg',
      specs: 'All-Wheel Drive • Sony sound system • Dual 12.3" curved displays',
      specIdeas: 'Heavy-duty suspension tuning, diamond-stitch seats, rear entertainment'
    },
    {
      name: 'Tank 300 / Tank 500',
      type: 'Rugged Off-Road Luxury SUV',
      image: '/chinese-suv-tank300.jpg',
      specs: 'Ladder-frame chassis • Front & rear differential locks • 4x4 crawl control',
      specIdeas: 'All-terrain wheel set, underbody armor, roof rack & overland tent setup'
    },
    {
      name: 'Li Auto L7 / L8 / L9',
      type: 'Ultra-Luxury Range-Extended EV',
      image: '/chinese-suv-liauto.jpg',
      specs: 'Extended range generator • Air suspension • Dual OLED rear cinema displays',
      specIdeas: 'Executive 4-seat conversion, stealth satin PPF wrap, localized English UI'
    }
  ];

  return (
    <div className="w-full bg-white font-body selection:bg-[#ff5e14] selection:text-white">
      {/* 1. Hero Title Banner */}
      <section
        className="relative w-full py-[110px] lg:py-[140px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/chinese-suv-byd.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001659]/95 via-[#001659]/80 to-[#001659]/50" />
        <div className="relative w-full max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center space-x-2 bg-[#ff5e14] text-white px-3.5 py-1 text-[12px] font-heading uppercase tracking-[2px] font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM VEHICLE SPECIFICATION SERVICE</span>
            </span>
            <h1 className="font-heading font-black text-[42px] sm:text-[58px] lg:text-[70px] text-white leading-[1.06] tracking-tight mb-5">
              Buy & Spec Service
            </h1>
            <p className="font-heading text-[18px] sm:text-[22px] text-white/90 leading-relaxed font-light mb-8">
              Buy your ideal Chinese SUV—brand new or low-mileage slightly used—and let us custom-spec it to your exact taste before it ships to Ghana and Africa.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center h-[50px] px-8 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300 shadow-xl"
              >
                Request a Custom Spec
              </Link>
              <Link
                to="/our-services#car-import"
                className="inline-flex items-center justify-center h-[50px] px-8 border-2 border-white text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-white hover:text-[#001659] transition-all duration-300"
              >
                Explore 70/30 Payment Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How Buy & Spec Works */}
      <section className="w-full py-[110px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              THE CONCEPT
            </span>
            <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-tight mb-5">
              Why Settle for Factory Standard When You Can Build Your Dream SUV?
            </h2>
            <p className="text-[#565969] text-[17px] leading-relaxed">
              When you purchase a vehicle through DeBaldiet Commodities, you don't have to accept off-the-lot limitations. Through our direct supplier network and professional tuning partners in China, we offer our signature <strong>"Buy & Spec"</strong> service. After you select your vehicle (brand new or low-mileage slightly used), our team executes your desired exterior, interior, technical, and mechanical modifications directly at source before ocean shipment.
            </p>
          </div>

          {/* 4 Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Vehicle Selection',
                desc: 'Pick your preferred model (BYD, Haval, Geely, Chery, Tank, Li Auto) — either brand-new from factory or clean slightly used with verified low mileage.'
              },
              {
                step: '02',
                title: 'Bespoke Spec Consultation',
                desc: 'Choose your desired upgrades: leather re-trims, color wraps, body aero, English firmware conversion, wheels, or suspension lifts.'
              },
              {
                step: '03',
                title: 'Precision Execution in China',
                desc: 'Certified master technicians carry out all modifications in China. Every upgrade is documented with high-res photos and video walkthroughs.'
              },
              {
                step: '04',
                title: 'Shipping & Handover',
                desc: 'Your personalized SUV is crated, shipped to Tema Port, cleared through customs, and delivered directly to your driveway across Ghana or Africa.'
              }
            ].map((st, idx) => (
              <div key={idx} className="bg-[#f8f9fa] border border-[#e8e8e9] p-8 relative flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <span className="font-heading font-black text-4xl text-[#ff5e14] block mb-4">
                    {st.step}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#001659] mb-3">
                    {st.title}
                  </h3>
                  <p className="font-body text-sm text-[#565969] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-heading font-bold text-[#001659] uppercase tracking-wider flex items-center space-x-1">
                  <span>Guaranteed Craftsmanship</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Available Spec Categories */}
      <section className="w-full py-[110px] bg-[#f8f9fa] border-y border-[#e8e8e9] fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
              CUSTOMIZATION DIRECTORY
            </span>
            <h2 className="font-heading font-black text-[36px] sm:text-[46px] text-[#001659] leading-tight">
              Four Comprehensive Spec Packages
            </h2>
            <p className="text-[#565969] text-[16px] mt-4">
              Mix and match packages to craft a one-of-a-kind vehicle that matches your lifestyle, executive stature, or fleet requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-[#e8e8e9] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#001659] text-white flex items-center justify-center rounded-sm">
                      {pkg.icon}
                    </div>
                    <span className="bg-[#ff5e14] text-white text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1">
                      {pkg.badge}
                    </span>
                  </div>

                  <span className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#ff5e14] block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-heading font-black text-[24px] sm:text-[28px] text-[#001659] mb-3">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-[15px] text-[#565969] leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-gray-100">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-[14px] text-[#303030]">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-[#001659] hover:text-[#ff5e14] transition-colors"
                  >
                    <span>Inquire About {pkg.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Chinese SUVs for Buy & Spec */}
      <section className="w-full py-[110px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-2">
                FEATURED CHINESE SUVS
              </span>
              <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-tight">
                Popular Models Ready for Buy & Spec
              </h2>
            </div>
            <p className="text-[#565969] text-[16px] max-w-md mt-4 md:mt-0">
              All models available in both <strong>brand-new</strong> and <strong>certified slightly used with low mileage</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularModels.map((car, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e8e8e9] overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-[240px] overflow-hidden relative bg-gray-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#001659] text-white text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1">
                      NEW & SLIGHTLY USED
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="font-heading uppercase text-[11px] font-bold tracking-wider text-[#ff5e14] block mb-1">
                      {car.type}
                    </span>
                    <h3 className="font-heading font-black text-[20px] text-[#001659] mb-2">
                      {car.name}
                    </h3>
                    <p className="font-body text-[13px] text-[#565969] leading-relaxed mb-4">
                      {car.specs}
                    </p>

                    <div className="bg-[#f8f9fa] p-3.5 border-l-2 border-[#ff5e14] text-xs">
                      <span className="font-heading font-bold text-[#001659] uppercase block mb-1">
                        Recommended Specs:
                      </span>
                      <span className="text-gray-600 font-body">
                        {car.specIdeas}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact-us"
                    className="w-full h-[44px] inline-flex items-center justify-center bg-[#001659] hover:bg-[#ff5e14] text-white font-heading font-bold text-[12px] uppercase tracking-wider transition-colors duration-300"
                  >
                    Configure This SUV
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality & Dual Inspection Assurance */}
      <section className="w-full py-[100px] bg-[#001659] text-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
                QUALITY GUARANTEE
              </span>
              <h2 className="font-heading font-black text-[36px] sm:text-[46px] text-white leading-tight mb-4">
                Dual Inspection on Every Single Vehicle
              </h2>
              <p className="font-body text-[17px] text-white/90 leading-relaxed mb-6">
                Whether you select a brand new SUV or a low-mileage slightly used vehicle, our technical team conducts a strict 150-point diagnostic inspection in China prior to customization and loading. Once docked in Tema, a second inspection confirms your custom specs remain in mint condition before final driveway handover.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="font-heading font-black text-2xl text-[#ff5e14] mb-1">100% Verified</div>
                  <div className="text-xs font-heading uppercase tracking-wider text-white/70">
                    Low Mileage & Clean Titles
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-[#ff5e14] mb-1">China + Ghana</div>
                  <div className="text-xs font-heading uppercase tracking-wider text-white/70">
                    Dual Stage Inspections
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-[#ff5e14] mb-1">Across Africa</div>
                  <div className="text-xs font-heading uppercase tracking-wider text-white/70">
                    Direct Regional Delivery
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-[#ff5e14] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Have a Custom Spec in Mind?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Tell us the make, year, color, and customizations you desire. We will calculate the complete landed cost and timeline.
              </p>
              <Link
                to="/contact-us"
                className="w-full h-[46px] inline-flex items-center justify-center bg-white text-[#001659] hover:bg-[#ff5e14] hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Submit Spec Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="w-full py-[100px] bg-white fade-in-scroll">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            GET STARTED TODAY
          </span>
          <h2 className="font-heading font-black text-[36px] sm:text-[48px] text-[#001659] leading-tight mb-6">
            Ready to Buy and Spec Your Next Vehicle?
          </h2>
          <p className="font-body text-[17px] text-[#565969] max-w-2xl mx-auto mb-8">
            Experience the freedom of tailored automotive ownership backed by our 70/30 financing plan and full accountability across Ghana and Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center h-[50px] px-8 bg-[#ff5e14] text-white font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] transition-colors shadow-lg"
            >
              Order With Buy & Spec
            </Link>
            <Link
              to="/our-services"
              className="inline-flex items-center justify-center h-[50px] px-8 border-2 border-[#001659] text-[#001659] font-heading font-bold text-[14px] uppercase tracking-[1px] hover:bg-[#001659] hover:text-white transition-colors"
            >
              Explore All Verticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
