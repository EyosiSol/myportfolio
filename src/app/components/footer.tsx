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
    <div className="w-dvw md:w-fit md:h-[242px] flex-col justify-start items-center gap-10 inline-flex border border-blue-500">
      <div className="justify-between h-auto w-full px-2 items-center gap-2 md:gap-[266px] inline-flex">
        <div
          className={`w-fit h-fit md:w-[693px] text-[#dedede] text-xl md:text-[48px] font-medium ${inter.className} md:capitalize md:leading-[66.78px] md:tracking-[4.41px]`}
        >
          Let’s <br />
          Work <br className="md:hidden"/>Together
        </div>
        <div className="w-fit h-auto py-2 md:h-[76.24px] flex flex-col justify-center items-center gap-2 border border-[#484e53] rounded-[15px] px-2">
          <a
            href={gmailURL}
            target="_blank"
            className="flex flex-row justify-center items-center gap-1"
          >
            <div className="w-fit h-10 left-[27px] top-[19px] flex flex-row justify-center items-center gap-2">
              <div className="w-8 h-8 left-0 top-[7px]  flex-col justify-start items-start inline-flex overflow-hidden">
                <div className=" w-4 h-4 md:w-8 md:h-8">
                  <FcGoogle className=" w-4 h-4 md:w-8 md:h-8 " />
                </div>
              </div>
              <div className="w-fit h-10 text-justify text-[#c8c8c8] md:text-[24.90px] font-normal leading-[37.10px]">
                eyosila123@gmail.com
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-fit flex-col justify-between md:justify-start items-center gap-9 flex border border-green-500">
        <div className=" px-4 w-full md:w-fit justify-between md:justify-between md:gap-[685px] flex">
          <div className="w-fit md:w-[285px] h-auto md:h-[26px] text-[#a9a9a9]  text-s md:text-base font-normal lowercase leading-normal tracking-tight">
            ©2024 <br className="block md:hidden" />All rights reserved.
            
          </div>
          <div className=" w-fit md:w-[244px] md:h-8 flex flex-row items-center gap-4">
            <a href={linkedinURL} target="_blank">
              <FaLinkedin className="w-6 md:w-8 md:h-8 left-[53px] top-0 " />
            </a>
            <a href={githubURL} target="_blank">
              <FaGithub className="md:w-8 md:h-8 left-[212px] top-0 " />
            </a>
            <a href={twitterURL} target="_blank">
              <FaTwitter className="md:w-8 md:h-8 left-0 top-0 " />
            </a>
            <a href={instagramURL} target="_blank">
              <FaInstagram className="md:w-8 md:h-8 left-[159px] top-0 " />
            </a>
            <a href={telegramURL} target="_blank">
              <FaTelegramPlane className="md:w-8 md:h-8 left-[297px] top-0 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
