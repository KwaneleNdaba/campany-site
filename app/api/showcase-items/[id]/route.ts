import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ShowcaseItem from '@/models/ShowcaseItem';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const item = await ShowcaseItem.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!item) {
      return NextResponse.json(
        { error: 'Showcase item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Showcase item updated successfully', item },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating showcase item:', error);
    return NextResponse.json(
      { error: 'Failed to update showcase item' },
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
    const item = await ShowcaseItem.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json(
        { error: 'Showcase item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Showcase item deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting showcase item:', error);
    return NextResponse.json(
      { error: 'Failed to delete showcase item' },
      { status: 500 }
    );
  }
}
