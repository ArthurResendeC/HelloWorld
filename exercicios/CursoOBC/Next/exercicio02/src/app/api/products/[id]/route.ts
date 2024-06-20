import { NextRequest, NextResponse } from 'next/server';
import products from '../../../../database/database.json';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find(p => p.id === Number(id));

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
