"use client";

import React from "react";
import Image from "next/image";

export default function whatido({
  inter,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inter: any;
}) {
  return (
    <div className="px-2 w-dvw md:max-w-[1000px] h-auto flex-col justify-start items-center gap-9 inline-flex ">
      <div className="flex-col justify-start items-center flex">
        <div
          className={`text-white text-4xl mb-2 md:text-[45px] font-extrabold ${inter.className} font-inter`}
        >
          What I do
        </div>
        <div
          className={`text-[#4fc3f7] text-sm font-semibold ${inter.className} font-inter`}
        >
          My Services
        </div>
      </div>
      <div className="grid md:grid-cols-3 items-center h-full py-4 gap-5 w-full">
        <div className=" w-full md:w-fit md:col-span-2 flex justify-center items-center gap-1 h-fit py-4 bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="w-full md:w-fit px-3 md:px-0 left-[20px] top-[101px] flex-col justify-center md:justify-start md:items-start gap-4 inline-flex">
            <div className="hidden md:flex left-[20px] top-[38px] justify-center md:justify-start md:items-start gap-2.5">
              <div className="w-11 h-11 bg-[#f5f8ff] rounded-[9px]" />
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div
              className={`text-white text-xl font-semibold ${inter.className} leading-normal`}
            >
              Front End Web development
            </div>
            <div
              className={`w-full md:w-full text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Creating user interface and experience of a website application
              using technologies like HTML, CSS, and JavaScript, ensuring
              functionality, responsiveness, and aesthetic appeal.
            </div>
          </div>
          <Image
            className="hidden md:block rounded-[10px]"
            src="/images/webdev2.jpg"
            alt="Web Development"
            width={280}
            height={280}
          />
        </div>
        <div className="w-full h-full flex flex-col   bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="w-full md:w-full md:h-full flex-col gap-3 justify-center items-center md:items-start pl-3 md:pl-[26px] inline-fle">
            <div className=" hidden md:block p-2 bg-[#f5f8ff] rounded-[9px] md:gap-2.5  overflow-hidden">
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div className=" h-full py-4 md:h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div
                className={`w-full md:w-[237px] text-white text-xl font-semibold ${inter.className} leading-[18px]`}
              >
                Ui/Ux Design
              </div>
              <div
                className={`w-full h-auto md:w-full text-wrap md:h-auto text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
              >
                Specializing in crafting intuitive, user-friendly interfaces and
                seamless digital experiences through innovative and thoughtful
                UI/UX design solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col md:flex-row justify-start items-start gap-5 flex ">
        <div className="md:p-6 flex-col justify-center items-center md:justify-end md:items-start md:gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px] pl-3">
          <div className=" hidden md:flex p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5  overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch py-4  h-auto md:h-auto flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={` w-full md:w-full text-white  text-xl  text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              {" "}
              Product Design
            </div>
            <div
              className={`w-full pr-1 md:w-auto h-auto md:h-[121px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Designing innovative, user-focused digital products that
              seamlessly combine functionality, aesthetics, and usability to
              deliver exceptional experiences.
              <br />
            </div>
          </div>
        </div>
        <div className="md:p-6 flex-col justify-center items-center md:justify-end md:items-start md:gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px] pl-3">
          <div className=" hidden md:flex p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5  overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch py-4  h-auto md:h-auto flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={` w-full md:w-auto text-white  text-xl  text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              {" "}
              Graphics Design
            </div>
            <div
              className={` w-full pr-1 md:w-auto h-auto md:h-auto text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              creating visually compelling content using typography, images,
              colors, and layouts to communicate messages effectively across
              various mediums.
              <br />
            </div>
          </div>
        </div>
        <div className="md:p-6 flex-col justify-center items-center md:justify-end md:items-start md:gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]pl-3">
          <div className=" hidden md:flex p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5  overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch py-4  h-auto md:h-auto flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={` w-full md:w-[237px] text-white  text-xl  text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              {" "}
              PCB Design
            </div>
            <div
              className={` w-full pr-1 md:w-auto h-auto md:h-auto text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Designing efficient, high-performance PCBs with precision,
              ensuring optimal functionality and reliability for diverse
              electronic applications and innovative solutions
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
