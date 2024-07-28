"use server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";
import { ProjectSchemaType } from "@/type/project";

export async function GetProjects() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { createdAt: "desc" },
    });

    return projects;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function AddProject(data: ProjectSchemaType) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("User not authenticated.");
  }

  if (currentUser.role !== "ADMIN") {
    throw new Error("User does not have sufficient permissions.");
  }

  try {
    const { projectName, category, stack, image, demo, repo } = data;
    return await prisma.projects.create({
      data: {
        projectName,
        category,
        stack,
        image,
        demo,
        repo,
      },
    });
  } catch (error) {
    throw new Error(`Failed to add project`);
  }
}

export async function DeleteProject(id: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("User not authenticated.");
  }

  if (currentUser.role !== "ADMIN") {
    throw new Error("User does not have sufficient permissions.");
  }

  try {
    return await prisma.projects.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Failed to delete project`);
  }
}
