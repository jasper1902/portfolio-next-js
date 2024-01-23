import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          suscipit iure quisquam veniam nam consequuntur temporibus autem, vitae
          hic. Sit nostrum magnam illum fugiat totam rerum magni voluptatibus
          suscipit alias.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          animi omnis officiis eius esse quibusdam. Facilis architecto amet
          officiis sequi voluptas deserunt quaerat, consectetur modi nobis at
          possimus perspiciatis vel!
        </p>
      </div>
    </section>
  );
};

export default About;
