"use client";

import { useState, useEffect } from "react";
import { Save, Loader2 } from "lucide-react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import toast, { Toaster } from "react-hot-toast";

interface ServicesPageContent {
  _id?: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  isActive: boolean;
}

const emptyContent = (): ServicesPageContent => ({
  bannerTitle: "Our Services",
  bannerSubtitle: "Comprehensive property development solutions",
  bannerImage: "",
  sectionEyebrow: "Our Expertise",
  sectionTitle: "Comprehensive Development Solutions",
  sectionSubtitle:
    "From concept to completion, we deliver world-class property developments that transform communities and create lasting value.",
  isActive: true,
});

export default function ServicesContentPage() {
  const [content, setContent] = useState<ServicesPageContent>(emptyContent());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/services-page-content?includeInactive=true");
        const data = await res.json();
        if (data.content) {
          setContent({ ...emptyContent(), ...data.content });
        } else {
          setContent(emptyContent());
        }
      } catch (e) {
        console.error(e);
        toast.error("Failed to load services page content");
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
      const url = content._id
        ? `/api/services-page-content/${content._id}`
        : "/api/services-page-content";
      const method = content._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      if (data.content) {
        setContent({ ...emptyContent(), ...data.content });
      }
      toast.success("Services page content saved!", { id: tid });
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
          <h2 className="text-3xl font-bold text-slate-900">Services Page Content</h2>
          <p className="text-slate-600 mt-1">
            Hero banner and section headings for the public Services page
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Hero banner</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Banner title
              </label>
              <input
                type="text"
                value={content.bannerTitle}
                onChange={(e) =>
                  setContent({ ...content, bannerTitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Banner subtitle
              </label>
              <input
                type="text"
                value={content.bannerSubtitle}
                onChange={(e) =>
                  setContent({ ...content, bannerSubtitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Banner background image
            </label>
            {content.bannerImage && (
              <div className="mb-4 relative aspect-video max-w-lg rounded-lg overflow-hidden border border-slate-200">
                <img
                  src={content.bannerImage}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-3 max-w-lg">
              <UploadButton<OurFileRouter, "imageUploader">
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res?.[0]) {
                    setContent({ ...content, bannerImage: res[0].url });
                    toast.success("Image uploaded");
                  }
                }}
                onUploadError={(err: Error) => {
                  toast.error(err.message);
                }}
                appearance={{
                  button:
                    "bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium ut-ready:bg-amber-600",
                  container: "w-full",
                }}
                content={{
                  button: "Upload image",
                  allowedContent: "Up to 16MB",
                }}
              />
              <input
                type="text"
                value={content.bannerImage}
                onChange={(e) =>
                  setContent({ ...content, bannerImage: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Or paste image URL"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Services section (below hero)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Eyebrow label
              </label>
              <input
                type="text"
                value={content.sectionEyebrow}
                onChange={(e) =>
                  setContent({ ...content, sectionEyebrow: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Section title
              </label>
              <input
                type="text"
                value={content.sectionTitle}
                onChange={(e) =>
                  setContent({ ...content, sectionTitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Section subtitle
              </label>
              <textarea
                value={content.sectionSubtitle}
                onChange={(e) =>
                  setContent({ ...content, sectionSubtitle: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
          <input
            type="checkbox"
            id="spc-active"
            checked={content.isActive}
            onChange={(e) =>
              setContent({ ...content, isActive: e.target.checked })
            }
            className="w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
          />
          <label htmlFor="spc-active" className="text-sm font-medium text-slate-700">
            Active (used on the live site when this is the latest record)
          </label>
        </div>
      </div>
    </div>
  );
}
