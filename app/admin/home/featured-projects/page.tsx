"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Save, GripVertical, X, Plus, Loader2 } from "lucide-react";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  type: string;
  location: string;
  status: string;
  image: string;
  logo?: string;
}

interface FeaturedConfig {
  projectIds: string[];
  displayLimit: number;
}

interface ContentData {
  title: string;
  subtitle: string;
}

export default function FeaturedProjectsAdmin() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [config, setConfig] = useState<FeaturedConfig>({
    projectIds: [],
    displayLimit: 8,
  });
  const [content, setContent] = useState<ContentData>({
    title: "Featured Developments",
    subtitle: "A showcase of our most iconic projects that redefine the urban landscape and set new standards in property development.",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch all projects
      const projectsRes = await fetch("/api/projects");
      const projectsData = await projectsRes.json();
      
      // Fetch current featured config
      const configRes = await fetch("/api/home-featured-projects");
      const configData = await configRes.json();

      // Fetch content (title & subtitle)
      const contentRes = await fetch("/api/home-featured-projects-content");
      const contentData = await contentRes.json();

      if (projectsRes.ok && Array.isArray(projectsData.projects)) {
        setAllProjects(projectsData.projects);
      }

      if (configRes.ok && configData.config) {
        setConfig(configData.config);
      }

      if (contentRes.ok && contentData.content) {
        setContent(contentData.content);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Save project configuration
      const configRes = await fetch("/api/home-featured-projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      // Save content (title & subtitle)
      const contentRes = await fetch("/api/home-featured-projects-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (configRes.ok && contentRes.ok) {
        toast.success("Featured projects updated successfully");
      } else {
        const configData = await configRes.json();
        const contentData = await contentRes.json();
        toast.error(configData.error || contentData.error || "Failed to update");
      }
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const addProject = (projectId: string) => {
    if (!config.projectIds.includes(projectId)) {
      setConfig({
        ...config,
        projectIds: [...config.projectIds, projectId],
      });
    }
    setShowAddModal(false);
  };

  const removeProject = (projectId: string) => {
    setConfig({
      ...config,
      projectIds: config.projectIds.filter((id) => id !== projectId),
    });
  };

  const moveProject = (fromIndex: number, toIndex: number) => {
    const newIds = [...config.projectIds];
    const [moved] = newIds.splice(fromIndex, 1);
    newIds.splice(toIndex, 0, moved);
    setConfig({ ...config, projectIds: newIds });
  };

  const selectedProjects = config.projectIds
    .map((id) => allProjects.find((p) => p._id === id))
    .filter(Boolean) as Project[];

  const availableProjects = allProjects.filter(
    (p) => !config.projectIds.includes(p._id)
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Featured Projects
          </h1>
          <p className="text-slate-600 mt-2">
            Configure the featured projects section on the homepage
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Save Changes
        </button>
      </div>

      {/* Section Content */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Section Content</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Section Title
            </label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Featured Developments"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Section Subtitle
            </label>
            <textarea
              value={content.subtitle}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="A showcase of our most iconic projects..."
            />
          </div>
        </div>
      </div>

      {/* Display Limit */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Maximum Projects to Display
        </label>
        <input
          type="number"
          min="1"
          max="20"
          value={config.displayLimit}
          onChange={(e) =>
            setConfig({ ...config, displayLimit: parseInt(e.target.value) || 1 })
          }
          className="w-32 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        <p className="text-sm text-slate-500 mt-2">
          Currently showing {Math.min(selectedProjects.length, config.displayLimit)} of{" "}
          {selectedProjects.length} selected projects
        </p>
      </div>

      {/* Selected Projects */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            Selected Projects ({selectedProjects.length})
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>

        {selectedProjects.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No projects selected. Click "Add Project" to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {selectedProjects.map((project, index) => (
              <div
                key={project._id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <button
                  type="button"
                  className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600"
                  title="Drag to reorder"
                >
                  <GripVertical className="w-5 h-5" />
                </button>

                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="80px"
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-600">
                    {project.type} • {project.location}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => moveProject(index, index - 1)}
                      className="px-3 py-1 text-sm bg-white border border-slate-300 rounded hover:bg-slate-50"
                    >
                      ↑
                    </button>
                  )}
                  {index < selectedProjects.length - 1 && (
                    <button
                      type="button"
                      onClick={() => moveProject(index, index + 1)}
                      className="px-3 py-1 text-sm bg-white border border-slate-300 rounded hover:bg-slate-50"
                    >
                      ↓
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removeProject(project._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {index >= config.displayLimit && (
                  <span className="px-2 py-1 text-xs bg-slate-200 text-slate-600 rounded">
                    Hidden
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Add Project</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              {availableProjects.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  All projects have been added to featured projects.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableProjects.map((project) => (
                    <button
                      key={project._id}
                      onClick={() => addProject(project._id)}
                      className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors text-left"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="96px"
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {project.type} • {project.location}
                        </p>
                        <span
                          className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : project.status === "Under Construction"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
