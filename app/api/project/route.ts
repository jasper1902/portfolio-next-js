import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    if (currentUser.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const body = await request.json();
    const project = await prisma.projects.create({ data: body });
    if (!project) {
      return NextResponse.error();
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};

