"use client";

import React from "react";

export default function About({
  inter,
  montserrat,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inter: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  montserrat: any;
}) {
  return (
    <section
      id="about"
      className="w-dvw h-auto md:w-[840px] md:h-[481px] flex flex-col items-center gap-8 justify-center"
    >
      <div className=" w-full left-[329px] top-0  flex-col justify-start items-center inline-flex">
        <div
          className={`text-white text-4xl mb-2 md:text-[45px] font-extrabold ${inter.className} font-inter`}
        >
          About Me
        </div>
        <div
          className={`text-[#4fc3f7] text-sm font-semibold ${inter.className} font-inter`}
        >
          Get to know me
        </div>
      </div>
      <div
        className={`w-dvw p-3 md:w-[840px] left-0 top-[111px]  text-center text-[#e1e1e1] text-[17px] font-medium ${inter.className} font-inter leading-[25px] flex flex-col gap-5 `}
      >
        <h2 className="text-3xl font-bold ">
          Hi, I&apos;m Eyosias. <br className="md:hidden" />
          Nice to meet you!{" "}
        </h2>

        <p>
          Since starting my journey as a designer and developer, I’ve worked on
          AI-powered chatbots, recipe-finding apps, and branding projects for
          businesses. I thrive at the intersection of design and development,
          creating intuitive, impactful digital experiences. I’m naturally
          curious, always learning, and passionate about turning ideas into
          reality.
        </p>
      </div>
      <div className="w-[216px] h-[55px] p-2.5 left-[340px] top-[426px]  rounded-[55px] border border-[#4fc3f7] justify-center items-center gap-2.5 inline-flex hover:bg-[#4fc3f7] hover:text-white transition-all duration-300 cursor-pointer">
        <a
          href="/pdf/Resume.pdf" // Correct path
          download="my_Resume.pdf" // Suggested filename
          target="_blank"
        >
          <div
            className={`text-white text-[15px] font-medium ${montserrat.className} font-montserrat`}
          >
            Download Resume
          </div>
        </a>
      </div>
    </section>
  );
}
