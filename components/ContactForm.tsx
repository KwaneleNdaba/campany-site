"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm, type ContactFormData } from "@/app/actions/contact";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      enquiryType: formData.get("enquiryType") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Your message has been sent successfully!",
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send your message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
      onSubmit={handleSubmit}
    >
      {/* Status Messages */}
      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
            submitStatus.type === "success"
              ? "bg-emerald-50 border border-emerald-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm ${
              submitStatus.type === "success" ? "text-emerald-800" : "text-red-800"
            }`}
          >
            {submitStatus.message}
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-slate-900 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-slate-900 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="enquiryType" className="block text-sm font-bold text-slate-900 mb-2">
          Enquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none"
          required
          disabled={isSubmitting}
          defaultValue=""
        >
          <option value="" disabled>Select an enquiry type</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Sales & Leasing">Sales & Leasing</option>
          <option value="Development Projects">Development Projects</option>
          <option value="Careers">Careers</option>
        </select>
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 font-bold transition-colors duration-300 tracking-wider uppercase text-sm rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              SENDING...
            </>
          ) : (
            "SUBMIT"
          )}
        </button>
      </div>
    </motion.form>
  );
}
