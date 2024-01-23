import React from "react";
import { Image } from "@nextui-org/react";
import Heading from "./Heading";
const Skill = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <Heading title="MY SKILLS" colorFrom="teal-500" colorTo="slate-500" />
        <div className="flex flex-wrap gap-14 items-center justify-center">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg"
            alt=""
            className="h-14"
          />
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
            alt=""
            className="h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
