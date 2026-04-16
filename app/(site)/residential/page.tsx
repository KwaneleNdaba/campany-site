"use client";

import { motion } from "framer-motion";
import { Home, Heart, Trees, Sun, CheckCircle, ArrowRight, Users, Shield } from "lucide-react";
import { mockProjects } from "@/utilities/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function ResidentialPage() {
  const residentialProjects = mockProjects.filter(p => p.type === "Residential");

  const lifestyle = [
    {
      icon: Home,
      title: "Premium Living",
      description: "Thoughtfully designed homes with contemporary finishes, spacious layouts, and attention to every detail.",
      highlight: "From R2.5M"
    },
    {
      icon: Trees,
      title: "Green Spaces",
      description: "Landscaped gardens, parks, and outdoor amenities that connect residents with nature and community.",
      highlight: "40% green cover"
    },
    {
      icon: Shield,
      title: "Secure Estates",
      description: "Gated communities with 24/7 security, access control, and peace of mind for your family.",
      highlight: "Grade A security"
    },
    {
      icon: Heart,
      title: "Community Living",
      description: "Vibrant neighborhoods with recreational facilities, social spaces, and a strong sense of belonging.",
      highlight: "200+ families"
    }
  ];

  const amenities = [
    {
      title: "Home Features",
      icon: Home,
      items: [
        "Open-plan living areas",
        "Modern kitchens",
        "En-suite bathrooms",
        "Private balconies/patios",
        "Built-in wardrobes",
        "Fiber-ready connectivity"
      ]
    },
    {
      title: "Estate Amenities",
      icon: Users,
      items: [
        "Swimming pools",
        "Gym & wellness center",
        "Kids play areas",
        "Clubhouse",
        "Walking/jogging trails",
        "Pet-friendly spaces"
      ]
    },
    {
      title: "Sustainability",
      icon: Sun,
      items: [
        "Solar geyser systems",
        "Energy-efficient lighting",
        "Water-saving fixtures",
        "Grey water recycling",
        "Rainwater harvesting",
        "Indigenous landscaping"
      ]
    },
    {
      title: "Convenience",
      icon: Trees,
      items: [
        "Covered parking",
        "Visitor parking",
        "Parcel lockers",
        "EV charging points",
        "Property management",
        "Maintenance services"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop)"
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
              Residential Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Where Life Finds Balance
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Creating sustainable residential communities that blend modern living with natural beauty, security, and lifestyle convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Book a Viewing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Explore Estates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Happy Homeowners" },
              { value: "25+", label: "Residential Estates" },
              { value: "R12B+", label: "Property Value" },
              { value: "4.8★", label: "Resident Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">{stat.value}</p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Lifestyle Living</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Your Home, Your Sanctuary
            </h2>
            <p className="text-xl text-slate-600">
              More than just a place to live – our residential estates offer a complete lifestyle experience for you and your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyle.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-amber-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Complete Living Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600">
              Carefully curated amenities and features that enhance your daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <amenity.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{amenity.title}</h3>
                <ul className="space-y-3">
                  {amenity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
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
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Estates</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 font-serif">
              Residential Portfolio
            </h2>
            <p className="text-xl text-slate-600">
              Award-winning residential developments in South Africa's most desirable locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProjects.map((project, index) => (
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
              href="/projects?category=Residential"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-colors"
            >
              View All Residential Projects
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
            backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              From apartments to family homes, discover properties that match your lifestyle and budget. Let's start your home ownership journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-colors"
              >
                Schedule Viewing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+27211412370"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Call Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
