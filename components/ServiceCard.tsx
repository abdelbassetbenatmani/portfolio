import Image from "next/image";
import React from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  image: string;
}

const ServiceCard = ({ icon, image, title, description }: ServiceCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-cover bg-center w-[306px] h-[392px] flex flex-col justify-center items-center gap-4 text-white p-4 rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 duration-200">
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3 rounded-lg pb-8">
        <div className="bg-theme rounded-md flex items-center justify-center w-12 h-12 ">
          {icon}
        </div>
        <h2 className="text-2xl font-bold mt-4 mb-2">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
