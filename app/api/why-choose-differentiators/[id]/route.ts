import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import WhyChooseDifferentiator from "@/models/WhyChooseDifferentiator";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();
    const item = await WhyChooseDifferentiator.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return NextResponse.json(
        { error: "Differentiator not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Differentiator updated successfully", item },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating differentiator:", error);
    return NextResponse.json(
      { error: "Failed to update differentiator" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const item = await WhyChooseDifferentiator.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json(
        { error: "Differentiator not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Differentiator deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting differentiator:", error);
    return NextResponse.json(
      { error: "Failed to delete differentiator" },
      { status: 500 }
    );
  }
}
