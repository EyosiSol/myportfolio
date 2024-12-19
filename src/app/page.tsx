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
    <div className="flex flex-col items-center justify-center gap-48">
      <div className="w-fit h-fit p-20 gap-4 flex flex-col items-center justify-center left-0 top-0  bg-[url('/images/Pattern.png')] bg-cover bg-center rounded-[500px]">
        <Image
          className="w-[202px] h-[197px] left-[421px] top-[137px] rounded-full"
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
      <div className="w-[929px] h-[691px] flex-col justify-start items-center gap-9 inline-flex">
        <div className="flex-col justify-start items-center flex">
          <div className="text-white text-[45px] font-extrabold font-['Inter']">
            What I do
          </div>
          <div className="text-[#4fc3f7] text-sm font-semibold font-['Inter']">
            My Services
          </div>
        </div>
        <div className="self-stretch justify-start items-center h-full py-4 gap-5 inline-flex">
          <div className="w-[620px] flex justify-center items-center gap-1 h-fit py-4 bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
            <div className="w-[300px] left-[20px] top-[101px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="left-[20px] top-[38px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-11 h-11 bg-[#f5f8ff] rounded-[9px]" />
                <div className="w-6 h-6 overflow-hidden" />
              </div>
              <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
                Front End Web development
              </div>
              <div className="w-[314px] text-[#e1e1e1] text-sm font-normal font-['Inter'] leading-[21px]">
                Creating user interface and experience of a website application
                using technologies like HTML, CSS, and JavaScript, ensuring
                functionality, responsiveness, and aesthetic appeal.
              </div>
            </div>
            <Image
              className="rounded-[10px]"
              src="/images/webdev2.jpg"
              alt="Web Development"
              width={280}
              height={280}
            />
          </div>
          <div className="w-[289px] h-auto flex justify-center items-center bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
            <div className="w-[289px] py-2 h-full flex-col gap-6 justify-start items-start pl-[26px] inline-flex">
              <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                <div className="w-6 h-6 overflow-hidden" />
              </div>
              <div className="h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
                <div className="w-[237px] text-white text-[15px] font-semibold font-['Inter'] leading-[18px]">
                  Ui/Ux Design
                </div>
                <div className="w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal font-['Inter'] leading-[21px]">
                  Specializing in crafting intuitive, user-friendly interfaces
                  and seamless digital experiences through innovative and
                  thoughtful UI/UX design solutions.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-5 inline-flex">
          <div className="grow shrink basis-0 self-stretch pl-[26px] pr-3 pt-[29px] pb-[25px] flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
            <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div className="self-stretch h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[237px] text-white text-[15px] font-semibold font-['Inter'] leading-[18px]">
                {" "}
                Product Design
              </div>
              <div className="w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal font-['Inter'] leading-[21px]">
                Designing innovative, user-focused digital products that
                seamlessly combine functionality, aesthetics, and usability to
                deliver exceptional experiences.
                <br />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch pl-[26px] pr-[7px] pt-[29px] pb-1.5 flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
            <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div className="self-stretch h-[175px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[237px] text-white text-[15px] font-semibold font-['Inter'] leading-[18px]">
                PCB Design
              </div>
              <div className="w-[270px] h-[121px] text-[#e1e1e1] text-sm font-normal font-['Inter'] leading-[21px]">
                Designing efficient, high-performance PCBs with precision,
                ensuring optimal functionality and reliability for diverse
                electronic applications and innovative solutions
                <br />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch pl-[26px] pr-3 pt-[29px] pb-6 flex-col justify-end items-start gap-[19px] inline-flex bg-gradient-to-br from-[#1b1b1b] to-[#050505] rounded-[10px]">
            <div className="p-2.5 bg-[#f5f8ff] rounded-[9px] justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <div className="w-6 h-6 overflow-hidden" />
            </div>
            <div className="self-stretch h-[157px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[237px] text-white text-[15px] font-semibold font-['Inter'] leading-[18px]">
                Graphics Design
              </div>
              <div className="w-[243px] h-[121px] text-[#e1e1e1] text-sm font-normal font-['Inter'] leading-[21px]">
                creating visually compelling content using typography, images,
                colors, and layouts to communicate messages effectively across
                various mediums.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1144px] h-[900px] flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center flex">
          <div className="text-white text-[45px] font-extrabold font-['Inter']">
            Projects
          </div>
          <div className="text-[#4fc3f7] text-sm font-semibold font-['Inter']">
            Some of my Work
          </div>
        </div>
        <div className="justify-center items-center gap-[55px] inline-flex">
          <div className="w-[193px] h-[55px] p-2.5 bg-[#484e53] rounded-[50px] justify-center items-center gap-2.5 flex">
            <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-normal">
              Machine learning
            </div>
          </div>
          <div className="w-[141px] h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex">
            <div className="text-[#a9a9a9] text-base font-normal font-['Inter'] leading-normal">
              Sql
            </div>
          </div>
          <div className="w-[129px] h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex">
            <div className="text-[#a9a9a9] text-base font-normal font-['Inter'] leading-normal">
              Power BI
            </div>
          </div>
          <div className="w-[129px] h-[55px] p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex">
            <div className="text-[#a9a9a9] text-base font-normal font-['Inter'] leading-normal">
              AI/LLMs
            </div>
          </div>
          <div className="w-56 h-14 p-2.5 rounded-[50px] border border-[#484e53] justify-center items-center gap-2.5 flex">
            <div className="text-[#a9a9a9] text-base font-normal font-['Inter'] leading-normal">
              Spatial Data Science
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-end gap-10 inline-flex">
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <div className="w-[283px] text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Project name/description
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Technology used
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <div className="w-[263px] text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Project name/description
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Web Design / Usability Testing
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <div className="w-[264px] text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Project name/description
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Web Design / Usability Testing
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-end gap-10 inline-flex">
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Educational Platform
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Web Design / Usability Testing
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Educational Platform
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Web Design / Usability Testing
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[354.67px] flex-col justify-start items-start gap-8 inline-flex">
            <Image
              className="self-stretch h-[198.33px]"
              src="/webdev.jpg"
              alt="Project placeholder"
              width={355}
              height={198}
            />
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-[#c1c1c1] text-xl font-bold font-['Inter'] leading-[30px]">
                  Educational Platform
                </div>
                <div className="w-[242px] text-[#a9a9a9] text-sm font-normal font-['Inter'] leading-[21px]">
                  Web Design / Usability Testing
                </div>
              </div>
              <div className="p-[7.53px] origin-top-left rotate-180 bg-[#4fc3f7] rounded-[64.97px] justify-center items-center gap-[9.42px] flex">
                <div className="w-[22.60px] h-[22.60px] relative">
                  <div className="w-[13.18px] h-[13.18px] left-[4.71px] top-[3.30px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[696px] h-[861px] flex-col justify-start items-center gap-10 inline-flex">
        <div className="self-stretch text-center text-white text-[45px] font-extrabold font-['Inter']">
          Get In Touch
        </div>
        <div className="self-stretch text-center text-[#4fc3f7] text-sm font-semibold font-['Inter']">
          Lets work together
        </div>
        <div className="self-stretch h-[710px] flex-col justify-start items-start gap-4 flex">
          <div className="text-white text-lg font-bold font-['Inter'] leading-snug">
            Name
          </div>
          <div className="w-[696px] h-[70px] rounded-[10px] border border-[#d6ddec]" />
          <div className="text-[#8987a1] text-xl font-normal font-['Inter'] leading-[30px]">
            example@email.com
          </div>
          <div className="text-white text-lg font-bold font-['Inter'] leading-snug">
            Email
          </div>
          <div className="w-[696px] h-[70px] rounded-[10px] border border-[#d6ddec]" />
          <div className="text-[#8987a1] text-xl font-normal font-['Inter'] leading-[30px]">
            full name
          </div>
          <div className="text-white text-lg font-bold font-['Inter'] leading-snug">
            Service
          </div>
          <div className="w-[696px] h-[70px] relative">
            <div className="w-[696px] h-[70px] left-0 top-0 absolute rounded-[10px] border border-[#d6ddec]" />
            <div className="left-[33px] top-[20px] absolute justify-start items-center gap-[465px] inline-flex">
              <div className="text-[#8987a1] text-xl font-normal font-['Inter'] leading-[30px]">
                Select a service
              </div>
            </div>
          </div>
          <div className="text-white text-lg font-bold font-['Inter'] leading-snug">
            Message
          </div>
          <div className="w-[696px] h-[222px] rounded-[10px] border border-[#d6ddec]" />
          <div className="w-[696px] py-[19px] bg-white rounded-[10px] justify-center items-center inline-flex overflow-hidden">
            <div className="text-center text-black text-base font-bold font-['Raleway'] leading-normal">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -- border border-[#2a2a2a]
