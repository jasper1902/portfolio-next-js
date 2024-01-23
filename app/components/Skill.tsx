import React from "react";
import { Image } from "@nextui-org/react";
const Skill = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">My skill</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-teal-500 to-slate-500  text-1xl">
          EXPLORE NOW
        </p>
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
