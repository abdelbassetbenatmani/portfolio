"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import SubTitle from "./SubTitle";
import { Effect } from "./effects/FirstEffect";
import Link from "next/link";
import { OrbitingCirclesDemo } from "./magicui/ObitingCircle";

const Hero = () => {
  const downloadCV = () => {
    window.open("/Abdelbasset_resume.pdf", "_blank");
  };

  return (
    <div id="home" className="min-h-screen w-full gredient overflow-hidden pt-[150px]">
      <div className="container relative mx-auto px-3 gap-x-10 h-full flex flex-col xl:flex-row justify-between items-center text-white">
       
        <div>
          <SubTitle>Abdelbasset Benatmani</SubTitle>
          <h1 className="text-white uppercase my-3 text-3xl  xl:text-7xl lg:leading-normal font-extrabold">
            <span className="text-white">Hi, {" I'm Abdelbasset "} </span>
            <br></br>
            <span className="text-theme">{" I'm a "}</span>{" "}
            <TypeAnimation
              sequence={["Web Developer", 1000, "Full Stack", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-theme"
            />
          </h1>
          <p>
            I'm a full stack web developer with a passion for building beautiful websites. Skilled in
            JavaScript,Nextjs, React, and Node.js, I enjoy solving complex problems and creating user-friendly
            solutions. My goal is to create web applications that meet client needs and provide an enjoyable
            user experience.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <Link href="#contact">
              <Button className="flex items-center gap-x-3 justify-center w-full">
                <span>get in touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px">
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </Button>
            </Link>
            <Button onclick={downloadCV} className="flex items-center gap-x-3 justify-center">
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                <g data-name="93.Download">
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
                  />
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="M7 17h10v2H7zM12 15.414l-4.707-4.707 1.414-1.414L12 12.586l3.293-3.293 1.414 1.414L12 15.414z"
                  />
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="M11 5h2v9h-2z"
                  />
                </g>
              </svg>
            </Button>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <div className="w-12 h-12 rounded-full border-2 bg-[#171515] border-white relative flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
              <Link href="https://github.com/abdelbassetbenatmani">
                <Image src="/github-2.svg" width={40} height={40} alt="github" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white relative bg-[#0077B5] flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
              <Link href="https://www.linkedin.com/in/abdelbasset-benatmani/">
                <Image src="/linkedin.svg" width={25} height={25} alt="linkedin" className="invert" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-full border-2 bg-[#1877F2] border-white relative flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
              <Link href="https://www.facebook.com/abdelbasset.abdelbasset.355/">
                <Image src="/facebook.svg" width={25} height={25} alt="facebook" />
              </Link>
            </div>
          </div>
        </div>

        <OrbitingCirclesDemo/>
      </div>
    </div>
  );
};

export default Hero;
