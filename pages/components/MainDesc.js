import React from "react";

function MainDesc() {

  {/* component handing the description set above the link form at the top of the landing page */}

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-[44vw] h-[32.5vw] pl-36 pt-40">
          <h1 className="text-8xl text-[dark-gray] tracking-[-0.125rem] font-bold pb-2 leading-[11vh]">
            More than just shorter links
          </h1>
          <h2 className="text-2xl text-[lightest-gray] tracking-[0.009rem] pb-7 leading-10">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </h2>
          <button className="w-52 h-14 bg-[#2BD0D0] hover:bg-[#9AE3E3] font-bold text-xl rounded-full text-[#ffffff]">
            Get Started
          </button>
        </div>
        <div className="pl-44 pt-36">
          <img src="/illustration-working.svg" />
        </div>
      </div>
    </>
  );
}

export default MainDesc;
