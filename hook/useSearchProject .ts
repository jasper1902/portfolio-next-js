import { projects } from "@prisma/client";

export const useSearchProject  = (
  projects: projects[],
  searchTerm: string
): projects[] => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();
  const filteredProjects: projects[] = [];

  for (const project of projects) {
    if (doesProjectMatchSearch(project, lowerCasedSearchTerm)) {
      filteredProjects.push(project);
    }
  }

  return filteredProjects;
};

const doesProjectMatchSearch = (
  project: projects,
  searchTerm: string
): boolean => {
  const projectName = project.projectName.toLowerCase();
  const category = project.category.toLowerCase();
  const stackItems = project.stack.map((stackItem) => stackItem.toLowerCase());

  return (
    projectName.includes(searchTerm) ||
    category.includes(searchTerm) ||
    stackItems.some((item) => item.includes(searchTerm))
  );
};