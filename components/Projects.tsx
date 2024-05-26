import React from "react";
import SubTitle from "./SubTitle";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projectsList: ProjectCardProps[] = [
  {
    title: "myfloraboard",
    description:
      "MyFloraboard simplifies organizing the plant library with dynamic visual catalogs and filtering tools",
    image: "/projects/myfloraboard/myfloraboard-1.jpeg",
    link: "https://myfloraboard.com/",
    tags: ["Ractjs", "Nodejs", "MySQL", "Express.js", "Tailwindcss", "Typescript", "Zustand",],
    slides: [
      "/projects/myfloraboard/myfloraboard-1.jpeg",
      "/projects/myfloraboard/myfloraboard-2.jpeg",
      "/projects/myfloraboard/myfloraboard-3.jpeg",
    ],
  },
  {
    title: "Taskona - Task Management App",
    description:
      "I created Taskona an efficient and intuitive task management website using the Nextjs and NextjsServer action. Taskona facilitates seamless project and task tracking with a user-friendly interface,  comprehensive analytics. ",
    image: "/projects/taskona/taskona-3.jpeg",
    link: "https://saas-task-managment.vercel.app/",
    githubLink:"https://github.com/abdelbassetbenatmani/Saas-Task-managment",
    tags: ["Nextjs", "MySQL","Clerk", "Tailwindcss", "Typescript", "Zustand"],
    slides: [
      "/projects/taskona/taskona-1.jpeg",
      "/projects/taskona/taskona-2.jpeg",
      "/projects/taskona/taskona-3.jpeg",
    ],
  },
  {
    title: "Learning Management System",
    description:
      "I developed LMS, a dynamic and scalable Learning Management System (LMS) using the MERN stack (MongoDB, Express.js, Nextjs, Node.js). LMS offers a user-friendly interface for seamless course and student management, detailed analytics. Its robust infrastructure ensures secure data handling and supports personalized learning paths, making it an ideal solution for educational institutions and training providers. ",
    image: "/projects/LMS/lms-1.png",
    link: "https://lms-system-wine.vercel.app/",
    tags: ["Nextjs", "Nodejs", "MongoDB", "Express.js","Next-Auth", "Tailwindcss", "Typescript", "Redux Toolkit"],
    githubLink: "https://github.com/abdelbassetbenatmani/lms-system",
    slides: [
      "/projects/LMS/lms-1.png",
      "/projects/LMS/lms-2.png",
      "/projects/LMS/lms-3.png",
      "/projects/LMS/lms-4.png",
    ],
  },
  {
    title: "File Converter (Images and videos)",
    description:
      "I created a file converter that allows users to convert images and videos to different formats. The app supports a wide range of formats, including PNG, JPEG, MP4, and AVI. Users can upload files from their local storage or provide a URL to convert files. The app also provides a download link for the converted files.",
    image: "/projects/File-converter/file-converter-1.jpeg",
    link: "https://file-converter-alpha.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Typescript","@ffmpeg/ffmpeg"],
    githubLink: "https://github.com/abdelbassetbenatmani/file-converter",
    slides: [
      "/projects/File-converter/file-converter-1.jpeg",
      "/projects/File-converter/file-converter-2.jpeg",

    ],
  },
  {
    title: "Cars Show case Website",
    description:
      "I created a car showcase website using Nextjs and Tailwindcss. The website showcases a collection of cars with detailed information about each car. Users can view images, specifications, and features of each car.",
    image: "/projects/Cars-showcase/cars-showcase-1.png",
    link: "https://cars-showcase-gray-ten.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Typescript","HeadlessUi"],
    githubLink: "https://github.com/abdelbassetbenatmani/Cars-showcase",
    slides: [
      "/projects/Cars-showcase/cars-showcase-1.png",
      "/projects/Cars-showcase/cars-showcase-2.png",

    ],
  },
  {
    title: "My Portfolio Website Version 1",
    description:
      "I created a portfolio website using Nextjs and Tailwindcss. The website showcases my projects, skills, and experience. Users can view my work, contact me, and learn more about my background.",
    image: "/projects/Portfolio/portfolio-1.png",
    link: "https://abdelbasset-portfolio.vercel.app/",
    tags: ["Nextjs", "Tailwindcss", "Typescript"],
    githubLink: "https://github.com/abdelbassetbenatmani/Abdelbasset-portfolio",
    slides: [
      "/projects/Portfolio/portfolio-1.png",
      "/projects/Portfolio/portfolio-2.png",
    ],
  },
  {
    title: "Full Ecommerce Backend API",
    description:
      "I created a full ecommerce backend API using Nodejs, Express.js, and MongoDB. The API supports user authentication, product management, order processing, and payment processing. It also provides detailed analytics and reporting features for store owners.",
    image: "/projects/Ecommerce-api/api.jpg",
    link: "https://github.com/abdelbassetbenatmani/Ecommerce-rest-api",
    tags: ["Nodejs", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Stripe", "Morgan", "Nodemailer"],
    githubLink: "https://github.com/abdelbassetbenatmani/Ecommerce-rest-api",
    slides: [
      "/projects/Ecommerce-api/api.jpg",
      "/projects/Ecommerce-api/api.jpg",
    ],
  },
  

];

const Projects = () => {
  return (
    <div id="projects" className="py-16 w-full gredient2 overflow-hidden">
      <div className="container relative mx-auto px-3 gap-x-10 h-full flex justify-between items-center text-white">
        <div className="w-full">
          <SubTitle>My work</SubTitle>
          <h1 className="text-white uppercase my-1.5 text-4xl  lg:leading-normal font-bold">
            Recent <span className="text-theme">projects</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center mt-10 gap-8">
            {projectsList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
