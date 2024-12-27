"use client";

import WebDev from "./web/page";
import Ui from "./ui/page";
import PCB from "./pcb/page";

type Props = {
  show: string;
  handleshow: (newValue: string) => void;
};
export default function project({ show, handleshow }: Props) {
  const project = () => {
    switch (show) {
      case "webdev":
        return <WebDev />;
      case "ui":
        return <Ui />;
      case "pcb":
        return <PCB />;
    }
  };

  return (
    <div className="w-[1000px] h-fit gap-10 flex-col justify-between items-center inline-flex">
      <div className="flex-col justify-start items-center flex">
        <div className="text-white text-[45px] font-extrabold font-['Inter']">
          Projects
        </div>
        <div className="text-[#4fc3f7] text-sm font-semibold font-['Inter']">
          Some of my Work
        </div>
      </div>
      <div className="justify-center items-center gap-[55px] inline-flex">
        <div
          id="Web"
          className={`w-fit h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "webdev"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("webdev");
          }}
        >
          <div className="text-base font-normal font-['Inter'] leading-normal cursor-pointer px-2">
            Web Development
          </div>
        </div>
        <div
          id="Ui"
          className={`w-[141px] h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "ui"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("ui");
          }}
        >
          <div className="text-base font-normal font-['Inter'] leading-normal cursor-pointer">
            Ui/Ux Design
          </div>
        </div>
        <div
          id="PCB"
          className={`w-[129px] h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "pcb"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("pcb");
          }}
        >
          <div className=" text-base font-normal font-['Inter'] leading-normal ">
            PCB Design
          </div>
        </div>
      </div>
      {project()}
    </div>
  );
}
