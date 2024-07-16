import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useNavigate } from "react-router-dom";

const FEATURES = [
  {
    heading: "On-Demand Fuel Delivery",
    subHeading:
      "FuelCab brings fuel directly to your location whenever you need it, saving you time and effort.",
    Icon: LocalShippingIcon,
  },

  {
    heading: "Flexible Scheduling",
    subHeading:
      "With FuelCab, you have the flexibility to schedule fuel deliveries that align with your specific needs and preferences.",
    Icon: WatchLaterIcon,
  },

  {
    heading: "Reliable Service",
    subHeading:
      "Count on FuelCab for dependable fuel delivery, ensuring that you never run out of fuel during critical times.",
    Icon: HandshakeIcon,
  },
];

export default function Services() {

  const navigate = useNavigate();

  function handleExplore(){
    navigate("/products")
  }

  return (
    <section className="text-white w-full flex md:flex-row flex-col justify-between md:px-20 px-8 md:py-18 py-10 mt-10 md:mt-auto">
      <div className="md:w-[40%] w-auto">
        <h2 className="text-[#0D2620] text-[2.5rem] leading-[2.4rem] tracking-[1.5px] font-[500]">
          Our Services.
        </h2>
        <p className="mt-6 text-black text-[1rem] leading-[1.5rem]">
          Efficient Fuel Delivery Right to Your Doorstep. Convenience Meets
          Reliability.
        </p>
        <button className="mt-4 text-xl bg-[#1D523B] px-10 py-4" onClick={handleExplore}>
          Explore
        </button>
      </div>
      <div className="md:w-[50%] w-auto md:mt-auto mt-6">
        {FEATURES.map(({ heading, subHeading, Icon }) => {
          return (
            <div
              key={heading}
              className="mt-4 py-[2.5rem] px-[1.25rem] bg-[#CFD8D2] flex justify-between md:flex-row flex-col"
            >
              <span className="flex justify-center items-center bg-white rounded-[50%] p-4 h-fit md:self-center self-start">
                <Icon fontSize="large" sx={{ color: "#274840" }} />
              </span>
              <span className="md:ml-6 ml-2 mt-4">
                <h4 className="text-[500] text-[#0D2620] text-[1.3rem] leading-[2rem] tracking-[0.5px]">
                  {" "}
                  {heading}
                </h4>
                <p className="text-black text-[1rem] leading-[1.5rem] mt-2.5">
                  {" "}
                  {subHeading}
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
