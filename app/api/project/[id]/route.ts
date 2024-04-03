import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    if (currentUser.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const project = await prisma.projects.delete({ where: { id: params.id } });
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
