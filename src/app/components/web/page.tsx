import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuLink } from "react-icons/lu";

export default function WebDev() {
  const webDev = [
    {
      title: "My Recipe",
      description: "Food Recipe and step by step guide Website",
      image: "/images/webdev2.jpg",
      link: "https://my-recipies-nu.vercel.app",
      tech: "React, Html, Css, Vercel, Postman",
    },
    {
      title: "VerseWise",
      description: "RAG Based AI Chatbot to answer your biblical questions",
      image: "/images/webdev2.jpg",
      link: "https://versewise.io",
      tech: "React, tailwindCss, WebSocket, Typescript",
    },
    {
      title: "Tic Tac Toe",
      description: " Website to play with your friends",
      image: "/images/webdev2.jpg",
      link: "https://tic-tac-toe-rouge-rho.vercel.app",
      tech: "Javascript, Html, Css, Vercel",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-10 w-full justify-start items-end">
        {webDev.map((item, index) => (
          <div
            key={index}
            className="w-full md:flex-col h-full justify-between md:items-start p-2 gap-4 flex "
          >
            <div className="w-fit h-full flex-col justify-center items-center gap-8">
              <Image
                className="self-stretch max-w-[140px] md:w-[360px] md:h-[200px] "
                src={item.image}
                alt="Project placeholder"
                width={360}
                height={200}
              />
            </div>
            <div className="w-full flex justify-between items-center gap-2">
              <div className="flex-col w-full items-start gap-2 inline-flex">
                <div className="flex-col items-start gap-1 inline-flex">
                  <div className="w-full text-[#c1c1c1] text-sm md:text-xl font-bold font-['Inter'] leading-[30px]">
                    {item.title}
                  </div>
                  <div className="text-[#c1c1c1] text-[12px] md:text-sm font-normal font-['Inter'] leading-[21px]">
                    {item.description}
                  </div>
                </div>
                <div className="w-full text-[#a9a9a9] text-[12px] md:text-sm font-normal font-['Inter'] leading-[21px]">
                  {item.tech}
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuLink />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
