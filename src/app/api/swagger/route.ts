import { getApiDocs } from '@/lib/swagger';
import { NextResponse } from 'next/server';

export async function GET() {
  const doc = await getApiDocs();
  return NextResponse.json(doc);
}
