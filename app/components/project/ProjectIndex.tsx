import React from "react";
import { GetProjects } from "@/actions/project";
import Heading from "../Heading";
import ProjectContainer from "./ProjectContainer";
import { getCurrentUser } from "@/actions/getCurrentUser";

const ProjectIndex = async () => {
  const projects = await GetProjects();
  const currentUser = await getCurrentUser();

  return (
    <div id="home" className={`max-w-[1240px] mx-auto px-8 z-10 `}>
      <div className="flex flex-col items-center gap-4">
        <Heading title="Projects" />
      </div>
      <ProjectContainer projects={projects} currentUser={currentUser} />
    </div>
  );
};

export default ProjectIndex;
