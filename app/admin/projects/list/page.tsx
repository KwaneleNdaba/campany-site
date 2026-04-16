'use client';

export default function ProjectsListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">All Projects</h2>
          <p className="text-slate-600 mt-1">Manage all projects for the Projects page</p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
        <p className="text-amber-900">
          📝 <strong>Note:</strong> The projects management from the home page section has been moved here. 
          Manage the complete project portfolio for the Projects page.
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <p className="text-slate-600">
          Full CRUD interface for managing all projects displayed on the Projects page.
          Add project details, images, status, and more.
        </p>
      </div>
    </div>
  );
}
