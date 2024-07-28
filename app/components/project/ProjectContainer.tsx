"use client";

import React, { useState, useMemo } from "react";
import Card from "../Card";
import { useSearchProject } from "@/hook/useSearchProject";
import { projects } from "@prisma/client";
import { SafeUser } from "@/type/user";

type Props = {
  projects: projects[];
  currentUser: SafeUser | null;
};

const SEARCH_STRING = "Search project".split("");

const ProjectContainer = ({ projects, currentUser }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchProjects = useSearchProject(projects ?? [], searchTerm);

  const transitionDelays = useMemo(
    () =>
      Array.from({ length: SEARCH_STRING.length }, (_, i) => ({
        transitionDelay: `${i * 50}ms`,
      })),
    []
  );

  return (
    <div>
      <div className="mt-10">
        <div className="form-control">
          <SearchInput onChange={(e) => setSearchTerm(e.target.value)} />
          <label>
            {SEARCH_STRING.map((char, index) => (
              <span key={index} style={transitionDelays[index]}>
                {char}
              </span>
            ))}
          </label>
        </div>
      </div>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-center items-stretch gap-4 mt-5">
        {searchProjects.length > 0 ? (
          searchProjects.map((project: projects, index: number) => (
            <Card
              key={project.id}
              project={project}
              currentUser={currentUser}
            />
          ))
        ) : (
          <h1>No project</h1>
        )}
      </div>
    </div>
  );
};

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => (
  <input type="text" required onChange={onChange} className="search-input" />
);

export default ProjectContainer;
