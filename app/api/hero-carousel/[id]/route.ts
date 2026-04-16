import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import HeroCarouselItem from '@/models/HeroCarousel';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const item = await HeroCarouselItem.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!item) {
      return NextResponse.json(
        { error: 'Carousel item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Carousel item updated successfully', item },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating hero carousel item:', error);
    return NextResponse.json(
      { error: 'Failed to update carousel item' },
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
    const item = await HeroCarouselItem.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json(
        { error: 'Carousel item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Carousel item deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting hero carousel item:', error);
    return NextResponse.json(
      { error: 'Failed to delete carousel item' },
      { status: 500 }
    );
  }
}
