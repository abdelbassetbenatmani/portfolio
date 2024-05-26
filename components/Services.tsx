import React from "react";
import SubTitle from "./SubTitle";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const servicesData: ServiceCardProps[] = [
  {
    title: "Full Stack",
    description: "I can build a full-stack web application using MERN stack",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.218 3.216a.75.75 0 1 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43l3-10ZM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0"
          clipRule="evenodd"
        />
      </svg>
    ),
    image: "/services/full-stack.jpg",
  },
  {
    title: "Frontend Development",
    description: "I can build a professional and responsive frontend side",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </g>
      </svg>
    ),
    image: "/services/front-end.jpg",
  },
  {
    title: "Backend Development",
    description: "I can build a scalable and secure backend using Nodejs and Express",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <rect width="8" height="8" x="14" y="14" rx="2" />
          <rect width="8" height="8" x="2" y="2" rx="2" />
          <path d="M7 14v1a2 2 0 0 0 2 2h1m4-10h1a2 2 0 0 1 2 2v1" />
        </g>
      </svg>
    ),
    image: "/services/back-end.jpg",
  },
  {
    title: "Web design",
    description: "I can design a beautiful and user-friendly responsive website",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08m-6.03-1.01c-1.66 0-3 1.35-3 3.02c0 1.33-2.5 1.52-2 2.02c1.08 1.1 2.49 2.02 4 2.02c2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02"
        />
      </svg>
    ),
    image: "/services/web-design.jpg",
  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 w-full gredient overflow-hidden">
      <div className="container relative mx-auto px-3  h-full  text-white">
        <div>
          <SubTitle>Services</SubTitle>
          <h1 className="text-white uppercase my-3 text-4xl  lg:leading-normal font-bold">
            Develope <span className="text-theme">Services</span> i am providing
          </h1>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-10 mt-10">
          {servicesData.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
