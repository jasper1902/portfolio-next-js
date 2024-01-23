import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] " id="banner">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image className="rounded-full" src="/avatar.jpg" height={200} width={200} alt="Thanabodee" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Thanabodee Kumsub!
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Software Engineer with a focus on React development
        </p>
      </div>
    </div>
  );
};

export default Banner;
