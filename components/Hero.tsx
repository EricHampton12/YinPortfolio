import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I'm Xiao-Yin Chen",
      "PhD Candidate",
      "Social Science Researcher",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHPWs2twPsUPg/profile-displayphoto-shrink_800_800/0/1589412032667?e=1669852800&v=beta&t=W0HzkHCzANNcX6hW9TwMg5Hkav-cO2zQQXPNkylPouU"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-white-500 pb-2 tracking-[15px]">
          UX Researcher
        </h2>
        <h1 className="text-4xl lg:text6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#fdcdcd" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
