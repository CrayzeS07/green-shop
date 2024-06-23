import React from "react";

interface ButtonType {
  title: string;
  icon?: React.ReactNode; 
  iconPosition?: "prev" | "next";
  Width: number;
  Click?: () => void; 
}

export const ButtonN: React.FC<ButtonType> = ({
  title,
  icon,
  iconPosition,
  Width,
  Click,
}) => {
  return (
    <button
      onClick={Click}
      style={{ width: `${Width}px` }}
      className={`bg-[#46A358] ${
        icon && iconPosition ? "py-[8px]" : "py-[10px]"
      } rounded-[6px] hover:opacity-90 duration-300 flex items-center justify-center space-x-[4px]`}
    >
      {icon && iconPosition === "prev" && icon}
      <span className="font-medium text-[16px] leading-[20.11px] text-[#FFFFFF]">
        {title}
      </span>
      {icon && iconPosition === "next" && icon}
    </button>
  );
};
