import React from "react";

const Card = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="bg-[#112538] border border-white rounded-md p-4 text-white w-[150px] cursor-pointer hover:bg-dark duration-200">
      <h3 className=" text-3xl font-semibold">{title}+</h3>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default Card;
