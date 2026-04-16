import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import WhyChooseUsContent from "@/models/WhyChooseUsContent";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive =
      request.nextUrl.searchParams.get("includeInactive") === "true";
    const filter = includeInactive ? {} : { isActive: true };
    const content = await WhyChooseUsContent.findOne(filter).sort({
      createdAt: -1,
    });
    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("Error fetching why choose us content:", error);
    return NextResponse.json(
      { error: "Failed to fetch why choose us content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const content = await WhyChooseUsContent.create(data);
    return NextResponse.json(
      { message: "Why choose us content created successfully", content },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating why choose us content:", error);
    return NextResponse.json(
      { error: "Failed to create why choose us content" },
      { status: 500 }
    );
  }
}
