import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FeaturedProjectsContent from "@/models/FeaturedProjectsContent";

export async function GET() {
  try {
    await connectDB();

    let content = await FeaturedProjectsContent.findOne({ isActive: true });
    
    // Create default content if none exists
    if (!content) {
      content = await FeaturedProjectsContent.create({
        title: "Featured Developments",
        subtitle: "A showcase of our most iconic projects that redefine the urban landscape and set new standards in property development.",
        isActive: true,
      });
    }

    return NextResponse.json({
      content: {
        title: content.title,
        subtitle: content.subtitle,
      },
    });
  } catch (error) {
    console.error("Error fetching featured projects content:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, subtitle } = body;

    // Validate required fields
    if (!title?.trim() || !subtitle?.trim()) {
      return NextResponse.json(
        { error: "Title and subtitle are required" },
        { status: 400 }
      );
    }

    // Update or create content
    const content = await FeaturedProjectsContent.findOneAndUpdate(
      { isActive: true },
      {
        title: title.trim(),
        subtitle: subtitle.trim(),
        isActive: true,
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: "Featured projects content updated successfully",
      content: {
        title: content.title,
        subtitle: content.subtitle,
      },
    });
  } catch (error) {
    console.error("Error updating featured projects content:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}
