import { Code2, Smartphone, Cloud, PenTool, BrainCircuit, BarChart, Server } from "lucide-react";

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance web applications built for scale.",
    icon: Code2,
    features: ["Next.js & React", "Custom Backends", "API Integration", "Performance Optimization"],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native-feeling cross-platform mobile experiences.",
    icon: Smartphone,
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
  },
  {
    id: "saas-solutions",
    title: "SaaS Solutions",
    description: "End-to-end development for your software as a service.",
    icon: Server,
    features: ["Multi-tenant Architectures", "Subscription Billing", "User Management", "Analytics Dashboards"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that convert.",
    icon: PenTool,
    features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Integrate intelligence into your existing products.",
    icon: BrainCircuit,
    features: ["LLM Integration", "Custom Workflows", "Data Processing", "Chatbots"],
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable, secure, and reliable infrastructure.",
    icon: Cloud,
    features: ["AWS / GCP / Azure", "Serverless", "Database Architecture", "DevOps"],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Data-driven campaigns to grow your audience.",
    icon: BarChart,
    features: ["Content Strategy", "Performance Ads", "Analytics", "Brand Growth"],
  },
];
