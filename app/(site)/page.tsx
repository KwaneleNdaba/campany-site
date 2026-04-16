"use client";

import { motion } from "framer-motion";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { VisualShowcase } from "@/sections/VisualShowcase";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Projects } from "@/sections/Projects";
import { HomeCTA } from "@/sections/HomeCTA";

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

      <HomeCTA />
    </motion.div>
  );
}

