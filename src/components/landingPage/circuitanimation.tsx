import React from "react";
import mobraptors from "../../assets/circuitimagesvg.svg";

const AnimatedGradientImage: React.FC<{ maxWidth?: string }> = ({ maxWidth = "300px" }) => {
  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient {
            background: linear-gradient(270deg, #8b5cf6, #ec4899, #3b82f6);
            background-size: 600% 600%;
            animation: gradientShift 6s ease infinite;
          }
        `}
      </style>

      <div className="relative inline-block p-2 rounded-lg animate-gradient">
        <img
          src={mobraptors}
          alt="Circuit Image"
          className="block rounded-md"
          style={{ maxWidth }}
        />
      </div>
    </>
  );
};

export default AnimatedGradientImage;
