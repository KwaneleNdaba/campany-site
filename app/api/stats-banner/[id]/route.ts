import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import StatsBanner from '@/models/StatsBanner';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const data = await request.json();
    const banner = await StatsBanner.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!banner) {
      return NextResponse.json(
        { error: 'Stats banner not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Stats banner updated successfully', banner },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating stats banner:', error);
    return NextResponse.json(
      { error: 'Failed to update stats banner' },
      { status: 500 }
    );
  }
}
