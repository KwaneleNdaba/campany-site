"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface HomeCTASection {
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  isActive?: boolean;
}

export function HomeCTA() {
  const [section, setSection] = useState<HomeCTASection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/home-cta");
        const data = await res.json();
        setSection(data.section ?? null);
      } catch (e) {
        console.error("Home CTA fetch error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-900">
        <Loader2 className="w-10 h-10 animate-spin text-amber-500" aria-label="Loading" />
      </section>
    );
  }

  if (!section) {
    return null;
  }

  const hasContent =
    Boolean(section.title?.trim()) ||
    Boolean(section.buttonText?.trim()) ||
    Boolean(section.backgroundImage?.trim());
  if (!hasContent) {
    return null;
  }

  const href = section.buttonLink?.trim() || "/contact";
  const bg = section.backgroundImage?.trim();

  return (
    <section className="relative h-[50vh] min-h-[280px]">
      {bg ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-slate-900" />
      )}
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6"
        >
          {section.title?.trim() ? (
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
              {section.title}
            </h2>
          ) : (
            <div className="mb-8" />
          )}
          {section.buttonText ? (
            <Link
              href={href}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              {section.buttonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
