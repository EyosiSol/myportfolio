"use client";

import React from 'react'

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
    <div className="w-[840px] h-[481px] flex flex-col items-center gap-8 justify-center">
        <div className="left-[329px] top-0  flex-col justify-start items-center inline-flex">
          <div
            className={`text-white text-[45px] font-extrabold ${inter.className} font-inter`}
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
          className={`w-[840px] left-0 top-[111px]  text-center text-[#e1e1e1] text-[17px] font-medium ${inter.className} font-inter leading-[25px] text-justify`}
        >
          Hi there! I&apos;m Eyosias Solomon, a passionate Graphics and UI/UX
          Designer, React Developer, and Electronics Engineer. My expertise
          spans dynamic web applications, intuitive UI/UX designs, and
          innovative solutions that bridge technical precision and creative
          design. Whether crafting visually engaging interfaces or developing
          user-friendly front-end solutions, I&apos;m committed to delivering
          seamless and impactful experiences. I bring a robust background in
          Electrical and Computer Engineering combined with hands-on experience
          in web development, leveraging technologies like React and Next.js. My
          skill set includes a mastery of design tools like Figma and Adobe
          Illustrator, ensuring every project is aesthetically pleasing and
          functionally effective. From developing AI-driven chatbots to crafting
          recipe-finding apps and microprocessor simulations, I thrive on
          turning ideas into reality. Let&apos;s collaborate to create
          exceptional digital experiences that resonate with users and achieve
          your goals. Get in touch today to bring your vision to life!
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
      </div>
  )
}
