import { NextRequest, NextResponse } from "next/server";

const ShoppingList: { product: string; price: string }[] = [];

async function GET() {
  console.log("get", ShoppingList);

  return NextResponse.json({
    message: "hello from Umair and I am using Route Handlers with nextjs",
    ShoppingList,
  });
}

async function POST(request: NextRequest) {
  const body = await request.json(); //in
  ShoppingList.push(body);
  console.log("post req", body);
  return NextResponse.json(body); // out
}

console.log(ShoppingList);

export { GET, POST };
