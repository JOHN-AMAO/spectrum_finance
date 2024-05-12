import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, firstName, lastName, phoneNumber } = body;

  const subAccount = await prisma.subAccount.create({
    data: {
      name,
      email,
      firstName,
      lastName,
      phoneNumber,
    },
  });

  return NextResponse.json(subAccount);
}
