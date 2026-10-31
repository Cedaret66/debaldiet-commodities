export const siteData = {
  company: {
    name: "DeBaldiet Commodities (DC)",
    shortName: "DeBaldiet Commodities",
    abbreviation: "DC",
    tagline: "Bridging Global Sourcing with Reliable Local Execution Across Ghana and Africa",
    managingDirector: "Joshua King Kotey",
    headquarters: "Accra, Ghana",
    address: "Accra, Ghana",
    phoneHotline: "+233 55 166 0943",
    whatsapp: "+234 54 148 3758",
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
    whatsapp: "+234 54 148 3758",
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
          label: "Automotive Sourcing",
          href: "/our-services#car-import",
          desc: "Direct China vehicle importation (Brand New & Low-Mileage Slightly Used)"
        },
        {
          label: "Buy & Spec Service",
          href: "/buy-and-spec",
          desc: "Custom vehicle styling, trim upgrades, tech & spec modifications",
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
    { label: "Buy & Spec", href: "/buy-and-spec" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact Us", href: "/contact-us" }
  ],

  slides: [
    {
      id: 1,
      pillar: "Automotive Sourcing",
      bgImage: "/chinese-suv-byd.jpg",
      overline: "DIRECT CHINESE SUV & VEHICLE IMPORTATION • CHINA TO ACCRA",
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
      vertical: "Pillar 01: Automotive",
      badge: "CARS",
      title: "Chinese SUV Sourcing & Importation (New & Low-Mileage Slightly Used)",
      summary: "Turnkey procurement of top Chinese SUVs (BYD, Haval, Geely, Chery, Tank). We handle factory vetting, ocean freight, Tema port customs clearance, and our custom Buy & Spec service.",
      highlights: [
        "Brand New & Low-Mileage Slightly Used",
        "70/30 flexible payment plan",
        "Custom vehicle Buy & Spec modifications",
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
    tagline: "70/30 SPLIT FINANCING FOR NEW & LOW-MILEAGE VEHICLES",
    headline: "Don't Have the Full Amount Upfront? Our 70/30 Plan Closes the Gap.",
    intro: "Many buyers want a quality Chinese SUV or vehicle—brand new or certified low-mileage slightly used—but do not have 100% of the capital ready today. We co-invest with you to acquire your car from China, execute optional Buy & Spec styling, ship it, clear it, and deliver it before you pay the remaining balance.",
    steps: [
      {
        step: 1,
        title: "70% Upfront Deposit",
        desc: "Select your desired Chinese SUV or vehicle (New or Low-Mileage slightly used). You pay 70% of the vehicle cost into our secured account."
      },
      {
        step: 2,
        title: "DC Tops Up 30% & Specs",
        desc: "DeBaldiet Commodities covers the remaining 30%, completes the purchase in China immediately, and initiates any requested Buy & Spec custom packages."
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
      "DeBaldiet Commodities disrupts this broken model by taking direct responsibility for the entire journey. We are not brokers who vanish when problems arise; we are your direct, accountable trading partner. By managing international sourcing directly at factory floors and verified vehicle hubs in China, coordinating secure maritime shipping, executing bespoke Buy & Spec customizations, and personally supervising customs clearance, we ensure our clients receive exactly what they paid for—at fair, transparent costs.",
      "Today, DC operates across vital commercial sectors serving clients across Ghana and Africa: delivering brand-new and certified low-mileage slightly used Chinese SUVs and commercial vehicles, offering custom Buy & Spec vehicle styling, distributing luxury hair and beauty supplies, and powering commercial agricultural commodity trade."
    ],
    vision: {
      title: "To Be Africa's Benchmark in Accountable Trade",
      desc: "To establish DeBaldiet Commodities as Africa’s most trusted multi-sector trading partner, recognized for eliminating trade opacity and creating financial and operational flexibility for everyday consumers and institutions across the continent."
    },
    mission: {
      title: "Accessible Quality & Total Transparency Across Africa",
      desc: "To deliver verified, high-value vehicles (new and certified low-mileage), custom vehicle speccing, authentic beauty products, and vital food commodities through transparent pricing, rigorous dual-stage inspections, and customer-first terms across Ghana and Africa."
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
        meaning: "We bridge procurement hurdles for our clients through structured terms like our 70/30 plan, custom Buy & Spec vehicle personalization, and responsive aftercare."
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
    }
  },

  services: {
    automotive: {
      vertical: "Vertical 01",
      badge: "AUTOMOTIVE SOURCING & SUVS",
      headline: "Direct Chinese SUV & Vehicle Importation (Brand New & Low-Mileage Slightly Used)",
      overview: "Local dealership prices often carry 40%–60% markups. DeBaldiet Commodities specializes in world-class Chinese SUVs and vehicles—including BYD, Haval, Geely, Chery, Tank, and Li Auto. We source both factory-fresh brand new vehicles and certified slightly used vehicles with verified low mileage, pristine interior/mechanical condition, and comprehensive pre-export inspection reports.",
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
          stage: "3. Optional 'Buy & Spec' Customization",
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
      wholesale: "We supply salon owners and beauty entrepreneurs with tiered wholesale pricing, enabling them to stock high-margin products with low minimum order quantities (MOQs) and guaranteed re-stock schedules."
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
      qualityAssurance: "All batches are screened for moisture content, foreign matter, and pest resistance before warehousing or transit, ensuring food commodities arrive in prime condition."
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
      whatsapp: "+234 54 148 3758",
      email: "debaldietcommodities@gmail.com",
      schedule: "Mon – Sat: 8:00 AM – 5:30 PM | Sunday: Closed"
    },
    form: {
      title: "Send Us a Direct Message",
      subText: "Select your area of interest and our team will get in touch within 24 business hours.",
      servicesOptions: [
        "Vehicle 70/30 Importation (New & Low-Mileage Slightly Used)",
        "Buy & Spec Customization Request",
        "Hair & Beauty Supplies / Wholesale",
        "Agricultural Produce & Grain Procurement",
        "Bank & Institutional Asset Partnership"
      ]
    }
  },

  footer: {
    col1: {
      title: "ABOUT DEBALDIET",
      text: "DeBaldiet Commodities (DC) is an Accra-based trade and logistics firm managing China SUV & vehicle imports (new & low-mileage used), custom Buy & Spec services, luxury beauty distribution, and bulk agro-commodities across Ghana and Africa."
    },
    col2: {
      title: "CORE VERTICALS",
      links: [
        { label: "China SUV Importation (New & Used)", href: "/our-services#car-import" },
        { label: "Buy & Spec Vehicle Customization", href: "/buy-and-spec" },
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
