import { NextRequest, NextResponse } from "next/server";

const allemails: { email: string }[] = [];

export function GET() {
  return NextResponse.json(allemails);
}

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   console.log(body);
//   allemails.push(body);

//   if (body.email == "ali@gmail.com") {
//     console.log("You are logged in");
//   } else {
//     console.log("Invalid Credintals");
//   }

//   return NextResponse.json({ body });
// }

export async function POST(request: NextRequest) {
  const body = await request.json();
  allemails.push(body);

  console.log("body", body);

  try {
    if (body.email == "ali@gmail.com") {
      return NextResponse.json({
        message: "Valid Admin",
        redirectUrl: "/admin",
      });
    } else {
      return NextResponse.json({
        message: "Valid User",
        redirectUrl: "/student",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      message: "Invalid User",
    });
  }
}
