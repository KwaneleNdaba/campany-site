import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AboutContent from '@/models/AboutContent';

export async function GET() {
  try {
    await dbConnect();
    const content = await AboutContent.findOne({ isActive: true }).sort({ createdAt: -1 });
    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error('Error fetching about content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const content = await AboutContent.create(data);

    return NextResponse.json(
      { message: 'About content created successfully', content },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating about content:', error);
    return NextResponse.json(
      { error: 'Failed to create about content' },
      { status: 500 }
    );
  }
}
