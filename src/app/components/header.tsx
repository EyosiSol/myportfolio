"use client";

import { useState } from "react";
import * as React from "react";
import { MenuIcon, Moon, Sun, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Oleo_Script, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

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

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-full lg:w-full h-fit justify-between items-center flex">
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
            href="/"
            className="text-[24px] font-normal text-wrap md:text-nowrap md:w-fit w-10"
          >
            Eyosias Solomon
          </Link>
        </div>
        <div className="hidden md:flex justify-start items-center gap-[50px] ">
          <div className={`text-lg font-semibold ${montserrat.className}`}>
            <Link
              href="/"
              className={`relative ${
                pathname === "/" ? "text-[#4fc3f7]" : "text-[#c1c1c1]"
              } hover:text-[#4fc3f7] transition-colors`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4fc3f7]"></span>
              )}
            </Link>
          </div>
          <div
            className={`text-lg font-semibold ${montserrat.className} h-fit`}
          >
            <Link
              href="/about"
              className={`relative  ${
                pathname === "/about" ? "text-[#4fc3f7]" : "text-[#c1c1c1]"
              } hover:text-[#4fc3f7] transition-colors mb-1`}
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4fc3f7]"></span>
              )}
            </Link>
          </div>
          <div className={`text-lg font-semibold ${montserrat.className}`}>
            <Link
              href="/projects"
              className={`relative ${
                pathname === "/projects" ? "text-[#4fc3f7]" : "text-[#c1c1c1]"
              } hover:text-[#4fc3f7] transition-colors`}
            >
              Projects
              {pathname === "/projects" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4fc3f7]"></span>
              )}
            </Link>
          </div>
          <div className={`text-lg font-semibold ${montserrat.className}`}>
            <Link
              href="/myservice"
              className={`relative ${
                pathname === "/myservice" ? "text-[#4fc3f7]" : "text-[#c1c1c1]"
              } hover:text-[#4fc3f7] transition-colors`}
            >
              My Service
              {pathname === "/myservice" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4fc3f7]"></span>
              )}
            </Link>
          </div>
          <div className="w-[126px] h-[45px] p-2.5 hover:bg-[#4fc3f7] hover:text-black rounded-[9px] border border-[#4fc3f7] justify-center items-center gap-2.5 flex cursor-pointer">
            <div
              className={`text-[15px] light:text-black dark:text-white font-semibold ${montserrat.className}`}
            >
              Contact Me
            </div>
          </div>
        </div>

        <div className="w-fit h-[30px] relative flex items-center justify-center">
          <Button
            variant="outline"
            size="sm"
            className="w-12 h-12 bg-transparent border-none"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
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
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
                About
              </Link>
              <Link href="/projects" onClick={() => setIsOpen(!isOpen)}>
                Projects
              </Link>
              <Link href="/myservice" onClick={() => setIsOpen(!isOpen)}>
                My Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
