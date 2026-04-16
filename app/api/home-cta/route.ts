import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import HomeCTASection from "@/models/HomeCTASection";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive =
      request.nextUrl.searchParams.get("includeInactive") === "true";
    const filter = includeInactive ? {} : { isActive: true };
    const section = await HomeCTASection.findOne(filter).sort({ createdAt: -1 });
    return NextResponse.json({ section }, { status: 200 });
  } catch (error) {
    console.error("Error fetching home CTA:", error);
    return NextResponse.json(
      { error: "Failed to fetch home CTA section" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const section = await HomeCTASection.create(data);
    return NextResponse.json(
      { message: "Home CTA section created successfully", section },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating home CTA:", error);
    return NextResponse.json(
      { error: "Failed to create home CTA section" },
      { status: 500 }
    );
  }
}
