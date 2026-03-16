"use client";

import { motion } from "framer-motion";
import { Warehouse, Truck, Zap, Shield, CheckCircle, ArrowRight, Package, Clock } from "lucide-react";
import { mockProjects } from "@/utilities/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function IndustrialPage() {
  const industrialProjects = mockProjects.filter(p => p.type === "Industrial");

  const capabilities = [
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "High-bay facilities with advanced racking systems, temperature control, and automated material handling.",
      spec: "12m clear height"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Strategic locations near highways, ports, and rail with optimal last-mile distribution access.",
      spec: "Direct highway access"
    },
    {
      icon: Zap,
      title: "Power & Infrastructure",
      description: "Heavy power supply, backup generators, fiber connectivity, and industrial-grade utilities.",
      spec: "3-phase 1000kVA+"
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 monitoring, perimeter fencing, biometric access, and comprehensive CCTV coverage.",
      spec: "Grade A security"
    }
  ];

  const specifications = [
    {
      category: "Building",
      items: [
        "12-15m clear height",
        "Reinforced concrete floors",
        "Roller shutter doors",
        "LED high-bay lighting",
        "Sprinkler systems",
        "Insulated roofing"
      ]
    },
    {
      category: "Loading & Access",
      items: [
        "Dock levelers",
        "Truck courts",
        "Container access",
        "Drive-through capability",
        "Ample maneuvering space",
        "Weighbridge facilities"
      ]
    },
    {
      category: "Services",
      items: [
        "3-phase power",
        "Backup generators",
        "Water storage",
        "Fire detection",
        "Staff amenities",
        "Offices & parking"
      ]
    },
    {
      category: "Technology",
      items: [
        "Fiber connectivity",
        "WMS integration ready",
        "IoT sensor networks",
        "Security systems",
        "Energy monitoring",
        "Access control"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Industrial Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Infrastructure for Industry 4.0
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Purpose-built industrial parks and logistics facilities engineered for maximum efficiency, security, and operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Inquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                View Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, value: "850K m²", label: "Total Warehouse Space" },
              { icon: Truck, value: "150+", label: "Loading Bays" },
              { icon: Clock, value: "24/7", label: "Operations Support" },
              { icon: Shield, value: "100%", label: "Security Coverage" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-slate-300 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Industrial Excellence
            </h2>
            <p className="text-xl text-slate-600">
              Specialized facilities designed for warehousing, manufacturing, logistics, and distribution operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">
                      {capability.spec}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Technical Specifications</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Built to Industrial Standards
            </h2>
            <p className="text-xl text-slate-600">
              Every facility meets or exceeds international industrial property standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-amber-500">
                  {spec.category}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Facilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Industrial Portfolio
            </h2>
            <p className="text-xl text-slate-600">
              State-of-the-art industrial parks and logistics hubs across strategic nodes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                type={project.type}
                location={project.location}
                image={project.image}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects?category=Industrial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-colors"
            >
              View All Industrial Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Scale Your Operations
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you need 5,000 or 50,000 square meters, we have solutions tailored to your industrial requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Request Site Visit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+27211412370"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Call 021 141 2370
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
