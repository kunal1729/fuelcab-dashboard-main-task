import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Card({
  heading,
  subHeading,
  onClick = () => {},
  Icon,
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer pt-6 pb-14 px-4 pl-6 bg-white relative mx-2 rounded-md border hover:border-gray-400`}
    >
      <div className="flex gap-2 items-center">
        {Icon && <Icon fontSize="medium" sx={{ color: "gray" }} />}
        <span>
          <h1 className="font-[500] text-[1.2rem] trailing-[0.5px]">
            {heading}
          </h1>
        </span>
      </div>
      <p className="text-[#1a1a1a] text-[1rem] mt-2 font-[300]">{subHeading}</p>
      <button
        onClick={onClick}
        className="text-[1rem] font-[500] absolute bottom-6"
      >
        {onClick ? (
          <>
            Explore{" "}
            <ArrowForwardIcon fontSize="small" sx={{ color: "black" }} />
          </>
        ) : (
          "Comming Soon"
        )}
      </button>
    </div>
  );
}
