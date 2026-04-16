"use client";

import { useState, useEffect } from "react";
import { Save, Image as ImageIcon, Loader2 } from "lucide-react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import toast, { Toaster } from "react-hot-toast";

interface CTASection {
  _id?: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  isActive: boolean;
}

const emptySection = (): CTASection => ({
  title: "",
  buttonText: "",
  buttonLink: "/contact",
  backgroundImage: "",
  isActive: true,
});

export default function CTASectionPage() {
  const [ctaSection, setCTASection] = useState<CTASection>(emptySection());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/home-cta?includeInactive=true");
        const data = await res.json();
        if (data.section) {
          setCTASection({
            ...emptySection(),
            ...data.section,
            buttonLink: data.section.buttonLink || "/contact",
          });
        } else {
          setCTASection(emptySection());
        }
      } catch (e) {
        console.error(e);
        toast.error("Failed to load CTA section");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const tid = toast.loading("Saving…");
    try {
      const url = ctaSection._id
        ? `/api/home-cta/${ctaSection._id}`
        : "/api/home-cta";
      const method = ctaSection._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ctaSection),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      if (data.section) {
        setCTASection({
          ...emptySection(),
          ...data.section,
          buttonLink: data.section.buttonLink || "/contact",
        });
      }
      toast.success("CTA section saved!", { id: tid });
    } catch (e) {
      console.error(e);
      toast.error("Could not save", { id: tid });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Call-to-Action Section</h2>
          <p className="text-slate-600 mt-1">
            Manage the final CTA section at the bottom of the homepage
          </p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">CTA Content</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
            <input
              type="text"
              value={ctaSection.title}
              onChange={(e) => setCTASection({ ...ctaSection, title: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Let's Build Together"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Button Text</label>
            <input
              type="text"
              value={ctaSection.buttonText}
              onChange={(e) => setCTASection({ ...ctaSection, buttonText: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Get In Touch"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Button Link</label>
            <input
              type="text"
              value={ctaSection.buttonLink}
              onChange={(e) => setCTASection({ ...ctaSection, buttonLink: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="/contact"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Background Image
            </label>
            {ctaSection.backgroundImage ? (
              <div className="mb-3 aspect-video max-w-xl rounded-lg overflow-hidden">
                <img
                  src={ctaSection.backgroundImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
            <UploadButton<OurFileRouter, "imageUploader">
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                if (res?.[0]?.url) {
                  setCTASection({ ...ctaSection, backgroundImage: res[0].url });
                  toast.success("Image uploaded");
                }
              }}
              onUploadError={(err) => {
                toast.error(err.message);
              }}
              appearance={{
                button:
                  "bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium w-full max-w-xl",
                container: "w-full max-w-xl",
              }}
              content={{ button: "Upload background" }}
            />
            <p className="text-center text-sm text-slate-500 my-2 max-w-xl">or paste URL</p>
            <input
              type="text"
              value={ctaSection.backgroundImage}
              onChange={(e) =>
                setCTASection({ ...ctaSection, backgroundImage: e.target.value })
              }
              className="w-full max-w-xl px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
            <input
              type="checkbox"
              id="cta-active"
              checked={ctaSection.isActive}
              onChange={(e) => setCTASection({ ...ctaSection, isActive: e.target.checked })}
              className="w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
            />
            <label htmlFor="cta-active" className="text-sm font-medium text-slate-700">
              Active (visible on homepage)
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Preview</label>
          <div className="relative h-[50vh] rounded-lg overflow-hidden bg-slate-900">
            {ctaSection.backgroundImage ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${ctaSection.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-slate-900/80" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
                      {ctaSection.title || "Title preview"}
                    </h2>
                    <span className="inline-flex items-center gap-2 bg-amber-500 text-white px-10 py-5 rounded-full font-bold text-lg">
                      {ctaSection.buttonText || "Button"}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center min-h-[200px]">
                <ImageIcon className="w-16 h-16 text-slate-500" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">Tips</h4>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>Use high-quality images that represent your brand.</li>
          <li>Keep the title short and action-oriented.</li>
          <li>Button text should clearly indicate what happens next.</li>
          <li>Test the button link to ensure it works correctly.</li>
        </ul>
      </div>
    </div>
  );
}
