"use client";
import React, { Fragment, useState } from "react";
import Card from "../Card";
import { Input } from "@nextui-org/react";
import { useSearchProject } from "@/hook/useSearchProject ";
import { projects } from "@prisma/client";
import { SafeUser } from "@/type/user";

type Props = {
  projects: projects[];
  currentUser: SafeUser | null;
};

const ProjectContainer = ({ projects, currentUser }: Props) => {
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
                project={item}
                currentUser={currentUser}
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
