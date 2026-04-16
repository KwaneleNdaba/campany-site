'use client';

export default function AboutTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Team Section - About Page</h2>
        <p className="text-slate-600 mt-1">Manage team members displayed on the About page</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <p className="text-slate-600">
          This section will manage the team members specifically for the About page.
          Configure team bios, photos, and roles here.
        </p>
      </div>
    </div>
  );
}
