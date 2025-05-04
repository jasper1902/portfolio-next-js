import React from "react";
import Heading from "../Heading";
import ContractContainer from "./ContractContainer";

const ContractIndex = async () => {
  return (
    <div id="contact" className={`max-w-[1240px] mx-auto px-8 z-10 `}>
      <div className="flex flex-col items-center gap-4">
        <Heading
          title="Get In Touch"
          colorFrom="teal-500"
          colorTo="slate-500"
        />
      </div>
      <ContractContainer />
    </div>
  );
};

export default ContractIndex;
