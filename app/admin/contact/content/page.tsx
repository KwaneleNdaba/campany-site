'use client';

import { Save } from 'lucide-react';
import { useState } from 'react';

export default function ContactContentPage() {
  const [content, setContent] = useState({
    title: 'Get In Touch',
    subtitle: 'We\'d love to hear from you',
    description: 'Contact us for any inquiries about our developments',
  });

  const handleSave = () => {
    alert('Contact page content saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Page Content</h2>
          <p className="text-slate-600 mt-1">Manage the main content for the Contact page</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Page Content</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Page Title</label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={content.subtitle}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
