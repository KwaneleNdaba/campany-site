"use client";

import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mockServices } from "../utilities/mockData";
import { getServiceIcon } from "@/lib/serviceIcons";

interface ServiceDoc {
  _id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  order: number;
  isActive: boolean;
}

interface ServicesPageContentDoc {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
}

export function Services() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [apiServices, setApiServices] = useState<ServiceDoc[]>([]);
  const [pageContent, setPageContent] = useState<ServicesPageContentDoc | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const [svcRes, pcRes] = await Promise.all([
          fetch("/api/services"),
          fetch("/api/services-page-content"),
        ]);
        const svcData = await svcRes.json();
        const pcData = await pcRes.json();
        if (!cancelled) {
          setApiServices(svcData.services || []);
          setPageContent(pcData.content ?? null);
        }
      } catch (e) {
        console.error("Services section fetch error:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const sectionEyebrow =
    pageContent?.sectionEyebrow?.trim() || "Our Expertise";
  const sectionTitle =
    pageContent?.sectionTitle?.trim() ||
    "Comprehensive Development Solutions";
  const sectionSubtitle =
    pageContent?.sectionSubtitle?.trim() ||
    "From concept to completion, we deliver world-class property developments that transform communities and create lasting value.";

  const fromApi = apiServices.map((s) => ({
    _id: s._id,
    title: s.title,
    description: s.description,
    image: s.image,
    icon: getServiceIcon(s.icon || "Building2"),
  }));

  const displayServices =
    fromApi.length > 0
      ? isHomePage
        ? fromApi.slice(0, 3)
        : fromApi
      : isHomePage
        ? mockServices
        : [];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-10 h-10 animate-spin text-amber-600" />
          </div>
        ) : (
          <>
            <div
              className={
                isHomePage
                  ? "flex flex-col items-center gap-8 mb-20 md:flex-row md:items-center md:justify-between"
                  : "flex flex-col items-center mb-20 gap-8"
              }
            >
              <div className="flex w-full flex-col items-center md:flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-900 uppercase tracking-wider">
                    {sectionEyebrow}
                  </span>
                </motion.div>

                <SectionHeading
                  title={sectionTitle}
                  subtitle={sectionSubtitle}
                  align="center"
                  className="mb-0"
                />
              </div>

              {isHomePage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="shrink-0"
                >
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayServices.length === 0 && !isHomePage ? (
                <p className="text-slate-600 col-span-full text-center py-12">
                  No services published yet. Add them in Admin → Services Page →
                  Services List.
                </p>
              ) : (
                displayServices.map((service, index) => {
                  const cardKey =
                    "_id" in service &&
                    typeof (service as { _id?: string })._id === "string"
                      ? (service as { _id: string })._id
                      : `svc-${index}`;
                  return (
                    <ServiceCard
                      key={cardKey}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      image={service.image}
                      index={index}
                    />
                  );
                })
              )}
            </div>

            {isHomePage && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: "500+", label: "Projects Delivered" },
                    { value: "30+", label: "Years Experience" },
                    { value: "15", label: "Cities Served" },
                    { value: "98%", label: "Client Satisfaction" },
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                      {i < 3 && (
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-700" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
