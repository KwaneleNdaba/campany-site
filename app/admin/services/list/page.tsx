"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Save,
  X,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { SERVICE_ICON_NAMES } from "@/lib/serviceIcons";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  order: number;
  isActive: boolean;
}

export default function ServicesListPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<ServiceItem>({
    title: "",
    description: "",
    icon: "Building2",
    image: "",
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services?includeInactive=true");
      const data = await response.json();
      setServices(data.services || []);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Could not load services");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: ServiceItem) => {
    setFormData(item);
    setEditingId(item._id || null);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setFormData({
      title: "",
      description: "",
      icon: "Building2",
      image: "",
      order: services.length,
      isActive: true,
    });
    setIsAdding(true);
    setEditingId(null);
  };

  const handleSave = async () => {
    setSaving(true);
    const tid = toast.loading("Saving…");
    try {
      if (isAdding) {
        const response = await fetch("/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchServices();
          resetForm();
          toast.success("Service created", { id: tid });
        } else {
          const err = await response.json().catch(() => ({}));
          toast.error(
            typeof err.error === "string" ? err.error : "Failed to create service",
            { id: tid }
          );
        }
      } else if (editingId) {
        const response = await fetch(`/api/services/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchServices();
          resetForm();
          toast.success("Service updated", { id: tid });
        } else {
          const err = await response.json().catch(() => ({}));
          toast.error(
            typeof err.error === "string" ? err.error : "Failed to update service",
            { id: tid }
          );
        }
      } else {
        toast.dismiss(tid);
      }
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Could not save service", { id: tid });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchServices();
        toast.success("Service deleted");
      } else {
        const err = await response.json().catch(() => ({}));
        toast.error(
          typeof err.error === "string" ? err.error : "Failed to delete service"
        );
      }
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Could not delete service");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "Building2",
      image: "",
      order: 0,
      isActive: true,
    });
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <>
      <Toaster position="top-right" />
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
        </div>
      ) : (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="text-slate-600 mt-1">
            Cards shown on the Services page and the first three on the homepage
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add service
        </button>
      </div>

      {(editingId || isAdding) && (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              {isAdding ? "Add service" : "Edit service"}
            </h3>
            <button
              type="button"
              onClick={resetForm}
              className="p-2 hover:bg-slate-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Icon
              </label>
              <select
                value={formData.icon}
                onChange={(e) =>
                  setFormData({ ...formData, icon: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                {SERVICE_ICON_NAMES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order: parseInt(e.target.value, 10) || 0,
                  })
                }
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg self-end">
              <input
                type="checkbox"
                id="svc-active"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.target.checked })
                }
                className="w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
              />
              <label htmlFor="svc-active" className="text-sm font-medium text-slate-700">
                Active
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Card image
              </label>
              {formData.image && (
                <div className="mb-4 relative aspect-video max-w-md rounded-lg overflow-hidden">
                  <Image
                    src={formData.image}
                    alt="Preview"
                    fill
                    sizes="100vw"
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image: "" })}
                    className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              <div className="flex flex-col gap-3 max-w-md">
                <UploadButton<OurFileRouter, "imageUploader">
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res && res[0]) {
                      setFormData({ ...formData, image: res[0].url });
                      toast.success("Image uploaded");
                    }
                  }}
                  onUploadError={(error: Error) => {
                    console.error("Upload error:", error);
                    toast.error(error.message || "Upload failed");
                  }}
                  appearance={{
                    button:
                      "bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium ut-ready:bg-amber-600",
                    container: "w-full",
                  }}
                  content={{
                    button: "Upload image",
                    allowedContent: "Images up to 16MB",
                  }}
                />
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Or paste image URL"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              )}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {services.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-slate-200">
          <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No services yet</h3>
          <p className="text-slate-600 mb-6">
            Add services here; the homepage shows the first three active items when
            available.
          </p>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium"
          >
            <Plus className="w-5 h-5" />
            Add first service
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="aspect-video relative bg-slate-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-slate-400" />
                  </div>
                )}
                {!item.isActive && (
                  <span className="absolute top-2 right-2 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded">
                    INACTIVE
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Icon: {item.icon} · Order: {item.order}
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item._id!)}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      )}
    </>
  );
}
