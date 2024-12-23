"use client";

import { Poppins, Montserrat, Inter } from "next/font/google";

import { useState } from "react";
import Intro from "./components/intro";
import About from "./components/About";
import WhatIdo from "./components/whatIdo";
import Project from "./components/project";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export default function Home() {
  const [show, setShow] = useState<string>("webdev");

  const handleshow = (e: unknown) => {
    setShow(e as string);
  };
  console.log(show);
  return (
    <div className="flex flex-col items-center justify-center gap-36">
      <Intro poppins={poppins} montserrat={montserrat} />
      <About inter={inter} montserrat={montserrat} />
      <WhatIdo inter={inter} />
      <Project show={show} handleshow={handleshow} />
    </div>
  );
}

// -- border border-[#2a2a2a]
