import React from "react";
import getProjects from "@/actions/getProject";
import Heading from "../Heading";
import ProjectContainer from "./ProjectContainer";
import { getCurrentUser } from "@/actions/getCurrentUser";

const ProjectIndex = async () => {
  const projects = await getProjects();
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
