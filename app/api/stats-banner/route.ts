import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import StatsBanner from '@/models/StatsBanner';

export async function GET() {
  try {
    await dbConnect();
    const banner = await StatsBanner.findOne({ isActive: true }).sort({ createdAt: -1 });
    return NextResponse.json({ banner }, { status: 200 });
  } catch (error) {
    console.error('Error fetching stats banner:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats banner' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const banner = await StatsBanner.create(data);

    return NextResponse.json(
      { message: 'Stats banner created successfully', banner },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating stats banner:', error);
    return NextResponse.json(
      { error: 'Failed to create stats banner' },
      { status: 500 }
    );
  }
}
