import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ServicesPageContent from "@/models/ServicesPageContent";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive =
      request.nextUrl.searchParams.get("includeInactive") === "true";
    const filter = includeInactive ? {} : { isActive: true };
    const content = await ServicesPageContent.findOne(filter).sort({
      createdAt: -1,
    });
    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("Error fetching services page content:", error);
    return NextResponse.json(
      { error: "Failed to fetch services page content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const content = await ServicesPageContent.create(data);
    return NextResponse.json(
      { message: "Services page content created successfully", content },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating services page content:", error);
    return NextResponse.json(
      { error: "Failed to create services page content" },
      { status: 500 }
    );
  }
}
