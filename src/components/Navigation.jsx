import React from "react";
import { FaSquareBehance } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="bg-neutral-900 w-full">
      <div className="w-full h-[61px] justify-center items-center gap-[390px] inline-flex">
        <div className="w-[136px] h-[61px] text-white text-[40px] font-normal">
          Cisca
        </div>
        <div className="justify-start items-start gap-[70px] flex">
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-bold tracking-wider">
              Projects
            </div>
          </div>
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-bold tracking-wider">
              Contact
            </div>
          </div>
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xl font-bold tracking-wider">
              About
            </div>
          </div>
        <div className="justify-end items-end gap-[25px] flex text-white text-4xl">
          <FaSquareBehance />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
