"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Award, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { mockProjects } from "@/utilities/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function CommercialPage() {
  const commercialProjects = mockProjects.filter(p => p.type === "Commercial");

  const benefits = [
    {
      icon: Building2,
      title: "Grade A Offices",
      description: "Premium office spaces designed for modern businesses with state-of-the-art facilities and technology integration."
    },
    {
      icon: Users,
      title: "Flexible Layouts",
      description: "Adaptable floor plans that grow with your business, supporting agile work environments and collaboration."
    },
    {
      icon: TrendingUp,
      title: "Investment Value",
      description: "Prime locations with proven capital appreciation and rental yields in South Africa's top commercial nodes."
    },
    {
      icon: Award,
      title: "Green Certified",
      description: "LEED and Green Star certified buildings that reduce operating costs and enhance corporate sustainability goals."
    }
  ];

  const features = [
    "24/7 Security & Access Control",
    "High-Speed Fiber Connectivity",
    "Energy-Efficient Systems",
    "Ample Parking Facilities",
    "On-site Property Management",
    "Conference & Meeting Rooms",
    "Backup Power Systems",
    "Modern Elevator Systems"
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Commercial Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Building Tomorrow's Business Districts
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Creating iconic office spaces and commercial precincts that drive economic growth and redefine city skylines across South Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Schedule a Viewing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2.5M+", label: "Square Meters Developed" },
              { value: "50+", label: "Commercial Projects" },
              { value: "R15B+", label: "Portfolio Value" },
              { value: "98%", label: "Occupancy Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Why Choose Our Commercial Spaces</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Premium Office Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Strategically located commercial properties designed to elevate your business presence and maximize operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Standard Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
                World-Class Amenities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Every commercial development includes comprehensive features designed to support modern business operations and enhance workplace experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                  alt="Commercial interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">Green Star</p>
                    <p className="text-sm text-slate-600">6-Star Rated</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Commercial Developments
            </h2>
            <p className="text-xl text-slate-600">
              Explore our landmark commercial projects across South Africa's major business districts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProjects.map((project, index) => (
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
              href="/projects?category=Commercial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-colors"
            >
              View All Commercial Projects
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
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our commercial spaces can support your growth ambitions and business objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Get in Touch
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
