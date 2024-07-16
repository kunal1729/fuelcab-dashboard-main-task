import React from "react";
import ParkIcon from "@mui/icons-material/Park";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const FEATURES = [
  {
    heading: "Environmental Impact",
    subHeading:
      "At FuelCab, we are driven by our commitment to promoting sustainable practices and reducing our environmental impact.",
    Icon: ParkIcon,
  },

  {
    heading: "Customer Satisfaction",
    subHeading:
      "At FuelCab, customer satisfaction is at the core of our operations. We prioritize providing reliable and convenient fuel delivery services to our customers.",
    Icon: SentimentSatisfiedAltIcon,
  },

  {
    heading: "Social Responsibility",
    subHeading:
      "As a socially responsible company, FuelCab actively engages with the community and supports various social initiatives.",
    Icon: PeopleAltIcon,
  },
];

export default function Section2() {
  return (
    <section className="w-full flex md:flex-row flex-col justify-between md:px-24 px-8 md:py-20 py-10">
      <article className="md:w-[55%] w-auto">
        <h2 className="text-[#0D2620] text-[1rem] leading-[2.4rem] font-semibold">
          What drives us?
        </h2>
        <p className="text-black text-[1rem] leading-[1.5rem]">
          Our motivation
        </p>
        <img
          src="https://enua.de/wp-content/uploads/2021/12/map-1.png"
          alt="map"
          className="mt-6"
        />
      </article>
      <article className="md:w-[45%] w-auto md:mt-auto mt-6">
        {FEATURES.map(({ heading, subHeading, Icon }) => {
          return (
            <section
              key={heading}
              className="mt-4 py-[2.5rem] px-[1.25rem] bg-[#CFD8D2] flex justify-between md:flex-row flex-col"
            >
              <span className="flex justify-center items-center bg-white rounded-[50%] p-4 h-fit md:self-center self-start">
                <Icon fontSize="large" sx={{ color: "#274840" }} />
              </span>
              <span className="md:ml-6 ml-2 md:mt-auto mt-4">
                <h3 className="text-[500] text-[#0D2620] text-[1.3rem] leading-[2rem] tracking-[0.5px]">
                  {" "}
                  {heading}
                </h3>
                <p className="text-black text-[1rem] leading-[1.5rem] mt-2.5">
                  {" "}
                  {subHeading}
                </p>
              </span>
            </section>
          );
        })}
      </article>
    </section>
  );
}
