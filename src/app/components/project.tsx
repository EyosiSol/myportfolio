"use client";

import WebDev from "./web/page";
import Ui from "./ui/page";
import PCB from "./pcb/page";

type Props = {
  show: string;
  handleshow: (newValue: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inter: any;
};
export default function project({ show, handleshow, inter }: Props) {
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
    <section
      id="projects"
      className="px-2 w-dvw md:max-w-[1000px] h-fit gap-10 flex-col justify-between items-center inline-flex"
    >
      <div className="flex-col justify-start items-center flex gap-2">
        <div
          className={`text-white text-3xl md:text-[45px] font-extrabold ${inter.className} font-inter`}
        >
          Projects
        </div>
        <div
          className={`text-[#4fc3f7] text-xs md:text-sm font-semibold ${inter.className} font-inter`}
        >
          Some of my Work
        </div>
      </div>
      <div className="w-full md:w-fit px-4  items-center justify-between md:gap-[55px] inline-flex">
        <div
          id="Web"
          className={`w-fit h-auto p-2.5 md:px-2.5 px-6 rounded-3xl md:rounded-3xl border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "webdev"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("webdev");
          }}
        >
          <div
            className={`w-fit text-base font-normal ${inter.className} font-inter leading-normal cursor-pointer px-2 flex gap-1`}
          >
            <p>Web</p>
            <p className="hidden md:block">Development</p>
          </div>
        </div>
        <div
          id="Ui"
          className={`w-fit h-auto  p-2.5 md:px-2.5 px-6 rounded-3xl border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "ui"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("ui");
          }}
        >
          <div
            className={`flex gap-1 text-base font-normal ${inter.className} font-inter leading-normal cursor-pointer`}
          >
            <p>Ui/Ux</p> <p className="hidden md:block">Design</p>
          </div>
        </div>
        <div
          id="PCB"
          className={`w-fit h-auto p-2.5 md:px-2.5 px-6 rounded-3xl border border-[#484e53] justify-center items-center gap-2.5 flex cursor-pointer ${
            show === "pcb"
              ? "bg-[#484E53] text-[#F5F5F5]"
              : "bg-[#1b1b1b] text-[#A9A9A9]"
          }`}
          onClick={() => {
            handleshow("pcb");
          }}
        >
          <div
            className={`flex gap-1 text-base font-normal ${inter.className} font-inter leading-normal cursor-pointer`}
          >
            <p>PCB</p> <p className="hidden md:block">Design</p>
          </div>
        </div>
      </div>
      {project()}
    </section>
  );
}
