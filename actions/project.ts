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

const validCategories = new Set(["Full stack", "Frontend", "Backend"]);
function isValidCategory(
  category: string
): category is "Full stack" | "Frontend" | "Backend" {
  return validCategories.has(category);
}

export async function GetProjectById(id: string): Promise<ProjectSchemaType> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("User not authenticated.");
  }

  if (currentUser.role !== "ADMIN") {
    throw new Error("User does not have sufficient permissions.");
  }

  try {
    const project = await prisma.projects.findUnique({ where: { id } });
    if (!project || !isValidCategory(project.category)) {
      throw new Error(
        "Project not found or has invalid category, demo, or repo."
      );
    }

    return {
      projectName: project.projectName,
      category: project.category,
      stack: project.stack,
      image: project.image,
      demo: project.demo ?? "",
      repo: project.repo ?? "",
    };
  } catch (error) {
    throw new Error(`Failed to get project`);
  }
}

export async function UpdateProjectDetail(id: string, data: ProjectSchemaType) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("User not authenticated.");
  }

  if (currentUser.role !== "ADMIN") {
    throw new Error("User does not have sufficient permissions.");
  }

  try {
    return await prisma.projects.update({
      where: { id },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update project`);
  }
}
