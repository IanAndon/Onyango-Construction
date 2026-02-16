// Shared data for services, projects, and stats, easy to replace with an API later
import { images } from "./images";

export const services = [
  {
    id: "building-construction",
    title: "Building Construction",
    shortDesc: "Full-scale commercial and residential building projects from design to handover.",
    description: "We deliver end-to-end building construction for commercial, industrial, and residential clients. Our team manages everything from foundation to finishing, ensuring compliance with local codes and your specifications.",
    benefits: ["Design & build", "Quality materials", "On-time delivery", "Warranty support"],
    icon: "Building",
  },
  {
    id: "civil-works",
    title: "Civil Works",
    shortDesc: "Earthworks, drainage, and structural civil engineering solutions.",
    description: "Our civil works division handles earthworks, excavation, drainage systems, retaining structures, and site preparation. We work with engineers and surveyors to deliver robust, lasting solutions.",
    benefits: ["Site preparation", "Drainage & utilities", "Retaining structures", "Compliance"],
    icon: "Shovel",
  },
  {
    id: "road-infrastructure",
    title: "Road & Infrastructure",
    shortDesc: "Roads, bridges, and public infrastructure development.",
    description: "We undertake road construction, resurfacing, bridge works, and related infrastructure. From rural access roads to urban upgrades, we focus on durability and safety.",
    benefits: ["Road construction", "Resurfacing", "Drainage", "Safety standards"],
    icon: "Road",
  },
  {
    id: "renovation-maintenance",
    title: "Renovation & Maintenance",
    shortDesc: "Renovations, upgrades, and ongoing maintenance programs.",
    description: "We offer renovation, refurbishment, and planned maintenance for existing buildings and assets. Extend the life and value of your property with our experienced teams.",
    benefits: ["Renovation", "Facade & interiors", "Maintenance plans", "Quick turnaround"],
    icon: "Wrench",
  },
];

export const whyChooseUs = [
  {
    title: "Experience",
    description: "Years of proven delivery across residential, commercial, and public sector projects.",
    icon: "Award",
  },
  {
    title: "Safety",
    description: "Rigorous safety protocols and training so every project is completed without compromise.",
    icon: "Shield",
  },
  {
    title: "Quality",
    description: "High standards in materials and workmanship, backed by clear warranties.",
    icon: "CheckCircle",
  },
  {
    title: "Reliability",
    description: "We commit to timelines and budgets, with transparent communication throughout.",
    icon: "Clock",
  },
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

/** Client logos for the Our Clients marquee, add more entries as new clients are added */
export const clients = [
  { name: "K's Hospital Mbeya", logo: "/images/clients/ks-hospital.png" },
  { name: "Catholic University of Mbeya (CUoM)", logo: "/images/clients/cuom.png" },
  { name: "Technofix Engineering Services", logo: "/images/clients/technofix.png" },
  { name: "TotalEnergies", logo: "/images/clients/totalenergies.png" },
  { name: "Halmasauri ya Wilaya Chunya", logo: "/images/clients/chunya.png" },
  { name: "Mbeya City Council", logo: "/images/clients/mbeya-city-council.png" },
  { name: "Mbeya University of Science and Technology (MUST)", logo: "/images/clients/must.png" },
];

export const projects = [
  {
    id: "1",
    name: "Mbeya Business Park Phase II",
    location: "Mbeya, Tanzania",
    type: "Commercial Building",
    image: images.projects.commercial,
    status: "completed",
  },
  {
    id: "2",
    name: "Mbalizi–Mbeya Road Upgrade",
    location: "Mbalizi–Mbeya Road",
    type: "Road & Infrastructure",
    image: images.projects.road,
    status: "completed",
  },
  {
    id: "3",
    name: "Mbalizi Residential Towers",
    location: "Mbalizi, Mbeya",
    type: "Residential",
    image: images.projects.residential,
    status: "ongoing",
  },
  {
    id: "4",
    name: "Industrial Warehouse Complex",
    location: "Mbeya",
    type: "Industrial",
    image: images.projects.industrial,
    status: "completed",
  },
  {
    id: "5",
    name: "Mbeya Region Access Roads",
    location: "Mbeya Region",
    type: "Road & Infrastructure",
    image: images.projects.road2,
    status: "ongoing",
  },
  {
    id: "6",
    name: "Office Tower Renovation",
    location: "Mbeya Town",
    type: "Renovation & Maintenance",
    image: images.projects.renovation,
    status: "completed",
  },
];

export const serviceTypesForAppointment = [
  "Building Construction",
  "Civil Works",
  "Road & Infrastructure",
  "Renovation & Maintenance",
  "Consultation / Other",
];
