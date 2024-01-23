import React from "react";
import getProjects from "@/actions/getProject";
import Heading from "../Heading";
import ProjectContainer from "./ProjectContainer";

const ProjectIndex = async () => {
  const projects = await getProjects();

  return (
    <div id="home" className={`max-w-[1240px] mx-auto px-8 z-10 `}>
      <div className="flex flex-col items-center gap-4">
        <Heading title="Projects" />
      </div>
      <ProjectContainer projects={projects} />
    </div>
  );
};

export default ProjectIndex;
