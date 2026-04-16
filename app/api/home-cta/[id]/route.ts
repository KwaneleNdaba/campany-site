import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import HomeCTASection from "@/models/HomeCTASection";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();
    const section = await HomeCTASection.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!section) {
      return NextResponse.json(
        { error: "Home CTA section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Home CTA section updated successfully", section },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating home CTA:", error);
    return NextResponse.json(
      { error: "Failed to update home CTA section" },
      { status: 500 }
    );
  }
}
