// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import products from '../../../database/database.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(products);
}
