"use client";

import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { ProjectCardProps } from "./ProjectCard";
import Link from "next/link";
import Button from "./Button";
import { EmblaOptionsType } from "embla-carousel";

import "./carousel/embla.css";
import EmblaCarousel from "./carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;


const ProjectDialog = ({ description, image, link, title, tags, githubLink,slides }: ProjectCardProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-dark rounded-full text-white min-w-12 min-h-12 w-12 h-12 flex items-center justify-center"
        onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7-7l7 7l-7 7"
          />
        </svg>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative  z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen overflow-auto items-center justify-center pt-[270px] lg:pt-4 p-4">
          <div className="flex w-full min-h-full items-center justify-center">
            <DialogPanel className="mx-4 w-full max-w-6xl relative space-y-4 border bg-white p-4 rounded-lg">
              <div className="relative mt-7 flex items-center justify-between flex-col lg:flex-row gap-4">
                <div className="relative lg:min-w-[500px] lg:h-[420px] rounded-lg overflow-hidden">
                  <EmblaCarousel
                    slides={slides}
                    options={OPTIONS}
                    renderSlide={(item, index) => (
                      <div key={index} className="relative w-full h-full">
                        <Image
                          src={item}
                          alt={title}
                          width={500}
                          height={420}
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    )}
                  />
                </div>

                <div>
                  <DialogTitle className="font-bold text-4xl pb-4 ">{title}</DialogTitle>
                  <hr />
                  <Description className="pt-4">{description}</Description>

                  <p className="my-3">Languages:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-dark  font-semibold px-2 py-1 text-sm text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col lg:flex-row mt-6 items-center justify-center  gap-4">
                    <Link className="w-full" href={link}>
                      <Button className="w-full">Live Demo</Button>
                    </Link>
                    {githubLink && (
                      <Link className="w-full" href={githubLink}>
                        <Button className="w-full">Source Code</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="absolute top-2 right-4 bg-theme rounded-full text-white w-8 h-8 flex items-center justify-center"
                onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectDialog;
