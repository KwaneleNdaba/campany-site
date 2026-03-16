"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
  {
    title: "Commercial Excellence",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    stats: "500+ Projects"
  },
  {
    title: "Residential Living",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    stats: "30 Years Experience"
  },
  {
    title: "Industrial Solutions",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    stats: "R5B+ Portfolio"
  }
];

export function VisualShowcase() {
  return (
    <section className="relative">
      {/* Large Hero Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative h-[60vh] md:h-[80vh] overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Minimal Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <p className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">
                  {item.stats}
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
                  {item.title}
                </h3>
                <div className="w-16 h-1 bg-amber-500" />
              </motion.div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Width Image Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif">
              Building Tomorrow's Landmarks
            </h2>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Banner with Image */}
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-slate-900/85" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "30+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "15", label: "Cities" },
                { value: "R5B+", label: "Portfolio" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-xl text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-[60vh] md:h-[70vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop)' }}
          />
        </div>
        
        {/* Right Side - Image with Overlay */}
        <div className="relative h-[60vh] md:h-[70vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
          
          <div className="absolute inset-0 flex items-center p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-4">
                Why Choose Us
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Award-Winning Excellence
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Three decades of delivering iconic developments across South Africa.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-amber-500 transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
