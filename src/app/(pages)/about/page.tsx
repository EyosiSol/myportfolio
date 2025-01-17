import React from "react";
import Image from "next/image";
import pic from "@images/Pfp.png";
export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <section className="grid grid-cols-2 items-center px-20 mb-10">
        <div>
          <Image src={pic} alt="Eyosias Solomon" className=" w-[500px]" />
        </div>
        <div className="text-justify text-base self-center">
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
      </section>
      <section className="grid grid-cols-3 items-center gap-5 px-20 justify-center">
        <div className="text-justify text-base self-center col-span-2">
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
          your goals. Get in touch today to bring your vision to life! Hi there!
          I&apos;m Eyosias Solomon, a passionate Graphics and UI/UX Designer,
          React Developer, and Electronics Engineer. My expertise spans dynamic
          web applications, intuitive UI/UX designs, and innovative solutions
          that bridge technical precision and creative design. Whether crafting
          visually engaging interfaces or developing user-friendly front-end
          solutions, I&apos;m committed to delivering seamless and impactful
          experiences. I bring a robust background in Electrical and Computer
          Engineering combined with hands-on experience in web development,
          leveraging technologies like React and Next.js. My skill set includes
          a mastery of design tools like Figma and Adobe Illustrator, ensuring
          every project is aesthetically pleasing and functionally effective.
          From developing AI-driven chatbots to crafting recipe-finding apps and
          microprocessor simulations, I thrive on turning ideas into reality.
          Let&apos;s collaborate to create exceptional digital experiences that
          resonate with users and achieve your goals. Get in touch today to
          bring your vision to life!
        </div>
        <Image src={pic} alt="Eyosias Solomon" className=" w-[500px" />
      </section>
      <section>
        <div className="text-justify text-base self-center px-20">
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
      </section>
    </div>
  );
}
