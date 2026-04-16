import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive =
      request.nextUrl.searchParams.get("includeInactive") === "true";
    const filter = includeInactive ? {} : { isActive: true };
    const services = await Service.find(filter).sort({ order: 1 });
    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const service = await Service.create(data);
    return NextResponse.json(
      { message: "Service created successfully", service },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
