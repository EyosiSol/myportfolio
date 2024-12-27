"use client";

import React from "react";
import Image from "next/image";

export default function Intro({
  poppins,
  montserrat,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  poppins: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  montserrat: any;
}) {
  return (
    <div className="w-dvw h-fit md:w-fit p-20 gap-4 flex flex-col items-center justify-center left-0 top-0  bg-[url('/images/Pattern.png')] bg-cover bg-center rounded-3xl md:rounded-full">
      <Image
        className="w-44 h-auto md:w-[202px] md:h-[197px] left-[421px] top-[137px] rounded-full border border-[#4fc3f7]"
        src="/images/Pic.jpg"
        alt="profile"
        width={202}
        height={197}
      />
      <div
        className={`left-[298px] top-[334px] text-white text-2xl md:text-[63px] font-bold ${poppins.className} font-poppins`}
      >
        Eyosias Solomon{" "}
      </div>
      <div
        className={`left-[414px] top-[429px] text-[#4fc3f7] text-base md:text-[32px] text-center text-wrap w-80 md:w-fit md:text-left font-semibold ${poppins.className} font-poppins`}
      >
        Frontend Developer | UI/UX Designer🧙‍♂️
      </div>
      <div
        className={`w-dvw md:w-[793px] h-auto left-[125px] top-[476px] text-center text-[#e1e1e1] text-[19px] font-medium ${poppins.className} font-poppins leading-[30px] px-5 text-justify`}
      >
        A passionate Frontend Developer and UI/UX Designer with a knack for
        creating user-friendly and visually appealing web interfaces. and also
        passionate about learning new technologies and frameworks.
      </div>
      <div className="w-[187px] h-[55px] p-2.5 left-[428px] top-[606px]  rounded-[75px] border border-[#4fc3f7] justify-center items-center gap-2.5 inline-flex hover:bg-[#4fc3f7] hover:text-white transition-all duration-300 cursor-pointer mt-5 ">
        <div
          className={`text-white text-[15px] font-medium   ${montserrat.className} font-montserrat`}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
}
