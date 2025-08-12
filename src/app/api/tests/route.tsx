import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  return NextResponse.json({
    name,
    age,
  });
}

export async function POST(request: NextRequest) {
  const { name, age } = await request.json();
  return NextResponse.json({
    name,
    age,
  });
}
