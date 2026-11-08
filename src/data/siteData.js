export const siteData = {
  company: {
    name: "DeBaldiet Commodities (DC)",
    shortName: "DeBaldiet Commodities",
    abbreviation: "DC",
    logo: "/logo.png",
    logoWhite: "/logo-white-text.png",
    logoIcon: "/logo-icon.png",
    tagline: "Bridging Global Sourcing with Reliable Local Execution Across Ghana and Africa",
    managingDirector: "Joshua King Kotey",
    headquarters: "Accra, Ghana",
    address: "Accra, Ghana",
    phoneHotline: "+233 55 166 0943",
    whatsapp: "+233 54 148 3758",
    email: "debaldietcommodities@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 5:30 PM | Sun: Closed",
    socials: [
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ]
  },
  
  topBar: {
    phone: "+233 55 166 0943",
    whatsapp: "+233 54 148 3758",
    email: "debaldietcommodities@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 5:30 PM | Sun: Closed",
    address: "Accra, Ghana",
    socials: [
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ]
  },
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Our Services",
      href: "/our-services",
      dropdown: [
        {
          label: "Auto 70/30 Scheme",
          href: "/our-services#car-import",
          desc: "Flexible 70% deposit & 30% on handover vehicle financing",
          badge: "FLAGSHIP"
        },
        {
          label: "Automotive Sourcing (Buy N Spec)",
          href: "/our-services#car-import",
          desc: "Direct China vehicle importation (Brand New & Low-Mileage Slightly Used)"
        },
        {
          label: "Buy N Spec",
          href: "/buy-and-spec",
          desc: "Dealership vehicle sourcing & bespoke spec modifications",
          badge: "NEW"
        },
        {
          label: "Beauty & Hair Care",
          href: "/our-services#beauty",
          desc: "100% human virgin hair bundles, wigs & salon supplies"
        },
        {
          label: "Agriculture & Food Commodities",
          href: "/our-services#agriculture",
          desc: "Bulk food crops, grains & institutional agro-distribution"
        },
        {
          label: "All Services Overview",
          href: "/our-services",
          desc: "Comprehensive breakdown of our strategic commercial pillars"
        }
      ]
    },
    { label: "Buy N Spec", href: "/buy-and-spec" },
    {
      label: "Showcases",
      href: "/showcases/cars",
      dropdown: [
        {
          label: "Chinese SUVs & Cars",
          href: "/showcases/cars",
          desc: "Explore top Chinese SUVs with specs, 70/30 financing & landed pricing",
          badge: "POPULAR"
        },
        {
          label: "Luxury Hair & Wigs",
          href: "/showcases/hair",
          desc: "100% human virgin bundles, raw hair, HD lace wigs & salon supplies"
        },
        {
          label: "Agricultural Produce",
          href: "/showcases/agriculture",
          desc: "Premium food crops, grains & export commodities directly from farm-gates"
        }
      ]
    },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact Us", href: "/contact-us" }
  ],

  slides: [
    {
      id: 1,
      pillar: "Buy N Spec Automotive",
      bgImage: "/chinese-suv-byd.jpg",
      overline: "BUY N SPEC • DIRECT CHINESE SUV & VEHICLE IMPORTATION • CHINA TO ACCRA",
      headline: "Quality Chinese SUVs Sourced Direct From China. Brand New & Low-Mileage Slightly Used.",
      body: "Eliminate middlemen, inflated dealer markups, and clearance stress. DeBaldiet Commodities specializes in premium Chinese SUVs (BYD, Haval, Geely, Chery, Tank, Li Auto)—available both brand-new and certified slightly used with low mileage. Enjoy end-to-end sourcing, dual technical inspections, maritime freight, and customs clearance.",
      benefitTag: "FLEXIBLE 70/30 PAYMENT TERMS AVAILABLE",
      primaryBtn: { text: "Start Vehicle Order", href: "/contact-us" },
      secondaryBtn: { text: "How 70/30 Works", href: "/our-services#car-import" }
    },
    {
      id: 2,
      pillar: "Beauty & Hair Care",
      bgImage: "/home-hero-bg-alt.jpg",
      overline: "PREMIUM HAIR EXTENSIONS & BEAUTY ESSENTIALS",
      headline: "Luxury Hair Products for Salons and Everyday Elegance.",
      body: "From 100% authentic virgin human hair bundles and HD lace systems to professional hair treatments. We supply individual clients and provide bulk wholesale inventory directly to top beauty salons across Ghana.",
      benefitTag: "WHOLESALE SALON INVENTORY AVAILABLE",
      primaryBtn: { text: "Explore Beauty Collection", href: "/our-services#beauty" },
      secondaryBtn: { text: "Wholesale Inquiries", href: "/contact-us" }
    },
    {
      id: 3,
      pillar: "Agricultural Commodities",
      bgImage: "/feature-product.jpg",
      overline: "COMMERCIAL AGRI-TRADE & FOOD COMMODITIES",
      headline: "Nourishing Markets with Premium Farm Crops and Staple Produce.",
      body: "Connecting trusted farm gates with wholesale buyers, industrial food processors, and markets. Guaranteed grade sorting, moisture verification, and bulk logistics for staple grains and food crops.",
      benefitTag: "DIRECT FARM-GATE TO WAREHOUSE",
      primaryBtn: { text: "View Agricultural Commodities", href: "/our-services#agriculture" },
      secondaryBtn: { text: "Bulk Supply Quote", href: "/contact-us" }
    }
  ],

  intro: {
    sectionTag: "EXPLORE DEBALDIET COMMODITIES",
    heading: "One Accountable Partner Across Global Sourcing, Retail & Agri-Trade Across Ghana & Africa",
    paragraph: "Headquartered in Accra, Ghana and serving clients across Ghana and Africa, DeBaldiet Commodities (DC) is a diversified trading and logistics company. We solve the three biggest frustrations of modern procurement: opaque markups, slow delivery, and questionable quality. Whether securing your next vehicle from China—brand new or certified low-mileage slightly used—with our game-changing 70/30 payment plan, custom-speccing your ride, stocking your salon with luxury virgin hair, or procuring metric tons of staple grains, you deal with a single, accountable partner from initial order to final handover."
  },

  corePillars: [
    {
      id: "cars",
      vertical: "Pillar 01: Buy N Spec (Automotive)",
      badge: "BUY N SPEC",
      title: "Buy N Spec: Chinese SUV Sourcing & Dealership (New & Low-Mileage)",
      summary: "Turnkey dealership procurement of top Chinese SUVs (BYD, Haval, Geely, Chery, Tank). We handle factory vetting, ocean freight, Tema port customs clearance, and our custom Buy N Spec service.",
      highlights: [
        "Brand New & Low-Mileage Slightly Used",
        "70/30 flexible payment plan",
        "Custom vehicle Buy N Spec modifications",
        "Dual technical inspections (China + GRA)"
      ],
      linkText: "Explore SUVs →",
      link: "/our-services#car-import",
      image: "/chinese-suv-geely.jpg"
    },
    {
      id: "beauty",
      vertical: "Pillar 02: Beauty",
      badge: "HAIR CARE",
      title: "Luxury Hair Extensions & Beauty Supplies",
      summary: "Supplying top-tier virgin human hair, tailored lace wigs, and essential beauty cosmetics to retail clients and commercial beauty salons.",
      highlights: [
        "100% virgin human hair weaves & bundles",
        "Custom HD lace frontals & closures",
        "Nourishing organic hair-care products",
        "Discounted wholesale packages for salons"
      ],
      linkText: "Explore Beauty →",
      link: "/our-services#beauty",
      image: "/feature-interior.jpg"
    },
    {
      id: "agriculture",
      vertical: "Pillar 03: Agriculture",
      badge: "AGRI-TRADE",
      title: "Farm Crops, Grains & Food Commodity Distribution",
      summary: "Procuring and distributing high-yield food crops, grains, and staple commodities directly from trusted farming hubs to Ghanaian commercial markets.",
      highlights: [
        "Bulk maize, rice, sorghum, & legumes",
        "Quality grading & moisture monitoring",
        "Reliable supply contracts for processors",
        "Direct farm-to-warehouse logistics"
      ],
      linkText: "Explore Agriculture →",
      link: "/our-services#agriculture",
      image: "/feature-product.jpg"
    }
  ],

  scheme7030: {
    tagline: "70/30 SPLIT FINANCING FOR BUY N SPEC VEHICLES",
    headline: "Don't Have the Full Amount Upfront? Our 70/30 Plan Closes the Gap.",
    intro: "Many buyers want a quality Chinese SUV or vehicle—brand new or certified low-mileage slightly used—but do not have 100% of the capital ready today. We co-invest with you to acquire your car from China, execute optional Buy N Spec styling, ship it, clear it, and deliver it before you pay the remaining balance.",
    steps: [
      {
        step: 1,
        title: "70% Upfront Deposit",
        desc: "Select your desired Chinese SUV or vehicle (New or Low-Mileage slightly used). You pay 70% of the vehicle cost into our secured account."
      },
      {
        step: 2,
        title: "DC Tops Up 30% & Specs",
        desc: "DeBaldiet Commodities covers the remaining 30%, completes the purchase in China immediately, and initiates any requested Buy N Spec custom packages."
      },
      {
        step: 3,
        title: "4–6 Weeks Transit",
        desc: "The car is inspected, crated, shipped via ocean freight, and cleared through Tema Port customs."
      },
      {
        step: 4,
        title: "Final 30% on Handover",
        desc: "Inspect your car on arrival in Accra. Pay the outstanding 30% balance and take delivery."
      }
    ]
  },

  operationalExcellence: [
    {
      stage: "STAGE 1: CHINA PRE-SHIPMENT",
      title: "Chinese Export Standard",
      desc: "Every vehicle is physically and mechanically inspected by certified technicians in China before loading to ensure pristine working order."
    },
    {
      stage: "STAGE 2: GHANA ARRIVAL",
      title: "GRA Standard Compliance",
      desc: "Upon docking in Ghana, the car is inspected against Ghana Revenue Authority and DVLA safety and roadworthiness benchmarks."
    },
    {
      stage: "STAGE 3: PROTECTION",
      title: "Asset Insurance Support",
      desc: "We connect buyers with leading insurers to arrange comprehensive vehicle cover on handover, safeguarding the vehicle from day one."
    }
  ],

  counters: [
    {
      value: "4 to 6",
      unit: "Weeks",
      subtext: "GUARANTEED CHINA-TO-GHANA DELIVERY WINDOW"
    },
    {
      value: "70 / 30",
      unit: "",
      subtext: "FLEXIBLE SPLIT FINANCING FOR VEHICLE BUYERS"
    },
    {
      value: "100%",
      unit: "",
      subtext: "DUAL-INSPECTED & GRA CUSTOMS COMPLIANT"
    },
    {
      value: "3",
      unit: "Strategic Verticals",
      subtext: "AUTOMOTIVE • BEAUTY & HAIR • AGRICULTURE"
    }
  ],

  testimonials: [
    {
      clientType: "Automotive Client",
      rating: 5,
      quote: "Importing my Haval H6 SUV was completely stress-free. Finding a clean slightly used Chinese SUV with low mileage seemed tricky until DC stepped in. Their 70/30 scheme and custom spec modifications delivered my car to Accra in 5 weeks in showroom condition.",
      name: "Kwame M.",
      title: "Bank Operations Specialist, Accra",
      avatar: "/testimonial-1.jpg"
    },
    {
      clientType: "Beauty & Salon Partner",
      rating: 5,
      quote: "DeBaldiet is our secret weapon for premium virgin hair bundles. The hair texture doesn't tangle or shed, and our salon clients keep returning. Their wholesale pricing allows us to maintain healthy profit margins.",
      name: "Abena Serwaa",
      title: "Salon Director & Master Stylist",
      avatar: "/testimonial-2.jpg"
    },
    {
      clientType: "Agri-Commodity Buyer",
      rating: 5,
      quote: "Securing high-grade grain supplies without adulteration or moisture damage has always been difficult. DC delivers consistent grain quality and sticks to agreed delivery schedules every single cycle.",
      name: "Emmanuel Boateng",
      title: "Commercial Grain Distributor",
      avatar: "/testimonial-3.jpg"
    }
  ],

  about: {
    headline: "About DeBaldiet Commodities",
    subHeadline: "Bridging Global Sourcing with Reliable Local Execution Across Ghana and Africa.",
    story: [
      "Founded in Accra, Ghana, DeBaldiet Commodities (DC) was born out of a desire to bring genuine accountability to trade and logistics across Ghana and the wider African continent. For years, individual buyers and commercial enterprises have suffered from inflated local markups, fraudulent brokers, unpredictably long shipping timelines, and subpar product quality.",
      "DeBaldiet Commodities disrupts this broken model by taking direct responsibility for the entire journey. We are not brokers who vanish when problems arise; we are your direct, accountable trading partner. By managing international sourcing directly at factory floors and verified vehicle hubs in China, coordinating secure maritime shipping, executing bespoke Buy N Spec customizations, and personally supervising customs clearance, we ensure our clients receive exactly what they paid for—at fair, transparent costs.",
      "Today, DC operates across vital commercial sectors serving clients across Ghana and Africa: delivering brand-new and certified low-mileage slightly used Chinese SUVs and commercial vehicles through Buy N Spec, offering custom vehicle styling, distributing luxury hair and beauty supplies, and powering commercial agricultural commodity trade."
    ],
    vision: {
      title: "To Be Africa's Benchmark in Accountable Trade",
      desc: "To establish DeBaldiet Commodities as Africa’s most trusted multi-sector trading partner, recognized for eliminating trade opacity and creating financial and operational flexibility for everyday consumers and institutions across the continent."
    },
    mission: {
      title: "Accessible Quality & Total Transparency Across Africa",
      desc: "To deliver verified, high-value vehicles (new and certified low-mileage), custom vehicle speccing via Buy N Spec, authentic beauty products, and vital food commodities through transparent pricing, rigorous dual-stage inspections, and customer-first terms across Ghana and Africa."
    },
    coreValues: [
      {
        value: "Single Accountability",
        meaning: "No finger-pointing between suppliers, freight agents, and clearing brokers. From initial sourcing in China to driveway handover across Ghana and Africa, DC takes full responsibility."
      },
      {
        value: "Radical Transparency",
        meaning: "Every charge—from sourcing price to ocean shipping, port duties, inspection certificates, and clearance—is fully disclosed. No hidden markups or surprises."
      },
      {
        value: "Dual Inspection Assurance",
        meaning: "We never assume quality; we verify it twice. Rigorous technical, mechanical, and diagnostic inspections in China, followed by physical verification upon arrival."
      },
      {
        value: "Customer-Centric Value",
        meaning: "We bridge procurement hurdles for our clients through structured terms like our 70/30 plan, custom Buy N Spec vehicle personalization, and responsive aftercare."
      }
    ],
    leadership: {
      name: "Joshua King Kotey",
      role: "Managing Director, DeBaldiet Commodities (DC)",
      location: "Accra, Ghana",
      phone: "+233 55 166 0943",
      email: "debaldietcommodities@gmail.com",
      quote: "Our business is built on trust and delivered promises. Whether sourcing a brand-new or low-mileage Chinese SUV, custom-speccing a vehicle to client taste, delivering virgin hair bundles to an aspiring stylist, or supplying metric tons of staple grains across Ghana and Africa, we ensure that every client experiences seamless efficiency, transparent pricing, and zero hassle.",
      image: "/team-1.jpg"
    },
    storyImage: "/about-project-mgmt.jpg"
  },

  services: {
    automotive: {
      vertical: "Vertical 01: Buy N Spec",
      badge: "BUY N SPEC • AUTOMOTIVE DEALERSHIP & SOURCING",
      headline: "Buy N Spec: Direct Chinese SUV & Vehicle Importation (Brand New & Low-Mileage Slightly Used)",
      overview: "Local dealership prices often carry 40%–60% markups. Through Buy N Spec, DeBaldiet Commodities specializes in world-class Chinese SUVs and vehicles—including BYD, Haval, Geely, Chery, Tank, and Li Auto. We source both factory-fresh brand new vehicles and certified slightly used vehicles with verified low mileage, pristine interior/mechanical condition, and comprehensive pre-export inspection reports.",
      scope: [
        {
          stage: "1. Sourcing & Selection (New & Low-Mileage)",
          executes: "We match your vehicle requirements (compact, mid-size, or full-size Chinese SUV, EV, hybrid, or commercial fleet). We source either factory-fresh brand new or pristine low-mileage slightly used vehicles with guaranteed clean titles."
        },
        {
          stage: "2. Rigorous China Pre-Shipment Inspection",
          executes: "Comprehensive diagnostic, engine, battery health (for EVs/hybrids), structural, and cosmetic inspection in China to confirm the vehicle satisfies all Chinese export and roadworthiness criteria."
        },
        {
          stage: "3. Optional 'Buy N Spec' Customization",
          executes: "Before maritime shipment, clients can upgrade upholstery, add custom wheel sets, tech infotainment units, ceramic coatings, or specific regional trim kits directly at source."
        },
        {
          stage: "4. Ocean Freight Logistics",
          executes: "Arranging secure containerized or Ro-Ro shipping to Tema Port, Ghana, through trusted international maritime logistics carriers with milestone tracking."
        },
        {
          stage: "5. Port Clearance & Duty Documentation",
          executes: "Managing all customs documentation, GRA duties, port tariffs, and regulatory clearance paperwork smoothly and legally."
        },
        {
          stage: "6. Handover & Delivery Across Ghana & Africa",
          executes: "Post-dock inspection against Ghana Revenue Authority standards followed by direct transportation to the customer's preferred handover location across Ghana and Africa with insurance support."
        }
      ]
    },
    beauty: {
      vertical: "Vertical 02",
      badge: "BEAUTY & PERSONAL CARE",
      headline: "Premium Hair Extensions, Wigs & Salon Supplies",
      overview: "Quality in the hair and beauty industry cannot be faked. DeBaldiet Commodities curates, imports, and distributes authentic hair products and styling supplies. We cater to everyday women who demand long-lasting glamour as well as commercial salons seeking reliable wholesale partners.",
      offerings: [
        { title: "Virgin Hair Bundles", desc: "Single donor straight, body wave, deep wave, and curly bundles with full cuticles intact." },
        { title: "Lace Units", desc: "Pre-plucked HD lace frontals, transparent closures, and glueless wigs." },
        { title: "Hair Care & Treatments", desc: "Hydrating leave-in serums, edge glazes, sulfate-free shampoos, and reconstructive oils." },
        { title: "Beauty Accessories", desc: "Hot combs, wig bands, styling clips, and salon workstation essentials." }
      ],
      wholesale: "We supply salon owners and beauty entrepreneurs with tiered wholesale pricing, enabling them to stock high-margin products with low minimum order quantities (MOQs) and guaranteed re-stock schedules.",
      image: "/feature-interior.jpg"
    },
    agriculture: {
      vertical: "Vertical 03",
      badge: "AGRI-COMMODITIES",
      headline: "Bulk Food Crops, Grains & Agricultural Distribution",
      overview: "Agriculture is the backbone of regional commerce. DeBaldiet Commodities operates active supply lines connecting agrarian farming cooperatives with urban distributors, industrial processors, institutional kitchens, and export buyers.",
      commodities: [
        { title: "Grains & Staples", desc: "Yellow and white maize, polished rice, sorghum, millet." },
        { title: "Legumes & Oilseeds", desc: "Soybeans, cowpeas, groundnuts, and sesame." },
        { title: "Tubers & Fresh Harvest", desc: "Yam tubers, cassava, and seasonal produce." },
        { title: "Animal Feed Ingredients", desc: "Raw agricultural inputs for commercial feed mills." }
      ],
      qualityAssurance: "All batches are screened for moisture content, foreign matter, and pest resistance before warehousing or transit, ensuring food commodities arrive in prime condition.",
      image: "/feature-product.jpg"
    }
  },

  partnerships: {
    tagline: "COMMERCIAL BANK COLLABORATION",
    badge: "B2B PROPOSAL",
    headline: "Bank & Corporate Asset Partnership Proposal",
    summary: "DeBaldiet Commodities proposes to become your bank's preferred automotive vendor, supplying quality Chinese vehicles to your staff and clients at a lower total cost than locally sourced cars.",
    pillars: [
      {
        title: "1. Preferred Automotive Vendor for Staff Loans",
        desc: "Many banks provide vehicle loans to their staff. We propose that DC be named your preferred vendor. Whenever a staff member qualifies for an auto loan, they are directed to DC for sourcing, shipping, and delivery—securing a newer, inspected car at lower debt exposure."
      },
      {
        title: "2. Joint Asset Financing for Bank Clients",
        desc: "Credit-worthy clients with strong deposit relationships can finance a vehicle through your bank, with DC sourcing and delivering the car. This creates a high-margin lending product backed by a tangible, insured physical asset."
      }
    ],
    matrix: [
      {
        benefit: "Staff Welfare",
        delivery: "Affordable, inspected vehicles for staff through one trusted, accountable vendor."
      },
      {
        benefit: "New Lending Revenue",
        delivery: "A ready-to-deploy joint asset-financing product for credit-worthy retail clients."
      },
      {
        benefit: "Lower Credit Risk",
        delivery: "Direct Chinese sourcing lowers total vehicle cost, requiring smaller loans backed by insured assets."
      },
      {
        benefit: "Client Loyalty",
        delivery: "A high-value lifestyle benefit that deepens relationships with high-net-worth deposit clients."
      },
      {
        benefit: "Speed & Transparency",
        delivery: "Guaranteed delivery within 4 to 6 weeks with proactive progress tracking at every stage."
      }
    ]
  },

  contact: {
    headquarters: {
      name: "DeBaldiet Commodities (DC)",
      location: "Accra, Ghana",
      phone: "+233 55 166 0943",
      whatsapp: "+233 54 148 3758",
      email: "debaldietcommodities@gmail.com",
      schedule: "Mon – Sat: 8:00 AM – 5:30 PM | Sunday: Closed"
    },
    form: {
      title: "Send Us a Direct Message",
      subText: "Select your area of interest and our team will get in touch within 24 business hours.",
      servicesOptions: [
        "Vehicle 70/30 Importation (New & Low-Mileage Slightly Used)",
        "Buy N Spec Dealership & Customization Request",
        "Hair & Beauty Supplies / Wholesale",
        "Agricultural Produce & Grain Procurement",
        "Bank & Institutional Asset Partnership"
      ]
    }
  },

  buyAndSpec: {
    hero: {
      tagline: "BUY N SPEC • BESPOKE AUTOMOTIVE DEALERSHIP & CUSTOMIZATION",
      headline: "Buy N Spec",
      subHeadline: "Purchase Direct from China, Tailor Every Detail to Your Exact Taste Before Shipment.",
      intro: "Why settle for standard showroom trim? With DeBaldiet Commodities' Buy N Spec service, you choose your desired Chinese SUV—brand new or certified low-mileage slightly used—and customize interior luxury, exterior aesthetics, infotainment, and Africa-ready mechanical upgrades directly at source before ocean freight."
    },
    packages: [
      {
        id: 'interior',
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
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Spec Selection',
        desc: 'Pick your vehicle make and build your custom specification sheet from our interior, tech, and styling options.'
      },
      {
        step: 2,
        title: 'Factory & Hub Execution in China',
        desc: 'Our certified partner technicians in China execute upgrades using genuine OEM parts and precision fitment.'
      },
      {
        step: 3,
        title: 'Dual Inspection & Quality Sign-Off',
        desc: 'You receive high-resolution photo/video walk-throughs and diagnostic reports verifying every modification.'
      },
      {
        step: 4,
        title: 'Shipping, Clearance & Handover',
        desc: 'Shipped to Tema Port, cleared smoothly, and delivered to your doorstep in Accra or across Ghana & Africa.'
      }
    ]
  },

  team: [
    {
      name: "Joshua King Kotey",
      role: 'Managing Director',
      badge: 'EXECUTIVE LEADERSHIP',
      image: '/team-1.jpg',
      bio: 'Directing multi-sector trade strategy, international supplier vetting, and institutional bank financing partnerships across Ghana and Africa.'
    },
    {
      name: 'Michael Addo',
      role: 'Head of Automotive & China Sourcing',
      badge: 'AUTOMOTIVE LOGISTICS',
      image: '/team-2.jpg',
      bio: 'Supervising direct factory procurement in China, dual-stage technical inspections, and ocean freight logistics.'
    },
    {
      name: 'Sarah Mensah',
      role: 'Director of Beauty & Cosmetics',
      badge: 'BEAUTY SUPPLY',
      image: '/team-3.jpg',
      bio: 'Curating 100% virgin human hair extensions, lace frontals, and managing wholesale salon supply distribution across Ghana.'
    },
    {
      name: 'Kofi Osei',
      role: 'Agri-Commodity Trade Manager',
      badge: 'AGRICULTURE',
      image: '/team-4.jpg',
      bio: 'Leading farm-gate aggregation, grain quality screening, and commercial bulk supply contracts for processors.'
    }
  ],

  showcases: {
    cars: {
      headline: "Chinese SUV & Vehicle Showcase",
      tagline: "DIRECT FROM FACTORY & HUBS IN CHINA • BRAND NEW & LOW-MILEAGE",
      subHeadline: "Explore top-tier Chinese SUVs available for immediate China-to-Accra procurement. Backed by our 70/30 financing plan, dual pre-export inspections, and optional Buy N Spec bespoke customizations.",
      items: [
        {
          id: "byd-song-plus",
          name: "BYD Song Plus (EV & DM-i Hybrid)",
          brand: "BYD",
          category: "New Energy SUV",
          condition: "Brand New & Certified Low-Mileage",
          price: "$24,800 – $28,900",
          deposit70: "$17,360",
          balance30: "$7,440",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 12,500 km",
          transmission: "E-CVT Automatic",
          powertrain: "1.5L DM-i Super Hybrid / Pure EV",
          range: "Up to 1,200 km combined",
          image: "/chinese-suv-byd.jpg",
          badge: "FLAGSHIP HYBRID",
          specsOverview: "Blade Battery • 15.6\" Rotatable DiLink Screen • Panoramic Sunroof • PM2.5 Air Purifier",
          details: [
            "Ultra-safe BYD Blade Battery chemistry with zero thermal runaway risk",
            "Level-2 driving assist with 360-degree high-definition surround cameras",
            "Heated & ventilated electric front seats with wireless smartphone charging",
            "Eligible for Buy N Spec English UI localization & custom Nappa interior"
          ]
        },
        {
          id: "geely-monjaro",
          name: "Geely Monjaro (Xingyue L)",
          brand: "Geely",
          category: "Executive Luxury SUV",
          condition: "Brand New & Certified Low-Mileage",
          price: "$27,500 – $32,000",
          deposit70: "$19,250",
          balance30: "$8,250",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 10,000 km",
          transmission: "Aisin 8-Speed Automatic",
          powertrain: "2.0TD Turbocharged (238 HP)",
          range: "BorgWarner 6th-Gen 4WD",
          image: "/chinese-suv-geely.jpg",
          badge: "EXECUTIVE PICK",
          specsOverview: "Volvo CMA Platform • Triple 12.3\" Cinema Screens • Bose Audio • Matrix LED",
          details: [
            "Co-developed with Volvo engineering for maximum crash & chassis safety",
            "Triple-screen front dashboard spanning over 1 meter with 4K clarity",
            "10-speaker Bose surround sound system with active noise cancellation",
            "Available with Buy N Spec black-edition aero styling & forged wheels"
          ]
        },
        {
          id: "haval-h6-gt",
          name: "Haval H6 GT (Coupe & Standard)",
          brand: "Haval / GWM",
          category: "Sport Performance SUV",
          condition: "Brand New & Certified Low-Mileage",
          price: "$22,900 – $26,500",
          deposit70: "$16,030",
          balance30: "$6,870",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 15,000 km",
          transmission: "7-Speed Wet Dual-Clutch",
          powertrain: "2.0T High-Output Turbo (211 HP)",
          range: "Intelligent All-Wheel Drive",
          image: "/chinese-suv-haval.jpg",
          badge: "BEST VALUE",
          specsOverview: "Coupe Styling • Dual Exhaust Sound • Heads-Up Display • 10.25\" Digital Cockpit",
          details: [
            "One of China's most proven and durable SUV platforms over 10 consecutive years",
            "Aggressive aerodynamic body styling with dual rear spoilers and Brembo-style calipers",
            "Full active safety suite including lane keep, emergency braking & blind-spot detection",
            "Customizable with Buy N Spec ceramic thermal tint & all-weather floor mats"
          ]
        },
        {
          id: "chery-tiggo-8-pro",
          name: "Chery Tiggo 8 Pro Max",
          brand: "Chery",
          category: "7-Seater Family & Executive",
          condition: "Brand New & Certified Low-Mileage",
          price: "$25,200 – $28,900",
          deposit70: "$17,640",
          balance30: "$7,560",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 9,800 km",
          transmission: "7-Speed Dual-Clutch (DCT)",
          powertrain: "2.0TGDI Turbo (254 HP / 390 Nm)",
          range: "Intelligent All-Wheel Drive (AWD)",
          image: "/chinese-suv-chery.jpg",
          badge: "7 SEATER",
          specsOverview: "3-Row Seating • Dual 12.3\" Curved Displays • Sony 8-Speaker Audio • Ambient Light",
          details: [
            "Spacious 7-seat configuration with fold-flat second and third rows for massive cargo",
            "Award-winning 2.0TGDI engine producing sports-car level 254 HP and 390 Nm torque",
            "Aircraft-style gear shifter with wireless dual 50W cooled phone charging pads",
            "Buy N Spec options: diamond-quilted leather re-trim and rear entertainment units"
          ]
        },
        {
          id: "tank-300",
          name: "GWM Tank 300 Off-Road 4x4",
          brand: "Tank / GWM",
          category: "Rugged Off-Road Luxury",
          condition: "Brand New & Certified Low-Mileage",
          price: "$34,500 – $39,800",
          deposit70: "$24,150",
          balance30: "$10,350",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 8,500 km",
          transmission: "ZF 8-Speed Automatic",
          powertrain: "2.0T Turbocharged Petrol (227 HP)",
          range: "Heavy-Duty Part-Time 4WD",
          image: "/chinese-suv-tank300.jpg",
          badge: "OFF-ROAD KING",
          specsOverview: "Ladder Frame Chassis • 3 Differential Locks • Tank Turn Mode • 700mm Wading",
          details: [
            "Iconic boxy retro design built on a rugged high-strength steel ladder frame",
            "Front, center, and rear mechanical differential locks with crawl control mode",
            "Aviation-inspired luxury interior with dual 12.3\" screens and analogue central clock",
            "Available with Buy N Spec heavy-duty all-terrain tire upgrade & roof overland gear"
          ]
        },
        {
          id: "liauto-l7",
          name: "Li Auto L7 / L8 Extended-Range SUV",
          brand: "Li Auto",
          category: "Ultra-Luxury Flagship SUV",
          condition: "Brand New & Certified Low-Mileage",
          price: "$43,500 – $48,000",
          deposit70: "$30,450",
          balance30: "$13,050",
          currency: "USD Landed Tema",
          year: "2024 / 2025",
          mileage: "0 – 14,000 km",
          transmission: "Dual-Motor Intelligent AWD",
          powertrain: "1.5T Range Extender + Dual Motors (449 HP)",
          range: "1,315 km CLTC Combined Range",
          image: "/chinese-suv-liauto.jpg",
          badge: "ULTRA LUXURY",
          specsOverview: "Magic Carpet Air Suspension • Dual 15.7\" 3K OLED Screens • 21-Speaker Dolby Atmos",
          details: [
            "Flagship executive SUV combining EV whisper-quiet driving with zero range anxiety",
            "Adaptive air suspension that automatically adjusts ground clearance based on road sensors",
            "Front passenger entertainment display and rear fold-down 3K theater screen",
            "Available with Buy N Spec stealth satin PPF wrap and executive seat customizations"
          ]
        }
      ]
    },

    hair: {
      headline: "Luxury Virgin Hair & Salon Showcase",
      tagline: "100% UNPROCESSED VIRGIN HUMAN HAIR • WHOLESALE & RETAIL",
      subHeadline: "Supplying individual clients and commercial salons across Ghana and Africa with single-donor virgin hair bundles, flawless HD lace wigs, transparent closures, and bulk salon cartons.",
      items: [
        {
          id: "cambodian-bone-straight",
          name: "Raw Cambodian Bone Straight Bundles (10A Grade)",
          category: "Raw Human Hair Bundles",
          price: "$135 – $240 / 3-Bundle Deal",
          localPrice: "From GH₵ 1,950 / Set",
          grade: "10A Raw Unprocessed Single Donor",
          origin: "Cambodian Temple Hair",
          lengths: "12\" – 32\" Available",
          color: "Natural 1B (Bleaches to #613)",
          texture: "Silky Bone Straight",
          image: "/feature-interior.jpg",
          badge: "BEST SELLER",
          specsOverview: "Single Donor • Cuticles Intact • Double Drawn • Zero Shedding • 3+ Years Lifespan",
          details: [
            "Collected from a single healthy young donor with intact, unidirectional cuticles",
            "Thick and full from root to tip without thin straggly ends (Double Drawn standard)",
            "Remains silky and bone straight even after washing; holds curls when heat-styled",
            "Tiered wholesale packages available for salons ordering 10 bundles or more"
          ]
        },
        {
          id: "hd-13x6-frontal-wig",
          name: "HD Transparent 13x6 Lace Frontal Wig (Bone Straight)",
          category: "HD Lace Frontal Wigs",
          price: "$195 – $320 / Unit",
          localPrice: "From GH₵ 2,800 / Unit",
          grade: "100% Virgin Human Hair (200% Density)",
          origin: "Raw Cuticle-Aligned Virgin Hair",
          lengths: "16\" – 34\" Available",
          color: "Natural Black #1B",
          texture: "Precision Pressed Straight",
          image: "/home-hero-bg-alt.jpg",
          badge: "HD MELT LACE",
          specsOverview: "13x6 Deep Parting • Invisible Swiss HD Lace • Pre-Plucked • Bleached Knots",
          details: [
            "Ultra-thin Swiss HD lace that melts seamlessly into all skin tones upon application",
            "Deep 6-inch parting space allows side parts, middle parts, and half-up styles",
            "Pre-plucked natural graduated hairline with delicate baby hairs for instant wear",
            "Constructed on breathable, adjustable cap with security combs and elastic band"
          ]
        },
        {
          id: "burmese-curly-bundles",
          name: "Burmese Curly Virgin Hair Bundles (Raw Collection)",
          category: "Curly & Textured Hair",
          price: "$145 – $260 / 3-Bundle Deal",
          localPrice: "From GH₵ 2,100 / Set",
          grade: "100% Raw Burmese Hair",
          origin: "Burma Single Donor",
          lengths: "14\" – 30\" Available",
          color: "Natural Deep Brown / Black",
          texture: "High-Luster Exotic Curly",
          image: "/news-2.jpg",
          badge: "RAW CURLS",
          specsOverview: "Steam Textured • Never Chemically Treated • Voluminous • Holds Moisture",
          details: [
            "Naturally coarse and bouncy curls that mimic full-bodied African hair textures",
            "Retains deep curl pattern after shampooing; defines beautifully with leave-in conditioner",
            "Can be safely colored, heat-styled straight, and reverts back to curls when wet",
            "Popular choice for protective weaves, custom wigs, and high-volume sew-ins"
          ]
        },
        {
          id: "brazilian-body-wave",
          name: "100% Brazilian Body Wave Luxury Bundle Deal",
          category: "Body Wave Bundles",
          price: "$120 – $210 / 3-Bundle Deal",
          localPrice: "From GH₵ 1,750 / Set",
          grade: "Grade 10A Virgin Weave",
          origin: "Brazilian Cuticle Aligned",
          lengths: "12\" – 30\" Available",
          color: "Natural 1B",
          texture: "Classic S-Pattern Body Wave",
          image: "/project-2.jpg",
          badge: "TOP VALUE",
          specsOverview: "Soft Waves • High Bounce & Luster • Full Weight 100g ± 5g Per Bundle",
          details: [
            "The timeless classic everyday wave with effortless bounce and natural shine",
            "Double machine weft reinforced with glue tracking to eliminate shedding entirely",
            "Bleaches to honey blonde (#27) or platinum (#613) without brittleness",
            "Wholesale salon pricing available with scheduled delivery across Accra and Kumasi"
          ]
        },
        {
          id: "glueless-5x5-bob",
          name: "Glueless Ready-To-Wear 5x5 Closure Bob Unit",
          category: "Glueless Units",
          price: "$110 – $155 / Unit",
          localPrice: "From GH₵ 1,600 / Unit",
          grade: "Virgin Human Hair (180% Density)",
          origin: "Vietnamese Virgin Hair",
          lengths: "10\" – 14\" Precision Cut",
          color: "Jet Black #1 / Natural #1B",
          texture: "Blunt Cut Sleek Bob",
          image: "/news-1.jpg",
          badge: "GLUELESS WEAR",
          specsOverview: "5x5 HD Closure • Zero Glue Required • 30-Second Install • Adjustable Band",
          details: [
            "Ready to wear straight out of the box with zero glue, tape, or salon appointment needed",
            "Expertly blunt-cut bob that holds its crisp silhouette without flyaways",
            "Built-in elastic band and anti-slip silicone interior for secure all-day wear",
            "Perfect for busy professional women, travel, and protective daily styling"
          ]
        },
        {
          id: "wholesale-salon-master-carton",
          name: "Commercial Salon Wholesale Master Pack (50 Bundles Mixed)",
          category: "Wholesale Salon Carton",
          price: "$1,750 / Master Carton",
          localPrice: "GH₵ 25,500 / Carton",
          grade: "Grade 10A / Raw Cambodian Mixed",
          origin: "Direct China/Cambodia Import",
          lengths: "Mixed Assortment: 14\" (10), 18\" (15), 22\" (15), 26\" (10)",
          color: "Natural Black #1B",
          texture: "Assorted (Bone Straight & Body Wave)",
          image: "/project-5.jpg",
          badge: "WHOLESALE ONLY",
          specsOverview: "50 Certified Bundles • Bulk MOQ • High Profit Margins for Salons • Fast Handover",
          details: [
            "Tailored specifically for beauty salon owners, stylists, and hair entrepreneurs",
            "Eliminates retail middlemen markup, boosting salon gross margins by 45%–60%",
            "Guaranteed uniform quality across every bundle with inspection certification",
            "Regular bi-weekly restock delivery schedules available across Ghana"
          ]
        }
      ]
    },

    agriculture: {
      headline: "Agricultural Commodities Showcase",
      tagline: "COMMERCIAL STAPLE GRAINS & CASH CROPS • DIRECT FARM-GATE SUPPLY",
      subHeadline: "Bridging agrarian cooperatives and commercial grain hubs across Ghana with wholesale buyers, industrial food processors, poultry feed millers, and institutional export markets.",
      items: [
        {
          id: "yellow-white-maize",
          name: "Commercial Grade-1 Yellow & White Maize",
          category: "Grains & Cereals",
          price: "$310 – $340 / Metric Ton",
          localPrice: "GH₵ 340 / 50kg Sack",
          origin: "Bono, Ahafo & Northern Regions, Ghana",
          moisture: "< 12.5% Certified Dry",
          purity: "98.5% Machine Cleaned",
          packaging: "50kg & 100kg Polypropylene Sacks",
          moq: "10 Metric Tons (Commercial Order)",
          image: "/feature-product.jpg",
          badge: "HIGH DEMAND",
          specsOverview: "Dual Cleaned • Weevil Free • Aflatoxin Tested • Direct Warehouse Delivery",
          details: [
            "High-energy starch content tailored for poultry and livestock feed formulations",
            "Rigorous moisture testing (<12.5%) guarantees long storage life without spoilage",
            "Free from stones, foreign matter, and broken kernels via mechanical screening",
            "Flexible bulk supply contracts with milestone delivery to Tema or buyer depots"
          ]
        },
        {
          id: "long-grain-rice",
          name: "Long Grain Parboiled & Fragrant White Rice",
          category: "Grains & Cereals",
          price: "$580 – $640 / Metric Ton",
          localPrice: "GH₵ 490 / 50kg Sack",
          origin: "Volta Basin & Imported Benchmark Stock",
          moisture: "< 13.0%",
          purity: "99.0% Sorted & Polished",
          packaging: "25kg & 50kg Branded Moisture-Proof Bags",
          moq: "5 Metric Tons",
          image: "/project-3.jpg",
          badge: "STAPLE CROP",
          specsOverview: "5% Broken Maximum • Double Polished • Non-Sticky Grain • High Yield",
          details: [
            "Premium long-grain varieties that cook fluffy, separate cleanly, and taste delicious",
            "Double-sorted through color-sorting cameras to remove discolored or chalky grains",
            "Supplied directly to institutional kitchens, supermarkets, and wholesale distributors",
            "Bulk containerized transport available with full GRA and food standards clearance"
          ]
        },
        {
          id: "high-protein-soybeans",
          name: "High-Protein Commercial Soybeans",
          category: "Oilseeds & Legumes",
          price: "$460 – $510 / Metric Ton",
          localPrice: "GH₵ 520 / 50kg Sack",
          origin: "Northern & Upper East Agrarian Hubs",
          moisture: "< 11.0%",
          purity: "98.0% Mechanically Sifted",
          packaging: "50kg Heavy-Duty Jute / PP Bags",
          moq: "10 Metric Tons",
          image: "/project-4.jpg",
          badge: "HIGH PROTEIN",
          specsOverview: "Crude Protein > 38% • Oil Content 18%–20% • Non-GMO Verified",
          details: [
            "Essential raw ingredient for edible oil extraction and high-protein poultry meal cake",
            "Farm-gate aggregation directly from vetted smallholder farmer cooperatives",
            "Consistently exceeds 38% crude protein levels based on laboratory assay tests",
            "Prompt dispatch from regional aggregation depots to industrial processing mills"
          ]
        },
        {
          id: "commercial-sorghum",
          name: "Industrial White & Red Sorghum Grains",
          category: "Grains & Cereals",
          price: "$340 – $380 / Metric Ton",
          localPrice: "GH₵ 380 / 50kg Sack",
          origin: "Upper West & Savannah Regions",
          moisture: "< 12.0%",
          purity: "98.0%",
          packaging: "50kg Double-Stitched Sacks",
          moq: "10 Metric Tons",
          image: "/project-1.jpg",
          badge: "BREWERY GRADE",
          specsOverview: "Brewery Quality • High Germination Rate • Cleaned & Graded • Low Tannin",
          details: [
            "Specially screened for regional commercial beverage breweries and porridge processors",
            "Drought-resistant climate crop aggregated with full traceability to farm clusters",
            "Low tannin levels and high fermentable sugar content for maximum brewery yields",
            "Year-round supply assurance through structured buffer warehouse storage"
          ]
        },
        {
          id: "raw-cashew-nuts",
          name: "Raw Dried Cashew Nuts (RCN - Grade A)",
          category: "Export Cash Crops",
          price: "$1,150 – $1,280 / Metric Ton",
          localPrice: "Inquire for Daily Farm-Gate Spot",
          origin: "Bono Region & West African Cashew Belt",
          moisture: "8.0% – 9.0% Sun-Dried",
          purity: "Outturn (KOR): 48 – 50 lbs",
          packaging: "80kg Natural Jute Bags",
          moq: "15 Metric Tons (1 Container)",
          image: "/feature-graphic.jpg",
          badge: "EXPORT GRADE",
          specsOverview: "KOR 48–50 lbs • Nut Count 180–200/kg • Certified Sun-Dried • Ocean Freight Ready",
          details: [
            "Premium grade raw cashew nuts sorted for high kernel output and minimal defect rates",
            "Properly sun-dried on clean concrete drying beds to reach optimal 8% moisture",
            "Independently inspected by international surveying agencies (SGS / Bureau Veritas)",
            "Containerized stuffing and customs export documentation handled end-to-end"
          ]
        },
        {
          id: "shea-butter-natural",
          name: "100% Pure Organic Unrefined Shea Butter",
          category: "Cosmetic & Food Oils",
          price: "$1,850 – $2,100 / Metric Ton",
          localPrice: "From GH₵ 650 / 25kg Tub",
          origin: "Northern Ghana Women's Cooperatives",
          moisture: "< 0.5%",
          purity: "100% Natural Grade-A Unrefined",
          packaging: "25kg Food-Grade Waxed Boxes / Steel Drums",
          moq: "1 Metric Ton",
          image: "/home-accordion-img.jpg",
          badge: "ORGANIC RAW",
          specsOverview: "Creamy Ivory Hue • Mild Nutty Aroma • Zero Hexane / Chemicals • Fair Trade",
          details: [
            "Traditionally handcrafted by experienced women’s cooperatives in Northern Ghana",
            "Retains all natural vitamins A, E, and F for deep cosmetic skin & hair moisturization",
            "Extensively supplied to international skincare brands, cosmetics labs, and soaps",
            "Certified organic, fair-trade compliant, and laboratory tested for purity"
          ]
        }
      ]
    }
  },

  footer: {
    col1: {
      title: "ABOUT DEBALDIET",
      text: "DeBaldiet Commodities (DC) is an Accra-based trade and logistics firm managing Buy N Spec China SUV & vehicle imports (new & low-mileage used), custom styling, luxury beauty distribution, and bulk agro-commodities across Ghana and Africa."
    },
    col2: {
      title: "CORE VERTICALS",
      links: [
        { label: "Showcase: Chinese SUVs & Cars", href: "/showcases/cars" },
        { label: "Showcase: Luxury Virgin Hair", href: "/showcases/hair" },
        { label: "Showcase: Agricultural Produce", href: "/showcases/agriculture" },
        { label: "China SUV Importation (New & Used)", href: "/our-services#car-import" },
        { label: "Buy N Spec Dealership & Customization", href: "/buy-and-spec" },
        { label: "70/30 Flexible Auto Plan", href: "/our-services#car-import" },
        { label: "Virgin Human Hair & Wigs", href: "/our-services#beauty" },
        { label: "Salon Beauty Wholesale", href: "/our-services#beauty" },
        { label: "Bulk Food Grains & Crops", href: "/our-services#agriculture" },
        { label: "Institutional Bank Partnerships", href: "/partnerships" }
      ]
    },
    col3: {
      title: "NEWSLETTER SIGNUP",
      text: "Subscribe to receive updates on incoming car shipments, beauty stock, and grain prices."
    },
    copyright: "© 2026 DeBaldiet Commodities (DC). All Rights Reserved. Accra, Ghana."
  }
};
