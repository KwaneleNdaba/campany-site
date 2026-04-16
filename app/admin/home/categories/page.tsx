'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { UploadButton } from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

interface Category {
  _id?: string;
  title: string;
  image: string;
  link: string;
  order: number;
  isActive: boolean;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Category>({
    title: '',
    image: '',
    link: '',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (category: Category) => {
    setFormData(category);
    setEditingId(category._id || null);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setFormData({
      title: '',
      image: '',
      link: '',
      order: categories.length,
      isActive: true,
    });
    setIsAdding(true);
    setEditingId(null);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (isAdding) {
        const response = await fetch('/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchCategories();
          resetForm();
        } else {
          alert('Failed to create category');
        }
      } else if (editingId) {
        const response = await fetch(`/api/categories/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchCategories();
          resetForm();
        } else {
          alert('Failed to update category');
        }
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchCategories();
      } else {
        alert('Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert('An error occurred while deleting');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      image: '',
      link: '',
      order: 0,
      isActive: true,
    });
    setEditingId(null);
    setIsAdding(false);
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Categories</h2>
          <p className="text-slate-600 mt-1">Manage the property category tiles displayed on the homepage</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Category
        </button>
      </div>

      {/* Edit/Add Form */}
      {(editingId || isAdding) && (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              {isAdding ? 'Add New Category' : 'Edit Category'}
            </h3>
            <button onClick={resetForm} className="p-2 hover:bg-slate-100 rounded-lg">
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
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="e.g., Commercial Properties"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Link
              </label>
              <input
                type="text"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="/services or /projects"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="0"
              />
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-slate-700">
                Active (visible on website)
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category Image
              </label>

              {formData.image && (
                <div className="mb-4 relative aspect-[4/5] max-w-xs rounded-lg overflow-hidden">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setFormData({ ...formData, image: '' })}
                    className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <UploadButton<OurFileRouter, "imageUploader">
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res && res[0]) {
                      setFormData({ ...formData, image: res[0].url });
                      alert('Image uploaded successfully!');
                    }
                  }}
                  onUploadError={(error: Error) => {
                    console.error('Upload error:', error);
                    alert(`Upload failed: ${error.message}\n\nPlease make sure your image is under 16MB.`);
                  }}
                  onUploadBegin={(name) => {
                    console.log('Uploading:', name);
                  }}
                  appearance={{
                    button: 'bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors ut-ready:bg-amber-600 ut-uploading:bg-amber-700 ut-uploading:cursor-not-allowed',
                    container: 'w-full',
                    allowedContent: 'text-slate-600 text-sm',
                  }}
                  content={{
                    button: 'Upload Image',
                    allowedContent: 'Images up to 16MB',
                  }}
                />

                <div className="text-center text-sm text-slate-500">OR</div>

                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Or paste image URL here"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      {categories.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-slate-200">
          <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No categories yet</h3>
          <p className="text-slate-600 mb-6">Get started by adding your first category</p>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add First Category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/5] relative">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-slate-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-blue-950/70 group-hover:bg-blue-950/50 transition-colors" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {!category.isActive && (
                    <span className="bg-slate-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      INACTIVE
                    </span>
                  )}
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-medium">{category.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{category.link}</p>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded mt-2 inline-block">
                    Order: {category.order}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id!)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors"
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
  );
}
