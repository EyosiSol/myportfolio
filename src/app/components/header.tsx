"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Oleo_Script, Montserrat } from "next/font/google";
import Link from "next/link";

const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-oleo-script",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function Header() {
  const [section, setSection] = useState("intro");
  const [isOpen, setIsOpen] = useState(false);

  // Intersection Observer to track sections
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id); // Update the section state to the current visible section
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div className="w-full md:w-full lg:w-full h-fit justify-between items-center flex sticky top-0 z-50 bg-gray-300 dark:bg-[#1A1A1A] p-4 md:px-20">
      <div className="h-fit w-full md:w-full justify-between items-center  flex  ">
        <div className={`flex items-center gap-3 ${oleoScript.className}`}>
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="w-10 h-10 md:w-20 md:h-20"
          />
          <Link
            href="#intro"
            className="text-[24px] font-normal text-wrap md:text-nowrap md:w-fit w-10"
          >
            Eyosias Solomon
          </Link>
        </div>
        <div className="hidden md:flex justify-start items-center gap-[50px] ">
          {[
            { id: "intro", label: "Home" },
            { id: "about", label: "About" },
            { id: "myservice", label: "My Service" },
            { id: "projects", label: "Projects" },
          ].map(({ id, label }) => (
            <div
              key={id}
              className={`text-lg font-semibold ${montserrat.className}`}
            >
              <Link
                href={`#${id}`}
                className={`relative ${
                  section === id ? "text-[#4fc3f7]" : "text-[#c1c1c1]"
                } hover:text-[#4fc3f7] transition-colors`}
              >
                {label}
                {section === id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4fc3f7]"></span>
                )}
              </Link>
            </div>
          ))}
          <div className="w-[126px] h-[45px] p-2.5 hover:bg-[#4fc3f7] hover:text-black rounded-[9px] border border-[#4fc3f7] justify-center items-center gap-2.5 flex cursor-pointer">
            <div
              className={`text-[15px] light:text-black dark:text-white font-semibold ${montserrat.className}`}
            >
              Contact Me
            </div>
          </div>
        </div>

        <div className="w-fit h-[30px] relative flex items-center justify-center">
          <div className="md:hidden">
            {isOpen ? (
              <div className="md:hidden">
                <XIcon
                  className="w-10 h-10"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            ) : (
              <div className="md:hidden">
                <MenuIcon
                  className="w-10 h-10"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href="#intro" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setIsOpen(!isOpen)}>
                About
              </Link>
              <Link href="#myservice" onClick={() => setIsOpen(!isOpen)}>
                My Service
              </Link>
              <Link href="#project" onClick={() => setIsOpen(!isOpen)}>
                Projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
