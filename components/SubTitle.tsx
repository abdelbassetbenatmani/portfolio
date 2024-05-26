import React from "react";

const SubTitle = ({ children }: { children: string }) => {
  return <span className="tracking-widest font-medium py-1.5 px-3 rounded-md uppercase bg-blue">
    {children}
  </span>;
};

export default SubTitle;
