import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Statistic from '@/models/Statistic';

export async function GET() {
  try {
    await dbConnect();
    const statistics = await Statistic.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json({ statistics }, { status: 200 });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const data = await request.json();
    const statistic = await Statistic.create(data);

    return NextResponse.json(
      { message: 'Statistic created successfully', statistic },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating statistic:', error);
    return NextResponse.json(
      { error: 'Failed to create statistic' },
      { status: 500 }
    );
  }
}
