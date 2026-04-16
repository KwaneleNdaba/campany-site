import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import TwoColumnSection from '@/models/TwoColumnSection';

export async function GET() {
  try {
    await dbConnect();
    const section = await TwoColumnSection.findOne({ isActive: true }).sort({ createdAt: -1 });
    return NextResponse.json({ section }, { status: 200 });
  } catch (error) {
    console.error('Error fetching two column section:', error);
    return NextResponse.json(
      { error: 'Failed to fetch two column section' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const section = await TwoColumnSection.create(data);

    return NextResponse.json(
      { message: 'Two column section created successfully', section },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating two column section:', error);
    return NextResponse.json(
      { error: 'Failed to create two column section' },
      { status: 500 }
    );
  }
}
