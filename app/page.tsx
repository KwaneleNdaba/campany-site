"use client";

import { motion } from "framer-motion";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { VisualShowcase } from "../sections/VisualShowcase";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { Projects } from "../sections/Projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Projects />
      <VisualShowcase />
      <WhyChooseUs />
      
      {/* Minimal CTA Section */}
      <section className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1927&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
              Let's Build Together
            </h2>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

