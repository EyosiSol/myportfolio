import React from "react";

export default function footer() {
  return (
    <div className="h-[242px] flex-col justify-start items-center gap-10 inline-flex">
      <div className="justify-center items-center gap-[266px] inline-flex">
        <div className="w-[693px] text-[#dedede] text-[63px] font-medium font-['Inter'] capitalize leading-[66.78px] tracking-[4.41px]">
          Let’s <br />
          Work Together -{" "}
        </div>
        <div className="w-[310px] h-[76.24px] relative">
          <div className="w-[310px] h-[76.24px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[15px] border-2 border-[#484e53]" />
          <div className="w-[283px] h-10 left-[27px] top-[19px] absolute">
            <div className="w-6 h-6 left-0 top-[7px] absolute flex-col justify-start items-start inline-flex overflow-hidden">
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="w-[244px] h-10 left-[39px] top-0 absolute text-justify text-[#c8c8c8] text-[24.90px] font-normal font-['Inter'] leading-[37.10px]">
              Georgy@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-9 flex">
        <div className="w-[1512px] h-[0px] border border-[#484e53]"></div>
        <div className="justify-start items-end gap-[685px] inline-flex">
          <div className="w-[285px] h-[26px] text-[#a9a9a9] text-base font-normal font-['Inter'] lowercase leading-normal tracking-tight">
            © 2023 All rights reserved.
            <br />
          </div>
          <div className="w-[244px] h-8 relative">
            <div className="w-8 h-8 left-[53px] top-0 absolute"></div>
            <div className="w-8 h-8 left-[212px] top-0 absolute"></div>
            <div className="w-8 h-8 left-0 top-0 absolute"></div>
            <div className="w-8 h-8 left-[159px] top-0 absolute"></div>
            <div className="w-8 h-8 left-[106px] top-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
