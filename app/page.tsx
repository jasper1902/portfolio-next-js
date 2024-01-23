import getProjects from "@/actions/getProject";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      {projects.map((project) => (
        <p key={project.id}>{project.projectName}</p>
      ))}
    </>
  );
}
