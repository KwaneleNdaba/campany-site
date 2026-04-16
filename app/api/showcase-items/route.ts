import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ShowcaseItem from '@/models/ShowcaseItem';

export async function GET() {
  try {
    await dbConnect();
    const items = await ShowcaseItem.find({ isActive: true }).sort({ order: 1 }).limit(3);
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error('Error fetching showcase items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch showcase items' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const item = await ShowcaseItem.create(data);

    return NextResponse.json(
      { message: 'Showcase item created successfully', item },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating showcase item:', error);
    return NextResponse.json(
      { error: 'Failed to create showcase item' },
      { status: 500 }
    );
  }
}
