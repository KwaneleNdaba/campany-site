import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AboutContent from '@/models/AboutContent';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const content = await AboutContent.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!content) {
      return NextResponse.json(
        { error: 'About content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'About content updated successfully', content },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating about content:', error);
    return NextResponse.json(
      { error: 'Failed to update about content' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const content = await AboutContent.findByIdAndDelete(id);

    if (!content) {
      return NextResponse.json(
        { error: 'About content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'About content deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting about content:', error);
    return NextResponse.json(
      { error: 'Failed to delete about content' },
      { status: 500 }
    );
  }
}
