import Image from "next/image";
import { Poppins, Montserrat, Inter } from "next/font/google";

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
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="w-fit h-fit p-20 gap-4 flex flex-col items-center justify-center left-0 top-0  bg-[url('/images/Pattern.png')] bg-cover bg-center rounded-[500px]">
        <Image
          className="w-[202px] h-[197px] left-[421px] top-[137px]  border border-red-500 rounded-full"
          src="/profile.png"
          alt="profile"
          width={202}
          height={197}
        />
        <div
          className={`left-[298px] top-[334px] text-white text-[63px] font-bold ${poppins.className} font-poppins`}
        >
          Eyosias Solomon{" "}
        </div>
        <div
          className={`left-[414px] top-[429px] text-[#4fc3f7] text-[26px] font-semibold ${poppins.className} font-poppins`}
        >
          Frontend Developer | UI/UX Designer🧙‍♂️
        </div>
        <div
          className={`w-[793px] h-[90px] left-[125px] top-[476px] text-center text-[#e1e1e1] text-[19px] font-medium ${poppins.className} font-poppins leading-[30px]`}
        >
          A passionate Frontend Developer and UI/UX Designer with a knack for
          creating user-friendly and visually appealing web interfaces. and also
          passionate about learning new technologies and frameworks.
        </div>
        <div className="w-[187px] h-[55px] p-2.5 left-[428px] top-[606px]  rounded-[75px] border border-[#4fc3f7] justify-center items-center gap-2.5 inline-flex hover:bg-[#4fc3f7] hover:text-white transition-all duration-300 cursor-pointer  ">
          <div
            className={`text-white text-[15px] font-medium   ${montserrat.className} font-montserrat`}
          >
            Contact Me
          </div>
        </div>
      </div>
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
          className={`w-[840px] left-0 top-[111px]  text-center text-[#e1e1e1] text-[17px] font-medium ${inter.className} font-inter leading-[25px]`}
        >
          Hi there! I&apos;m [Your Name], a data scientist specializing in data
          analytics, predictive modeling, natural language processing, machine
          learning, and AI chatbots. With a passion for unraveling insights from
          complex datasets, I&apos;m dedicated to helping businesses make
          informed decisions and stay ahead in today&apos;s data-driven world.
          <br />
          <br />I bring a blend of technical expertise, hands-on experience, and
          a commitment to clear communication to every project. Whether
          it&apos;s uncovering hidden patterns, predicting future trends, or
          automating processes with AI, I&apos;m here to help you harness the
          full potential of your data.
          <br />
          <br />
          Let&apos;s work together to transform your data into actionable
          insights that drive real results. Get in touch, and let&apos;s start
          unlocking the power of your data today!
        </div>
        <div className="w-[216px] h-[55px] p-2.5 left-[340px] top-[426px]  rounded-[55px] border border-[#4fc3f7] justify-center items-center gap-2.5 inline-flex hover:bg-[#4fc3f7] hover:text-white transition-all duration-300 cursor-pointer">
          <div
            className={`text-white text-[15px] font-medium ${montserrat.className} font-montserrat`}
          >
            Download Resume
          </div>
        </div>
      </div>
    </div>
  );
}
