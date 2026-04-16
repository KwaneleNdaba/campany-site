'use client';

import { Save, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactInfoPage() {
  const [offices, setOffices] = useState([
    {
      city: 'Stellenbosch',
      type: 'Head Office',
      address: '1st Floor, 16 Mill Street, Stellenbosch Central, 7600',
      phone: '021 141 2370',
    },
    {
      city: 'Johannesburg',
      type: 'Regional Office',
      address: '1st Floor Block D, Hertford Office Park, 90 Bekker Road, Midrand, 1686',
      phone: '010 142 9000',
    },
  ]);

  const handleSave = () => {
    alert('Contact information saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
          <p className="text-slate-600 mt-1">Manage office locations and contact details</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">{office.city}</h3>
            <p className="text-sm text-amber-600 font-medium">{office.type}</p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                <input
                  type="text"
                  value={office.address}
                  onChange={(e) => {
                    const updated = [...offices];
                    updated[index].address = e.target.value;
                    setOffices(updated);
                  }}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={office.phone}
                  onChange={(e) => {
                    const updated = [...offices];
                    updated[index].phone = e.target.value;
                    setOffices(updated);
                  }}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
