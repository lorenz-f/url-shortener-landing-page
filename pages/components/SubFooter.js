import React from "react";

function SubFooter() {
  return (
    <div className="bg-[url('/bg-shorten-desktop.svg')] bg-[#3A3054] bg-no-repeat bg-cover h-64 flex flex-col w-full">
      <div className="self-center space-y-8 m-[auto] text-center">
        <h1 className="text-white text-5xl font-bold">
          Boost your links today
        </h1>
        <button className="w-52 h-14 bg-[#2BD0D0] font-bold text-xl text-[#ffffff] rounded-full hover:bg-[#9AE3E3]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SubFooter;
