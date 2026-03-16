"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Ruler, Home, CheckCircle, X, ArrowLeft, ArrowRight, Download, Phone, Mail, Share2 } from "lucide-react";
import { mockProjectDetails } from "@/utilities/mockData";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = mockProjectDetails.find((p: any) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}

function ProjectPageContent({ project }: { project: any }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen pt-24"
    >
      {/* Back Button */}
      <div className="fixed top-28 left-6 z-40">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Image Gallery Slider */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={project.gallery[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 group"
        >
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 md:px-12 pb-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`px-4 py-2 text-sm font-bold uppercase rounded-full ${
                    project.status === "Under Construction" 
                      ? "bg-amber-500 text-slate-900" 
                      : project.status === "Coming Soon"
                      ? "bg-blue-500 text-white"
                      : "bg-emerald-500 text-white"
                  }`}>
                    {project.status}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif leading-tight">
                  {project.title}
                </h1>

                {/* Stats Bar */}
                <div className="flex flex-wrap gap-8 text-white">
                  <div>
                    <p className="text-sm text-slate-300 mb-1">Total Area</p>
                    <p className="text-2xl font-bold">{project.details.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">Units</p>
                    <p className="text-2xl font-bold">{project.details.units}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">Completion</p>
                    <p className="text-2xl font-bold">{project.details.completion}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
          {currentImageIndex + 1} / {project.gallery.length}
        </div>
      </section>

      {/* Floating Action Bar */}
      <div className="sticky top-24 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors">
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-colors"
            >
              Request Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Overview</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 font-serif">
                    Project Description
                  </h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Key Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-slate-900 font-serif">Key Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Ruler, label: "Total Area", value: project.details.area },
                    { icon: Home, label: "Total Units", value: project.details.units },
                    { icon: Calendar, label: "Completion Date", value: project.details.completion },
                    { icon: Users, label: "Lead Architect", value: project.details.architect }
                  ].map((spec, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
                      <spec.icon className="w-8 h-8 text-amber-600 mb-4" />
                      <p className="text-sm text-slate-500 mb-1">{spec.label}</p>
                      <p className="text-2xl font-bold text-slate-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-slate-900 font-serif">Features & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      Amenities
                    </h4>
                    <ul className="space-y-3">
                      {project.amenities.map((amenity: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Gallery Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-slate-900 font-serif">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((src: string, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                      onClick={() => setSelectedImage(src)}
                    >
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium">View Full Size</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-40 space-y-6">
                
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-3">Interested in this project?</h3>
                  <p className="text-slate-300 mb-6">
                    Get detailed information, pricing, or schedule a site visit with our team.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <a
                      href="tel:+27211412370"
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <p className="text-xs text-slate-400">Call Us</p>
                        <p className="font-semibold">021 141 2370</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@modernspaces.co.za"
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <div>
                        <p className="text-xs text-slate-400">Email Us</p>
                        <p className="font-semibold">info@modernspaces.co.za</p>
                      </div>
                    </a>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-center font-bold px-6 py-4 rounded-full transition-colors"
                  >
                    Request Information
                  </Link>
                </motion.div>

                {/* Download Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
                >
                  <Download className="w-10 h-10 text-amber-600 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Download Brochure</h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Get detailed floor plans, specifications, and pricing information.
                  </p>
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                    Download PDF
                  </button>
                </motion.div>

                {/* Share Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-amber-50 p-8 rounded-3xl border border-amber-100"
                >
                  <Share2 className="w-10 h-10 text-amber-600 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Share Project</h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Share this project with colleagues or investors.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white hover:bg-slate-50 text-slate-900 font-medium px-4 py-3 rounded-full transition-colors border border-slate-200">
                      Copy Link
                    </button>
                    <button className="w-12 h-12 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center transition-colors border border-slate-200">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-lg"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
