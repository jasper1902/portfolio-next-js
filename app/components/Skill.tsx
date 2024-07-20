import React from "react";
import { Image } from "@nextui-org/react";
import Heading from "./Heading";

const Skill = () => {
  // Array of image URLs
  const skillIcons = [
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg",
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <Heading title="MY SKILLS" colorFrom="teal-500" colorTo="slate-500" />
        <div className="flex flex-wrap gap-14 items-center justify-center">
          {skillIcons.map((icon, index) => (
            <Image key={index} src={icon} alt="" className="h-14" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
