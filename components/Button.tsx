import { cn } from "@/lib/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

const Button = ({ children, className, onclick, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onclick}
      className={cn(
        "bg-theme border-2 border-transparent uppercase cursor-pointer text-white font-semibold py-3 px-8 rounded-full duration-300 ease-in-out hover:bg-dark hover:border-white relative",
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
