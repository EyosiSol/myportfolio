"use client";

import React from "react";
import Image from "next/image";
import pfp from "@images/Pfp.png";
import Link from "next/link";
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
    <section
      id="intro"
      className="w-dvw h-fit md:w-fit p-16 gap-2 md:gap-10 flex flex-col items-center justify-center left-0 top-0  bg-[url('/images/Pattern.png')] bg-cover bg-center rounded-3xl md:rounded-full"
    >
      <Image
        className="w-full h-auto md:w-[480px]  left-[421px] top-[137px] mb-4"
        src={pfp}
        alt="profile"
      />
      <div
        className={`left-[298px] top-[334px] text-white text-2xl md:text-[63px] font-bold ${poppins.className} font-poppins mb-4`}
      >
        Eyosias Solomon{" "}
      </div>
      <div
        className={`left-[414px] top-[429px] text-[#4fc3f7] text-base md:text-[32px] text-center text-wrap w-80 md:w-fit md:text-left font-semibold ${poppins.className} font-poppins`}
      >
        Frontend Developer | UI/UX Designer🧙‍♂️
      </div>
      <div
        className={`w-dvw md:w-[793px] h-auto left-[125px] top-[476px] text-center text-[#e1e1e1] text-[19px] font-medium ${poppins.className} font-poppins leading-[30px] px-5`}
      >
        A passionate Frontend Developer and UI/UX Designer with a knack for
        creating user-friendly and visually appealing web interfaces. and also
        passionate about learning new technologies and frameworks.
      </div>
      <Link href="#contact">
        <div className="w-[187px] h-[55px] p-2.5 left-[428px] top-[606px]  rounded-[75px] border border-[#4fc3f7] justify-center items-center gap-2.5 inline-flex hover:bg-[#4fc3f7] hover:text-white transition-all duration-300 cursor-pointer mt-5 ">
          <div
            className={`text-white text-[15px] font-medium   ${montserrat.className} font-montserrat`}
          >
            Contact Me
          </div>
        </div>
      </Link>
    </section>
  );
}
