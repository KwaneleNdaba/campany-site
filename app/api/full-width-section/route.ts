import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import FullWidthSection from '@/models/FullWidthSection';

export async function GET() {
  try {
    await dbConnect();
    const section = await FullWidthSection.findOne({ isActive: true }).sort({ createdAt: -1 });
    return NextResponse.json({ section }, { status: 200 });
  } catch (error) {
    console.error('Error fetching full width section:', error);
    return NextResponse.json(
      { error: 'Failed to fetch full width section' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const section = await FullWidthSection.create(data);

    return NextResponse.json(
      { message: 'Full width section created successfully', section },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating full width section:', error);
    return NextResponse.json(
      { error: 'Failed to create full width section' },
      { status: 500 }
    );
  }
}
