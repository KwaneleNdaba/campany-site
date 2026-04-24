import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FeaturedProjects from "@/models/FeaturedProjects";
import Project from "@/models/Project";

export async function GET() {
  try {
    await connectDB();

    let config = await FeaturedProjects.findOne({ isActive: true });
    
    // Create default config if none exists
    if (!config) {
      config = await FeaturedProjects.create({
        projectIds: [],
        displayLimit: 8,
        isActive: true,
      });
    }

    // Fetch the actual projects to return full details
    const projects = await Project.find({
      _id: { $in: config.projectIds },
      isActive: true,
    })
      .select('_id title type location status image logo')
      .lean();

    // Sort projects according to the order in projectIds
    const projectMap = new Map(projects.map(p => [p._id.toString(), p]));
    const orderedProjects = config.projectIds
      .map(id => projectMap.get(id))
      .filter(Boolean)
      .slice(0, config.displayLimit);

    return NextResponse.json({
      config: {
        projectIds: config.projectIds,
        displayLimit: config.displayLimit,
      },
      projects: orderedProjects,
    });
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured projects" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { projectIds, displayLimit } = body;

    // Validate projectIds array
    if (!Array.isArray(projectIds)) {
      return NextResponse.json(
        { error: "projectIds must be an array" },
        { status: 400 }
      );
    }

    // Validate displayLimit
    if (typeof displayLimit !== 'number' || displayLimit < 1 || displayLimit > 20) {
      return NextResponse.json(
        { error: "displayLimit must be a number between 1 and 20" },
        { status: 400 }
      );
    }

    // Verify all project IDs exist
    const existingProjects = await Project.find({
      _id: { $in: projectIds },
    }).select('_id');

    if (existingProjects.length !== projectIds.length) {
      return NextResponse.json(
        { error: "Some project IDs do not exist" },
        { status: 400 }
      );
    }

    // Update or create config
    const config = await FeaturedProjects.findOneAndUpdate(
      { isActive: true },
      {
        projectIds,
        displayLimit,
        isActive: true,
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: "Featured projects updated successfully",
      config: {
        projectIds: config.projectIds,
        displayLimit: config.displayLimit,
      },
    });
  } catch (error) {
    console.error("Error updating featured projects:", error);
    return NextResponse.json(
      { error: "Failed to update featured projects" },
      { status: 500 }
    );
  }
}
