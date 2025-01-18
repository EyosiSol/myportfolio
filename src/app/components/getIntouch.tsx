"use client";

import React, { useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function GetIntouch() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  // Handle input changes with proper typing
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      to_name: "Eyosias Solomon",
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      setStatus("Sending...");
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          function (response) {
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            console.log(response);
            setStatus("Email sent successfully");
            setTimeout(() => {
              setStatus("");
            }, 5000);
          },
          function (error) {
            console.log(error);
            setStatus("Failed to send email");
          }
        );
    } catch (error) {
      console.log(error);
      setStatus("Failed to send email");
    }
  };

  return (
    <section
      id="contact"
      className={`w-dvw px-4 md:w-[700px] h-fit md:h-[861px] flex-col justify-start items-center gap-5 md:gap-10 inline-flex ${inter.className} mt-20`}
    >
      <div className="flex flex-col gap-2">
        <div className="self-stretch text-center text-white text-3xl md:text-5xl font-extrabold">
          Get In Touch
        </div>
        <div className="self-stretch text-center text-[#4fc3f7] md:text-xl font-semibold">
          Lets work together
        </div>
      </div>
      <form
        className="w-full h-fit md:h-[710px] flex-col justify-start items-start gap-4 flex"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 w-full md:grid md:grid-cols-5 md:w-full">
          <div className="flex flex-col gap-2 md:col-span-2 md:w-full">
            <label
              htmlFor="name"
              className="text-white text-lg font-bold leading-snug"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 md:h-[70px] rounded-[10px] border border-[#d6ddec] px-4 text-[#8987a1] text-xl font-normal leading-[30px] bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-3 md:w-full">
            <label
              htmlFor="email"
              className="text-white text-lg font-bold leading-snug"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 md:h-[70px] rounded-[10px] border border-[#d6ddec] px-4 text-[#8987a1] text-xl font-normal leading-[30px] bg-transparent"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:col-span-5 md:w-full">
          <label
            htmlFor="message"
            className="text-white text-lg font-bold leading-snug"
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full h-60 md:min-h-[240px] md:h-auto rounded-[10px] border border-[#d6ddec] px-4 py-4 text-[#8987a1] text-xl font-normal leading-[30px] bg-transparent"
            required
          />
        </div>
        <div className="w-full px-28 md:w-full">
          <button
            type="submit"
            className="w-full py-3 md:py-[19px] text-center text-black text-2xl font-bold leading-normal bg-white rounded-[10px] justify-center items-center inline-flex overflow-hidden"
          >
            Send
          </button>
        </div>
        <div className=" w-full flex items-center justify-center">
          {status && <h3>{status}</h3>}
        </div>
      </form>
    </section>
  );
}
