import React from "react";

type Props = {
  title?: string;
  colorFrom?: string;
  colorTo?: string;
};

const Heading = ({ title, colorFrom, colorTo }: Props) => {
  return (
    <>
      <h1 className="text-white font-semibold text-6xl">{title}</h1>
      <p
        className={`tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-${
          colorFrom ? colorFrom : "purple-500"
        } to-${colorTo ? colorTo : "orange-400"} text-1xl`}
      >
        EXPLORE NOW
      </p>
    </>
  );
};

export default Heading;
