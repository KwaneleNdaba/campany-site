import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import FullWidthSection from '@/models/FullWidthSection';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const section = await FullWidthSection.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!section) {
      return NextResponse.json(
        { error: 'Full width section not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Full width section updated successfully', section },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating full width section:', error);
    return NextResponse.json(
      { error: 'Failed to update full width section' },
      { status: 500 }
    );
  }
}
