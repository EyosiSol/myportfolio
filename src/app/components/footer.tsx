"use client";
import React from "react";
import { Inter } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });
const gmailURL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=eyosila123@gmail.com&su=Hello+Eyosias+Solomon&body=I+am+reaching+out+to+connect+with+you.";
const linkedinURL =
  "https://www.linkedin.com/in/eyosias-solomon-lale-2b5080216/";
const githubURL = "https://github.com/EyosiSol";
const twitterURL = "https://x.com/kefyibel";
const instagramURL = "https://www.instagram.com/_kefyibel/";
const telegramURL = "https://t.me/the_Kaleidoscope";

export default function footer() {
  return (
    <div className="h-[242px] flex-col justify-start items-center gap-10 inline-flex">
      <div className="justify-center items-center gap-[266px] inline-flex">
        <div
          className={`w-[693px] text-[#dedede] text-[48px] font-medium ${inter.className} capitalize leading-[66.78px] tracking-[4.41px]`}
        >
          Let’s <br />
          Work Together -{" "}
        </div>
        <div className="w-fit h-[76.24px] flex flex-col justify-center items-center gap-2 border border-[#484e53] rounded-[15px] px-2">
          <a
            href={gmailURL}
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <div className="w-fit h-10 left-[27px] top-[19px] flex flex-row justify-center items-center gap-2">
              <div className="w-8 h-8 left-0 top-[7px]  flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-8 h-8">
                  <FcGoogle className="w-8 h-8 " />
                </div>
              </div>
              <div className="w-fit h-10 text-justify text-[#c8c8c8] text-[24.90px] font-normal leading-[37.10px]">
                eyosila123@gmail.com
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-9 flex">
        <div className="w-full h-[0px] border border-[#484e53]"></div>
        <div className="justify-start items-end gap-[685px] inline-flex">
          <div className="w-[285px] h-[26px] text-[#a9a9a9] text-base font-normal lowercase leading-normal tracking-tight">
            ©2024 All rights reserved.
            <br />
          </div>
          <div className="w-[244px] h-8 flex flex-row items-center gap-4">
            <a href={linkedinURL} target="_blank">
              <FaLinkedin className="w-8 h-8 left-[53px] top-0 " />
            </a>
            <a href={githubURL} target="_blank">
              <FaGithub className="w-8 h-8 left-[212px] top-0 " />
            </a>
            <a href={twitterURL} target="_blank">
              <FaTwitter className="w-8 h-8 left-0 top-0 " />
            </a>
            <a href={instagramURL} target="_blank">
              <FaInstagram className="w-8 h-8 left-[159px] top-0 " />
            </a>
            <a href={telegramURL} target="_blank">
              <FaTelegramPlane className="w-8 h-8 left-[297px] top-0 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
