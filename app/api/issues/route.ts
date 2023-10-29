import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const validation = createIssueSchema.safeParse(body);

  if (validation.success === false) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const response = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(response, { status: 201 });

  return res.json();
}
