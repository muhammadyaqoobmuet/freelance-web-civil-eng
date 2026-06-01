export interface Project {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  images: string[];
  subProjects?: { id: string; title: string; desc: string }[];
}

export const projects: Project[] = [
  {
    title: "10,000 sq.ft Luxury Residential Villa Project",
    slug: "luxury-villa-10000sqft",
    category: "Quantity Surveying",
    year: "2024",
    description: "Architectural planning and detailed estimation for a massive ground-floor luxury villa with six bedrooms.",
    longDescription: "This project is prepared for Quantity Surveying and Estimation of a 10,000 sq.ft ground-floor luxury residential villa. The work includes architectural planning, structural assumptions, quantity takeoff, rate analysis, bill of quantities, preliminary estimate, total project cost, and rate per square foot. The villa plan includes six bedrooms with attached bathrooms, drawing room, dining hall, family lounge, kitchen with pantry, study/home theater, servant room, store, car porch for four cars, front verandah, internal circulation, and landscaping margin.",
    tags: ["Luxury Villa", "QS", "Architectural Planning", "Estimation"],
    images: ["/projects/p1/image.png"]
  },
  {
    title: "5000 sq.ft QS Estimation Project",
    slug: "qs-estimation-5000sqft",
    category: "Quantity Surveying",
    year: "2024",
    description: "Detailed civil engineering estimation workflow for a 5000 sq.ft residential home.",
    longDescription: "This project is a detailed Quantity Surveying and Estimation project for a 5000 sq.ft ground-floor residential home with an adopted site size of 50 ft × 100 ft. The report follows a complete civil engineering estimation workflow, including drawings, quantity summary, rate analysis, bill of quantity, preliminary estimate, total cost, and rate per square foot. The project includes calculations for earthwork, RCC gate columns, RCC rectangular columns, brickwork in superstructure, RCC plinth beams, RCC roof beams, roof slab, DPC, plastering, flooring, electric work, timber work, water supply and sanitary work.",
    tags: ["QS", "Estimation", "Residential", "Civil Engineering"],
    images: ["/projects/p2/image.png"]
  },
  {
    title: "4216 sq.ft Building Project Report",
    slug: "building-project-4216sqft",
    category: "Quantity Surveying",
    year: "2024",
    description: "Professional blueprint-style QS and estimation project for a 4216 sq.ft residence.",
    longDescription: "This project is a civil engineering based Quantity Surveying and Estimation project prepared in a professional blueprint-style format. It preserves the project data, drawings, tables, calculations, rate analysis, bill of quantity, and square-foot rate working from the original project content. The report contains a complete sequence of quantity calculations, including calculation for rectangular columns, plinth beam, roof beam, slab, DPC, brick masonry, flooring, plastering, and summary of the project.",
    tags: ["Blueprint Style", "QS", "Project Report", "Structural"],
    images: ["/projects/p3/image.png"]
  },
  {
    title: "2000 sq.ft Residential Home Project",
    slug: "residential-home-2000sqft",
    category: "Quantity Surveying",
    year: "2023",
    description: "Quantity surveying and cost estimation for a 2000 sq.ft ground-floor home in Jamshoro.",
    longDescription: "This project is based on Quantity Surveying and Estimation for a 2000 sq.ft ground-floor residential home at Jamshoro, with an adopted site size of 40 ft × 50 ft. The project focuses on preparing quantity calculations and rate analysis for major civil engineering works used in residential construction. It includes drawings and details, earthwork calculation, RCC gate columns, RCC rectangular columns, brickwork in superstructure, RCC plinth beams, RCC roof beams, roof slab, DPC, plastering, flooring, bill of quantity, preliminary estimate, total project cost, and working out the rate per square foot.",
    tags: ["Residential", "QS", "Jamshoro", "Cost Analysis"],
    images: ["/projects/p4/image.png"]
  },
  {
    title: "1350sqft Residential Home Project",
    slug: "residential-home-1350sqft",
    category: "Quantity Surveying",
    year: "2023",
    description: "Conversion of civil engineering drawings into measurable quantities for a 1350 sq.ft home.",
    longDescription: "This project focuses on Quantity Surveying and Estimation for a residential building located in Jamshoro with a proposed area of 30 ft × 45 ft, equal to 1350 sq. ft. The project includes the estimation of quantities for a ground-floor residential structure consisting of bedrooms, bathrooms, kitchen, drawing room, car porch, lounge, and other essential spaces. It covers drawings, structural details, earthwork, RCC columns, plinth beams, roof beams, roof slab, DPC, brickwork, plastering, flooring, rate analysis, bill of quantity, preliminary estimate, total project cost, and rate per square foot.",
    tags: ["QS", "Estimation", "Residential", "Civil Engineering"],
    images: ["/projects/p5/image.png"]
  },
  {
    title: "Specifications and Bill of Quantities (BOQ) of BRI Infrastructure Project",
    slug: "boq-bri-infrastructure",
    category: "Infrastructure",
    year: "2024",
    description: "Technical specifications and BOQ for Bin Qasim Power Plant and Port under BRI.",
    longDescription: "This project covers the Specifications and Bill of Quantities (BOQ) for BRI infrastructure projects with focus on the Bin Qasim Power Plant and Port. It explains the general technical specifications of transportation, energy, and maritime development under BRI, including roads, rail networks, coal power plants, renewable projects, ports, terminals, and logistics zones. The project also provides technical details of the Bin Qasim Power Plant, such as supercritical boiler systems, imported coal fuel, seawater-based cooling, ESP and FGD emission control.",
    tags: ["BOQ", "Infrastructure", "Power Plant", "BRI"],
    images: ["/projects/p6/image.png"]
  },
  {
    title: "End User Satisfaction Assessment of (BRI)",
    slug: "bri-user-satisfaction-assessment",
    category: "Research",
    year: "2024",
    description: "Mixed-method research evaluating the sociotechnical impact of BRI projects on end-users.",
    longDescription: "This project examines end-user satisfaction regarding BRI-related projects, especially the Bin Qasim Power Plant. It evaluates how local communities, businesses, government officials, and civil society groups perceive the effects of BRI projects on infrastructure, employment, business growth, environment, transparency, and social integration. The assessment uses mixed-method research, including surveys and interviews, with respondents from countries such as Pakistan, Kenya, Sri Lanka, Ethiopia, Kazakhstan, and Serbia.",
    tags: ["User Satisfaction", "BRI", "Research", "Impact Analysis"],
    images: ["/projects/p7/image.png"]
  },
  {
    title: "PC-1 and PC-2 PERFORMA Feasibility Study",
    slug: "pc-performa-feasibility-study",
    category: "Feasibility / Govt",
    year: "2023",
    description: "Government planning documentation for a 1320 MW coal power plant at Bin Qasim.",
    longDescription: "This project is a PC-I, PC-II, and project report for the proposed development of a 1320 MW coal-fired power plant at Bin Qasim Industrial Zone, Karachi. It includes the project name, sponsoring agency, executing agency, objectives, benefits, technical details, capital cost estimates, financing mode, implementation schedule, sustainability measures, and monitoring framework. The project aims to increase power generation capacity, improve electricity supply, support industrial growth, create employment, and strengthen national energy security.",
    tags: ["PC-1", "PC-2", "Feasibility", "Power Plant"],
    images: ["/projects/p8/image.png"]
  },
  {
    title: "Belt and Road Initiative (BRI) Feasibility",
    slug: "bri-feasibility-study",
    category: "Research / Feasibility",
    year: "2023",
    description: "Strategic, economic, and environmental feasibility study of the BRI Bin Qasim Power Plant.",
    longDescription: "This project presents a feasibility study of the Belt and Road Initiative (BRI) with special focus on the Bin Qasim Power Plant under CPEC. It explains the importance of BRI as a global infrastructure development strategy and studies its impact through SWOT analysis, PESTLE analysis, Environmental Impact Assessment, and project feasibility components. The report evaluates the strategic, economic, technical, environmental, and social feasibility of the Bin Qasim Power Plant, including its capacity of 1320 MW.",
    tags: ["BRI", "CPEC", "Feasibility", "Economic Impact"],
    images: ["/projects/p9/image.png"]
  },
  {
    title: "COMPARATIVE STRUCTURAL PERFORMANCE EVALUATION IN TALL BUILDING",
    slug: "tall-building-structural-performance",
    category: "Structural Analysis",
    year: "2024",
    description: "Comparative study of lateral load-resisting systems in tall buildings using ETABS.",
    longDescription: "This project focuses on the comparative structural performance evaluation of different lateral load-resisting systems used in tall buildings. The study compares five major structural systems: shear wall system, core system, outrigger system, diagrid system, and hybrid structural system. The main purpose of this research is to identify the most efficient and suitable structural system for tall buildings by evaluating their behavior under gravity loads and lateral loads such as wind and earthquake forces. Tall buildings are highly affected by lateral forces, which may cause excessive displacement, storey drift, vibration, overturning moment, and instability.",
    tags: ["ETABS", "Structural Engineering", "Tall Buildings", "Seismic"],
    images: ["/projects/p10/image.png"]
  }
];
