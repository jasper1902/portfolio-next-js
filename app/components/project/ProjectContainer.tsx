"use client";
import React, { Fragment, useState } from "react";
import Card from "../Card";
import { Input } from "@nextui-org/react";
import { useSearchProject } from "@/hook/useSearchProject ";
import { projects } from "@prisma/client";

type Props = {
  projects: projects[];
};

const ProjectContainer = ({ projects }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchProjects = useSearchProject(projects ?? [], searchTerm);

  return (
    <div>
      <div className="mt-10">
        <Input
          type="text"
          label="Search Project"
          className="max-w-xs"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-center items-stretch gap-4 mt-5 ">
        {searchProjects.length > 0 ? (
          searchProjects.map((item: projects, index: number) => (
            <Fragment key={index}>
              <Card
                image={item.image}
                stack={item.stack}
                projectName={item.projectName}
                category={item.category}
                projectUrl={item.projectUrl}
              />
            </Fragment>
          ))
        ) : (
          <>
            <h1>No project</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
