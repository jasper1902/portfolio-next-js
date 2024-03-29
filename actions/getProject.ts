import prisma from "@/libs/prismadb";

export default async function getProjects() {
  try {
    const projects = await prisma.projects.findMany();

    return projects;
  } catch (error: any) {
    throw new Error(error);
  }
}
