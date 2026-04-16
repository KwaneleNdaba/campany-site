"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Users, MapPin, CheckCircle, ArrowRight, Store, Car } from "lucide-react";
import { mockProjects } from "@/utilities/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function RetailPage() {
  const retailProjects = mockProjects.filter(p => p.type === "Retail");

  const advantages = [
    {
      icon: ShoppingBag,
      title: "Prime Catchments",
      description: "Strategic locations in high-traffic areas with strong demographics and proven spending power.",
      stat: "500K+"
    },
    {
      icon: Store,
      title: "Mixed Tenancy",
      description: "Curated retail mix combining anchors, fashion, dining, and entertainment for maximum draw.",
      stat: "200+"
    },
    {
      icon: Car,
      title: "Accessibility",
      description: "Excellent access, visibility, and ample parking to maximize customer convenience and dwell time.",
      stat: "5,000+"
    },
    {
      icon: TrendingUp,
      title: "Strong Returns",
      description: "Consistent rental income and capital growth in South Africa's resilient retail property sector.",
      stat: "12%+"
    }
  ];

  const amenityCategories = [
    {
      title: "Customer Experience",
      items: ["Free Wi-Fi", "Digital Wayfinding", "Family Facilities", "VIP Lounges"]
    },
    {
      title: "Operations",
      items: ["Central HVAC", "24/7 Security", "Waste Management", "Energy Management"]
    },
    {
      title: "Parking & Access",
      items: ["Multi-level Parking", "EV Charging", "Valet Service", "Wheelchair Access"]
    },
    {
      title: "Entertainment",
      items: ["Food Courts", "Cinema Complex", "Kids Play Areas", "Event Spaces"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Retail Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Destinations That Define Communities
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Creating vibrant retail experiences that bring people together, from neighborhood centers to regional super malls.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Explore Centers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Ticker */}
      <div className="bg-slate-900 py-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3M+", label: "Monthly Footfall" },
              { value: "250+", label: "Retail Brands" },
              { value: "R8B+", label: "Retail GLA" },
              { value: "96%", label: "Tenant Retention" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Competitive Edge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Why Our Retail Centers Excel
            </h2>
            <p className="text-xl text-slate-600">
              Data-driven site selection and expert management deliver consistent performance for tenants and investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 right-8 text-5xl font-bold text-amber-50">
                    {advantage.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">World-Class Facilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Comprehensive Amenities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenityCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Centers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Retail Portfolio
            </h2>
            <p className="text-xl text-slate-600">
              Award-winning retail destinations across South Africa's key metropolitan areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                type={project.type}
                location={project.location}
                status={project.status}
                image={project.image}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects?category=Retail"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-colors"
            >
              View All Retail Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Expand Your Retail Footprint
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Join leading brands in our thriving retail ecosystems. Let's discuss leasing opportunities and partnership models.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Request Leasing Info
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@modernspaces.co.za"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
