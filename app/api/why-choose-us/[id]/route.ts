import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import WhyChooseUsContent from "@/models/WhyChooseUsContent";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();
    const content = await WhyChooseUsContent.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!content) {
      return NextResponse.json(
        { error: "Why choose us content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Why choose us content updated successfully", content },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating why choose us content:", error);
    return NextResponse.json(
      { error: "Failed to update why choose us content" },
      { status: 500 }
    );
  }
}
