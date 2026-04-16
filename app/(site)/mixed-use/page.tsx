"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Building, Zap, CheckCircle, ArrowRight, Target, Users } from "lucide-react";
import { mockProjects } from "@/utilities/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function MixedUsePage() {
  const mixedUseProjects = mockProjects.filter(p => p.type === "Mixed-Use");

  const advantages = [
    {
      icon: Layers,
      title: "Integrated Living",
      description: "Live, work, shop, and play in one dynamic precinct. Mixed-use developments create vibrant 24/7 communities.",
      benefit: "15-min neighborhoods"
    },
    {
      icon: TrendingUp,
      title: "Investment Synergy",
      description: "Multiple revenue streams and diversified risk create superior investment performance and resilience.",
      benefit: "20% higher returns"
    },
    {
      icon: Building,
      title: "Urban Regeneration",
      description: "Transform underutilized areas into thriving urban hubs that drive economic activity and job creation.",
      benefit: "3,000+ jobs created"
    },
    {
      icon: Zap,
      title: "Sustainable Design",
      description: "Reduced car dependency, shared infrastructure, and efficient land use make mixed-use inherently sustainable.",
      benefit: "40% less carbon"
    }
  ];

  const components = [
    {
      type: "Residential",
      description: "From studios to penthouses",
      features: ["500-800 units", "Variety of sizes", "Affordable to luxury", "Rooftop amenities"]
    },
    {
      type: "Commercial",
      description: "Office & co-working spaces",
      features: ["Grade A offices", "Flexible layouts", "Retail ground floors", "Conference facilities"]
    },
    {
      type: "Retail",
      description: "Shopping & dining",
      features: ["50-100 stores", "Supermarkets", "Restaurants & cafes", "Entertainment venues"]
    },
    {
      type: "Hospitality",
      description: "Hotels & serviced apartments",
      features: ["150-250 keys", "Business hotels", "Aparthotels", "Conference centers"]
    },
    {
      type: "Public Spaces",
      description: "Parks & community areas",
      features: ["Public squares", "Green corridors", "Event spaces", "Art installations"]
    },
    {
      type: "Infrastructure",
      description: "Parking & services",
      features: ["Multi-level parking", "EV charging", "Utilities hub", "Waste management"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Mixed-Use Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              The Future of Urban Living
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Creating complete live-work-play ecosystems that redefine modern urban life. Where residential, commercial, retail, and public spaces converge seamlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                View Precincts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Target, value: "5M+ m²", label: "Mixed-Use GLA" },
              { icon: Users, value: "15K+", label: "Daily Visitors" },
              { icon: Building, value: "12", label: "Integrated Precincts" },
              { icon: TrendingUp, value: "R25B+", label: "Development Value" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">The Mixed-Use Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              More Than the Sum of Parts
            </h2>
            <p className="text-xl text-slate-600">
              Mixed-use developments deliver unique benefits that single-use properties simply cannot match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-amber-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                      {advantage.benefit}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Development Components</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Integrated Ecosystems
            </h2>
            <p className="text-xl text-slate-600">
              Each mixed-use precinct combines multiple elements to create vibrant, self-sustaining communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" />
                  <h3 className="text-xl font-bold text-slate-900">{component.type}</h3>
                </div>
                <p className="text-slate-600 mb-6 text-sm">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Precincts</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Mixed-Use Portfolio
            </h2>
            <p className="text-xl text-slate-600">
              Transformational mixed-use developments that are reshaping South Africa's urban landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mixedUseProjects.map((project, index) => (
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
              href="/projects?category=Mixed-Use"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-colors"
            >
              View All Mixed-Use Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Partner in Placemaking
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're an investor, tenant, or community stakeholder, let's collaborate on creating the next generation of urban precincts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@modernspaces.co.za"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Email Partnership Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
