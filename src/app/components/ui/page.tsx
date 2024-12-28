import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuLink } from "react-icons/lu";

export default function Ui() {
  const ui = [
    {
      title: "Office of Federal Auditor General",
      description:
        "Designed the User Interface and the User Experience for their offical website",
      image: "/images/webdev2.jpg",
      link: "https://www.figma.com/design/IiWRsyobjpwxLBZPmqSY1Q/ofag-teamm?node-id=0-1&t=umJygedh3CEVkgZo-1",
    },
    {
      title: "VerseWise",
      description:
        "Designed the User Interface and the User Experience for RAG Based AI Chatbot Website to answer your biblical questions",
      image: "/images/webdev2.jpg",
      link: "https://www.figma.com/design/yR7SMTRdxPDDlYyiO0I5ci/VERSEWise-2.0?node-id=0-1&t=a4Bzfqkm8ZbXtU2S-1",
    },
    {
      title: "Turumba",
      description:
        "Designed the User Interface and the User Experience for A mentoring platform by Great Comission Ethiopia",
      image: "/images/webdev2.jpg",
      link: "https://www.figma.com/design/agU0weaXl50Gj0SwvcZt2p/Soul-Sync-Design?node-id=579-104583&t=qdCfzy8RhCdsr2Z2-1",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-10 w-full justify-start items-end">
        {ui.map((item, index) => (
          <div
            key={index}
            className="w-full md:flex-col h-full justify-between md:items-start p-2 gap-4 flex"
          >
            <div className="w-fit h-full flex-col justify-center items-center gap-8">
              <Image
                className="self-stretch w-[140px] md:w-full md:h-[200px] "
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
