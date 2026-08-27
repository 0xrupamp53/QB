export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  status: "live" | "development";
  bucket: "Software" | "Hardware";
  blurb: string;
  image: string;
};

export type Chapter = { id: string; label: string; items: CaseStudy[] };

const IK = "https://ik.imagekit.io";

export const chapters: Chapter[] = [
  {
    id: "01",
    label: "Logistics",
    items: [
      {
        slug: "fleet-management",
        title: "Fleet Management Platform",
        client: "World's largest logistics company (undisclosed under NDA)",
        tags: ["LOGISTICS"],
        status: "live",
        bucket: "Software",
        blurb:
          "Real-time fleet tracking and dispatching platform with full visibility over every vehicle, driver, and route.",
        image: `${IK}/1gbzepcoc/fleet-management`,
      },
      {
        slug: "tms",
        title: "Transport Management Platform",
        client: "Global freight operator (undisclosed under NDA)",
        tags: ["TRANSPORT", "TMS", "CONTROL TOWER"],
        status: "live",
        bucket: "Software",
        blurb:
          "Unified vendor tracking Control Tower: fuses truck GPS, driver SIM, and e-lock signals with discrepancy detection and AI trip insights.",
        image: `${IK}/poscnrrht/tms`,
      },
      {
        slug: "charge-pulse",
        title: "EV Charging Network",
        client: "Leading EV charging network (undisclosed under NDA)",
        tags: ["EV", "LOGISTICS"],
        status: "live",
        bucket: "Software",
        blurb:
          "Real-time EV charging station finder with GPS navigation, live availability, and traffic-aware routing.",
        image: `${IK}/1gbzepcoc/Screenshot%202026-01-24%20at%201.38.05%E2%80%AFPM.png`,
      },
      {
        slug: "food-ordering-platform",
        title: "Events Operations Platform",
        client: "Hospitality operations group",
        tags: ["EVENTS & OPERATIONS"],
        status: "live",
        bucket: "Software",
        blurb:
          "Unified events operations platform: vendor management, order tracking, payments, automated settlements.",
        image: `${IK}/1gbzepcoc/Screenshot%202026-01-24%20at%201.38.28%E2%80%AFPM.png`,
      },
      {
        slug: "geolink",
        title: "Location Intelligence Platform",
        client: "Aerospace inspection firm",
        tags: ["INFRASTRUCTURE INTELLIGENCE", "SAAS"],
        status: "live",
        bucket: "Software",
        blurb:
          "Drone and ground-robot inspection intelligence delivered as GPS-mapped reports within two hours.",
        image: `${IK}/poscnrrht/geolink-screenshot.png`,
      },
    ],
  },
  {
    id: "02",
    label: "Manufacturing",
    items: [
      {
        slug: "ppc-platform",
        title: "Production Planning Platform",
        client: "Multi-plant apparel manufacturer",
        tags: ["MANUFACTURING", "PRODUCTION PLANNING"],
        status: "development",
        bucket: "Software",
        blurb:
          "AI-enabled production planning and control: centralised planning, capacity optimisation, and live shop-floor visibility.",
        image: `${IK}/poscnrrht/jgppc-screenshot.png`,
      },
      {
        slug: "factory-os",
        title: "Factory OS",
        client: "Tier-1 sportswear supplier",
        tags: ["MANUFACTURING", "FULL-STACK"],
        status: "live",
        bucket: "Software",
        blurb:
          "Replaces spreadsheet tracking with automated backward milestone planning, SOP gate enforcement, capacity simulation, and real-time visibility across 295+ orders.",
        image: `${IK}/1gbzepcoc/factory-os-screenshot.png`,
      },
      {
        slug: "crm-erp",
        title: "CRM + ERP Suite",
        client: "Metal fabrication group, GCC & Europe",
        tags: ["METAL MANUFACTURING", "CRM + ERP"],
        status: "live",
        bucket: "Software",
        blurb:
          "Lead-to-delivery operating system for a metal fabrication business, multi-currency, role-scoped access.",
        image: `${IK}/poscnrrht/tbk-screenshot.png`,
      },
      {
        slug: "business-brain",
        title: "Business Intelligence Graph",
        client: "Steel manufacturing owner-operator",
        tags: ["MANUFACTURING", "KNOWLEDGE GRAPH"],
        status: "live",
        bucket: "Software",
        blurb:
          "On-premise manufacturing intelligence: spreadsheets converted into a knowledge graph and surprising insights.",
        image: `${IK}/poscnrrht/businessbrain-screenshot.png`,
      },
      {
        slug: "ppc-sap",
        title: "PPC with ERP Integration",
        client: "Apparel manufacturing group",
        tags: ["MANUFACTURING", "PPC"],
        status: "development",
        bucket: "Software",
        blurb:
          "Production planning and control with ERP integration, multi-site job and batch backbone, finite capacity planning, Gantt, DPR, and a mobile QC app.",
        image: `${IK}/poscnrrht/sunlord-ppc-screenshot.png`,
      },
      {
        slug: "castvision",
        title: "CastVision",
        client: "Automotive castings manufacturer",
        tags: ["CV", "MANUFACTURING", "HW & IOT"],
        status: "live",
        bucket: "Hardware",
        blurb:
          "Automated quality inspection using X-ray imaging and deep learning to detect internal flaws in aluminium castings in real time on the production line.",
        image: `${IK}/l4vexoolp/Gemini_Generated_Image_ajnyogajnyogajny.png?updatedAt=1774358086305`,
      },
      {
        slug: "panelvision",
        title: "PanelVision",
        client: "Global appliance manufacturer",
        tags: ["CV", "QA", "HW & IOT"],
        status: "live",
        bucket: "Hardware",
        blurb:
          "Automated visual inspection for appliance control panels, comparing production units against a reference template in real time.",
        image: `${IK}/l4vexoolp/Gemini_Generated_Image_scwp5dscwp5dscwp.png`,
      },
    ],
  },
  {
    id: "03",
    label: "Defense",
    items: [
      {
        slug: "data-nexus",
        title: "Data Nexus",
        client: "Classified",
        tags: ["DATA INTELLIGENCE", "DEFENCE"],
        status: "development",
        bucket: "Software",
        blurb:
          "Six-layer intelligence platform that turns messy data into actionable entity networks across formats, languages, and classification levels.",
        image: `${IK}/poscnrrht/datanexus-screenshot.png`,
      },
      {
        slug: "sentinel",
        title: "SENTINEL",
        client: "Classified",
        tags: ["COUNTER-UAS", "ON-DEVICE ML", "RESEARCH"],
        status: "live",
        bucket: "Hardware",
        blurb:
          "Multi-sensor on-device counter-UAS system with custom-trained visual and acoustic deep learning models. Runs entirely on a smartphone with zero network dependency.",
        image: `${IK}/1gbzepcoc/vajra-screenshot.png`,
      },
      {
        slug: "aegis",
        title: "AEGIS",
        client: "Classified",
        tags: ["TACTICAL AI", "ON-DEVICE ML", "RESEARCH"],
        status: "live",
        bucket: "Software",
        blurb:
          "On-device tactical intelligence with natural-language C2, real-time ISR, automated reporting, and threat-aware patrol optimisation. Zero network dependency.",
        image: `${IK}/poscnrrht/kavach-screenshot.jpeg`,
      },
      {
        slug: "mariner",
        title: "MARINER",
        client: "Classified",
        tags: ["NAVAL AI", "ON-DEVICE ML", "MARITIME"],
        status: "live",
        bucket: "Software",
        blurb:
          "Maritime C2 mobile application with on-device AI, real-time data fusion, and offline-capable tactical intelligence. Zero cloud dependency.",
        image: `${IK}/1gbzepcoc/sagar-screenshot.png`,
      },
    ],
  },
  {
    id: "04",
    label: "Real Estate",
    items: [
      {
        slug: "boq-platform",
        title: "BOQ Estimation Platform",
        client: "Renewable energy EPC contractor",
        tags: ["DATA CENTER", "BOQ AUTOMATION", "AI ESTIMATION"],
        status: "development",
        bucket: "Software",
        blurb:
          "Estimation engine for data center tenders. Turns drawings and 3D/BIM models into BOQs, applies engineering thumb rules, enriches with historical pricing, human sign-off throughout.",
        image: `${IK}/poscnrrht/Screenshot%202026-07-12%20at%2021.24.36.png`,
      },
      {
        slug: "lease-management",
        title: "Lease Management Platform",
        client: "Multi-brand retail operator",
        tags: ["REAL ESTATE", "AI EXTRACTION", "LEASE MANAGEMENT"],
        status: "live",
        bucket: "Software",
        blurb:
          "Commercial real estate lease management: automated lease data extraction from PDFs, obligation tracking, payment management, risk analysis, and portfolio intelligence.",
        image: `${IK}/1gbzepcoc/grospace-screenshot.png`,
      },
      {
        slug: "real-estate-fund",
        title: "Real Estate Fund OS",
        client: "Private real estate fund",
        tags: ["REAL ESTATE AI", "ML", "MULTI-AGENT"],
        status: "live",
        bucket: "Software",
        blurb:
          "Deal sourcing across distressed assets, short sales, and land for data centers, solar farms, and wind farms. Agents handle scouting, underwriting, outreach, and deal structuring.",
        image: `${IK}/1gbzepcoc/distresseddeals-screenshot.png`,
      },
      {
        slug: "developer-mis",
        title: "Developer MIS",
        client: "Residential developer group",
        tags: ["REAL ESTATE", "MIS", "DEVELOPER OPS"],
        status: "live",
        bucket: "Software",
        blurb:
          "Unified MIS for property developers: sales, collections, construction progress, and enterprise value in a single command centre.",
        image: `${IK}/poscnrrht/reos-screenshot.png`,
      },
    ],
  },
  {
    id: "05",
    label: "Agency & SaaS",
    items: [
      {
        slug: "agency-os",
        title: "Agency OS",
        client: "Digital agency network",
        tags: ["AD TECH", "AGENCY SAAS"],
        status: "live",
        bucket: "Software",
        blurb:
          "One platform for digital agencies: campaigns, clients, reporting, and margin visibility in a single operating system.",
        image: `${IK}/poscnrrht/walnut-screenshot.png`,
      },
      {
        slug: "support-desk",
        title: "Support Desk Platform",
        client: "SaaS scale-up (undisclosed)",
        tags: ["SUPPORT", "SAAS", "AUTOMATION"],
        status: "live",
        bucket: "Software",
        blurb:
          "Omnichannel support desk with knowledge-base grounded assistants, escalation routing, and SLA analytics.",
        image: `${IK}/poscnrrht/sanad10-screenshot.png`,
      },
    ],
  },
];

export const allCases = chapters.flatMap((c) => c.items);
