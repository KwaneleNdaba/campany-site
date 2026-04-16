import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import HeroCarouselItem from '@/models/HeroCarousel';

export async function GET() {
  try {
    await dbConnect();
    const items = await HeroCarouselItem.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error('Error fetching hero carousel items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch carousel items' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const item = await HeroCarouselItem.create(data);

    return NextResponse.json(
      { message: 'Carousel item created successfully', item },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating hero carousel item:', error);
    return NextResponse.json(
      { error: 'Failed to create carousel item' },
      { status: 500 }
    );
  }
}
