import React from "react";
import Image from "next/image";

export default function whatido({
  inter,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inter: any;
}) {
  return (
    <div className="w-[929px] h-[691px] flex-col justify-start items-center gap-9 inline-flex">
      <div className="flex-col justify-start items-center flex">
        <div
          className={`text-white text-[45px] font-extrabold font-['Inter'] ${inter.className}`}
        >
          What I do
        </div>
        <div
          className={`text-[#4fc3f7] text-sm font-semibold font-['Inter'] ${inter.className}`}
        >
          My Services
        </div>
      </div>
      <div className="self-stretch justify-start items-center h-full py-4 gap-5 inline-flex">
        <div className="w-[620px] flex justify-center items-center gap-1 h-fit py-4 bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="w-[300px] left-[20px] top-[101px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="left-[20px] top-[38px] justify-start items-start gap-2.5 inline-flex">
              <div className="w-11 h-11 bg-[#f5f8ff] rounded-[9px]" />
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div
              className={`text-white text-xl font-semibold ${inter.className} leading-normal`}
            >
              Front End Web development
            </div>
            <div
              className={`w-[314px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Creating user interface and experience of a website application
              using technologies like HTML, CSS, and JavaScript, ensuring
              functionality, responsiveness, and aesthetic appeal.
            </div>
          </div>
          <Image
            className="rounded-[10px]"
            src="/images/webdev2.jpg"
            alt="Web Development"
            width={280}
            height={280}
          />
        </div>
        <div className="w-[289px] h-auto flex justify-center items-center bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="w-[289px] py-2 h-full flex-col gap-6 justify-start items-start pl-[26px] inline-flex">
            <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div className="h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div
                className={`w-[237px] text-white text-[15px] font-semibold ${inter.className} leading-[18px]`}
              >
                Ui/Ux Design
              </div>
              <div
                className={`w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
              >
                Specializing in crafting intuitive, user-friendly interfaces and
                seamless digital experiences through innovative and thoughtful
                UI/UX design solutions.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-5 inline-flex">
        <div className="grow shrink basis-0 self-stretch pl-[26px] pr-3 pt-[29px] pb-[25px] flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={`w-[237px] text-white text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              {" "}
              Product Design
            </div>
            <div
              className={`w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Designing innovative, user-focused digital products that
              seamlessly combine functionality, aesthetics, and usability to
              deliver exceptional experiences.
              <br />
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch pl-[26px] pr-[7px] pt-[29px] pb-1.5 flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch h-[175px] flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={`w-[237px] text-white text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              PCB Design
            </div>
            <div
              className={`w-[270px] h-[121px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              Designing efficient, high-performance PCBs with precision,
              ensuring optimal functionality and reliability for diverse
              electronic applications and innovative solutions
              <br />
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch pl-[26px] pr-3 pt-[29px] pb-6 flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
          <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <div className="w-6 h-6 overflow-hidden" />
          </div>
          <div className="self-stretch h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
            <div
              className={`w-[237px] text-white text-[15px] font-semibold ${inter.className} leading-[18px]`}
            >
              Graphics Design
            </div>
            <div
              className={`w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal ${inter.className} leading-[21px]`}
            >
              creating visually compelling content using typography, images,
              colors, and layouts to communicate messages effectively across
              various mediums.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
