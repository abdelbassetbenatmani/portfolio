import Image from "next/image";
import React from "react";
import ProjectDialog from "./ProjectDialog";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  tags?: string[];
  slides:any[]
}

const ProjectCard = ({ title, description, image, link, tags, githubLink ,slides}: ProjectCardProps) => {
  return (
    <div className="rounded-lg h-[404px] flex flex-col justify-between  bg-white p-4 shadow-md shadow-black  cursor-pointer hover:shadow-lg duration-500 group">
      <div className="relative w-full h-64 rounded-lg ">
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
          className=" rounded-lg"
        />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-dark">{title}</h3>
          {tags && (
            <div className="flex gap-2 mt-2">
              {tags.slice(0,2).map((tag, index) => (
                <span key={index} className="bg-theme group-hover:bg-dark  font-medium px-2 py-1 text-sm text-white rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <ProjectDialog
          githubLink={githubLink}
          title={title}
          description={description}
          image={image}
          link={link}
          tags={tags}
          slides={slides}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
