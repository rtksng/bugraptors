import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CTAButtonProps {
  label?: string;
  onClick?: () => void;
  variant: "primary" | "secondary"; // ← required now
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label = "Get Started Now",
  onClick,
  variant,
}) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer";

  const primaryClasses =
    "custom-bg-color text-white hover:from-blue-700 hover:to-cyan-700";

  const secondaryClasses =
    "bg-transparent border border-[#4d2da8] text-white hover:bg-[#4d2da8]/68";

  const combinedClasses = `${baseClasses} ${
    variant === "primary" ? primaryClasses : secondaryClasses
  }`;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button onClick={onClick} className={combinedClasses}>
        {label}
        <FaArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default CTAButton;
