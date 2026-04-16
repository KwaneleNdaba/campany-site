import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ServicesPageContent from "@/models/ServicesPageContent";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();
    const content = await ServicesPageContent.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Services page content updated successfully", content },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating services page content:", error);
    return NextResponse.json(
      { error: "Failed to update services page content" },
      { status: 500 }
    );
  }
}
