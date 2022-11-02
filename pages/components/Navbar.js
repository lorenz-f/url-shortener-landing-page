import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="pl-28 flex flex-row w-screen space-x-16 pt-10 text-xl items-center">
        <Image src="/logo.svg" width={150} height={40} />
        <h1 className="font-Poppins font-bold text-[#9E9AA8] pl-14">
          Features
        </h1>
        <h1 className="font-Poppins font-bold text-[#9E9AA8] pl-10">Pricing</h1>
        <h1 className="font-Poppins font-bold text-[#9E9AA8] pl-10">
          Resources
        </h1>
        <h1 className="font-Poppins font-bold text-[#9E9AA8] pl-[32vw]">
          Login
        </h1>
        <button className="w-36 h-14 bg-[#2BD0D0] font-Poppins font-bold text-xl rounded-full text-[#ffffff] hover:bg-[#9AE3E3]">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Navbar;
