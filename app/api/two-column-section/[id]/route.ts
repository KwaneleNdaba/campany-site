import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import TwoColumnSection from '@/models/TwoColumnSection';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const section = await TwoColumnSection.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!section) {
      return NextResponse.json(
        { error: 'Two column section not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Two column section updated successfully', section },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating two column section:', error);
    return NextResponse.json(
      { error: 'Failed to update two column section' },
      { status: 500 }
    );
  }
}
