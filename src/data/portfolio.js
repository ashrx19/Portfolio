import {
  FaBolt,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiOpenid,
  SiPassport,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const profile = {
  name: "Ashwin S",
  title: "Full Stack Developer",
  tagline: "Learn • Build • Improve • Repeat",
  location: "Coimbatore, Tamil Nadu, India",
  email: "ashwin191205@gmail.com",
  phone: "9677866349",
  github: "https://github.com/ashrx19",
  linkedin: "https://linkedin.com/in/ashwin-s-999474282",
};

export const navLinks = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

export const stats = [
  { value: "4+", label: "Featured Projects" },
  { value: "12+", label: "Core Technologies" },
  { value: "MERN", label: "Primary Stack" },
];

export const timeline = [
  {
    title: "Computer Science Student",
    detail: "Building a strong foundation in programming, databases, and software engineering fundamentals.",
  },
  {
    title: "MERN Stack Development",
    detail: "Creating practical full-stack applications with React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Production-Ready Focus",
    detail: "Strengthening backend development, authentication, APIs, and real-world deployment practices.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "OAuth", icon: SiOpenid },
      { name: "Passport.js", icon: SiPassport },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: FaFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Thunder Client", icon: FaBolt },
    ],
  },
];

export const projects = [
  {
    name: "O2 Herbal E-Commerce",
    type: "MERN Commerce Platform",
    description:
      "A modern MERN-based e-commerce platform featuring product management, shopping cart functionality, authentication, responsive design, search, filtering, and order management.",
    github: "https://github.com/ashrx19/O2-HERBAL",
    tags: ["React", "Node.js", "MongoDB", "Auth"],
    accent: "emerald",
  },
  {
    name: "Elderly Care Management System",
    type: "Care Operations App",
    description:
      "A complete elderly care platform featuring resident management, guardian management, health monitoring, food preferences, reporting, and database integration.",
    github: "https://github.com/ashrx19/Elders-app",
    tags: ["Full Stack", "Database", "Reports", "CRUD"],
    accent: "cyan",
  },

  {
  name: "Food Recipe Finder",
  type: "Recipe Discovery App",
  description:
    "A recipe discovery application that allows users to search and explore recipes, view detailed cooking instructions, and discover meals through API integration and dynamic content.",
  github: "https://github.com/ashrx19/FOOD-RECIPE-FINDER",
  tags: ["React", "API Integration", "Search", "Responsive"],
  accent: "amber",
  },

  {
    name: "React Progress",
    type: "Frontend Learning Repository",
    description:
      "My React learning journey covering components, props, state management, hooks, routing, API integration, and project-based learning.",
    github: "https://github.com/ashrx19/REACT_PROGRESS",
    tags: ["React", "Hooks", "Routing", "APIs"],
    accent: "violet",
  },

  {
  name: "Node.js Progress",
  type: "Backend Learning Repository",
  description:
    "A repository documenting my Node.js learning journey through hands-on practice, covering core concepts, modules, asynchronous programming, HTTP servers, and backend development.",
  github: "https://github.com/ashrx19/NODE-PROGRESS",
  tags: ["Node.js", "Backend", "JavaScript", "Learning"],
  accent: "sky",
  },

  {
  name: "Express.js Progress",
  type: "Backend Learning Repository",
  description:
    "A repository documenting my Express.js learning journey through practical implementations, covering routing, middleware, REST APIs, request handling, and backend development.",
  github: "https://github.com/ashrx19/EXPRESS-",
  tags: ["Express.js", "REST API", "Middleware", "Backend"],
  accent: "rose",
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export const services = [
  {
    title: "Real Estate Solutions",
    summary: "I can help businesses digitize their property management and sales processes.",
    outcome: "Property workflows for listings, bookings, inquiries, agents, leads, documents, and analytics.",
    solutions: [
      "Property Listing Platform",
      "Property Booking System",
      "Rental Management System",
      "Real Estate CRM",
      "Builder Management Dashboard",
      "Property Inquiry Management",
      "Agent Management System",
      "Property Analytics Dashboard",
      "Customer Lead Tracking",
      "Document Management System",
    ],
  },
  {
    title: "E-Commerce Solutions",
    summary: "I can help businesses sell products online and manage their operations efficiently.",
    outcome: "Online selling systems with products, orders, inventory, vendors, customers, discounts, and reports.",
    solutions: [
      "Single Vendor E-Commerce Store",
      "Multi-Vendor Marketplace",
      "Inventory Management System",
      "Order Management System",
      "Product Management Dashboard",
      "Customer Management Portal",
      "Coupon & Discount System",
      "Delivery Tracking System",
      "Vendor Management System",
      "Sales Analytics Dashboard",
    ],
  },
  {
    title: "Booking & Scheduling Solutions",
    summary: "I can help businesses automate appointments, reservations, and scheduling.",
    outcome: "Booking flows for appointments, reservations, memberships, events, rentals, reminders, and schedules.",
    solutions: [
      "Doctor Appointment Booking System",
      "Salon Booking Platform",
      "Hotel Reservation System",
      "Gym Membership Management",
      "Event Booking Platform",
      "Vehicle Rental System",
      "Meeting Room Reservation System",
      "Online Consultation Booking",
      "Schedule Management Dashboard",
      "Automated Reminder System",
    ],
  },
  {
    title: "Food Industry Solutions",
    summary: "I can help restaurants and food businesses manage orders and operations.",
    outcome: "Restaurant tools for menus, orders, reservations, POS workflows, delivery, loyalty, and inventory.",
    solutions: [
      "Restaurant Management System",
      "Food Ordering Platform",
      "Table Reservation System",
      "Cloud Kitchen Dashboard",
      "Restaurant POS System",
      "Menu Management System",
      "Delivery Tracking Platform",
      "Customer Loyalty Program",
      "Restaurant Analytics Dashboard",
      "Inventory Management for Restaurants",
    ],
  },
  {
    title: "Logistics & Supply Chain Solutions",
    summary: "I can help logistics companies streamline delivery and warehouse operations.",
    outcome: "Operations dashboards for warehouse, courier, fleet, delivery, shipment, drivers, routes, and analytics.",
    solutions: [
      "Warehouse Management System",
      "Courier Tracking System",
      "Fleet Management Dashboard",
      "Delivery Management Platform",
      "Order Tracking System",
      "Shipment Monitoring Dashboard",
      "Inventory Tracking System",
      "Driver Management System",
      "Route Optimization Dashboard",
      "Logistics Analytics Platform",
    ],
  },
];
