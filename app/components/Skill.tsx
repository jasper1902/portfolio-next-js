import React from "react";
import { Image } from "@nextui-org/react";
import Heading from "./Heading";

type SkillIcon = {
  name: string;
  src: string;
};

const SkillsSection = () => {
  const skillIcons: SkillIcon[] = [
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    },
    {
      name: "Typescript",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    },
    {
      name: "Python",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    },
    {
      name: "HTML 5",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    },
    {
      name: "Redux",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    },
    {
      name: "Vite",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
    },
    {
      name: "Node.js",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    },
    {
      name: "Express",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
    },
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    },
    {
      name: "Docker",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    },
    {
      name: "Nest.js",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
    },
    {
      name: "Next.js",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs.svg",
    },
    {
      name: "Socket.io",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    },
    {
      name: "Git",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    },
    {
      name: "Prisma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      name: "Arduino",
      src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] pb-6 z-10"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <Heading title="MY SKILLS" colorFrom="teal-500" colorTo="slate-500" />
        <div className="flex flex-wrap gap-14 items-center justify-center">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer"
            >
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <Image
                  src={skill.src}
                  alt={`${skill.name} icon`}
                  className="h-14"
                />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  {skill.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
