import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import WhyChooseDifferentiator from "@/models/WhyChooseDifferentiator";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive =
      request.nextUrl.searchParams.get("includeInactive") === "true";
    const filter = includeInactive ? {} : { isActive: true };
    const items = await WhyChooseDifferentiator.find(filter).sort({ order: 1 });
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error("Error fetching why choose differentiators:", error);
    return NextResponse.json(
      { error: "Failed to fetch differentiators" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const item = await WhyChooseDifferentiator.create(data);
    return NextResponse.json(
      { message: "Differentiator created successfully", item },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating differentiator:", error);
    return NextResponse.json(
      { error: "Failed to create differentiator" },
      { status: 500 }
    );
  }
}
