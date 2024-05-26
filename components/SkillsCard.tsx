import React from "react";

interface SkillsCardProps {
  svg: React.ReactNode;
  name: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ svg, name }) => {
  return (
    <div className="bg-[#112538] shadow-sm group border-2 border-heading rounded-md p-6 w-[150px] cursor-pointer hover:border-theme hover:border-2 duration-300 hover:-translate-y-2">
      {svg}
      <p className="text-white text-center mt-3 font-semibold text-lg group-hover:text-theme duration-300">
        {name}
      </p>
    </div>
  );
};

export default SkillsCard;
