import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HandshakeIcon from "@mui/icons-material/Handshake";

const FEATURES = [
  {
    heading: "Sucessfully Fuel Delivered (Litre)",
    subHeading: "2.700 M+",
  },

  {
    heading: "EV charging station setup",
    subHeading: "30.00+",
  },

  {
    heading: "Connect Fuel Station Sucessfully",
    subHeading: "1500.00+",
  },
  {
    heading: "Green Fuel Delivered (Litre)",
    subHeading: "7.400 M+",
  },
  {
    heading: "Franchises Sold",
    subHeading: "20.00+",
  },
];

export default function Section4() {
  return (
    <section className="w-full flex md:flex-row flex-col justify-between md:px-24 px-8 md:py-20 py-10">
      <article className="md:w-[40%] w-auto">
        <h2 className="text-[#0D2620] text-[2.5rem] leading-[2.4rem] tracking-[1.5px] font-[500]">
          Our Achievement
        </h2>
        <p className="mt-6 text-black text-[1rem] leading-[1.5rem]">
          Simplify Your Fueling Needs with Our Efficient and Hassle-Free
          Solutions
        </p>
        <button className="mt-4 text-xl bg-[#1D523B] px-10 py-4">
          Explore
        </button>
      </article>
      <aside className="md:w-[50%] w-auto md:mt-auto mt-6">
        <h3 className="bg-[#bfbfbf12] mb-2 font-[500] text-[#0D2620] text-[1.5rem] leading-[2rem] tracking-[0.5px] p-6 py-8">
          At FuelCab, goals when it comes to fuel management.
        </h3>
        <ul className="list-disc list-inside">
          {FEATURES.map(({ icon, heading, subHeading }, i) => {
            return (
              <li
                key={heading}
                className="flex items-center py-[2rem] px-[1.25rem] bg-[#bfbfbf12] border-t-1"
              >
                {icon}
                <span className="ml-4 text-semibold text-[#0D2620] text-[1rem] leading-[2rem] tracking-[0.5px]">
                  {heading}
                  <br />
                  <span className="font-light text-sm text-gray-600">
                    As of now: {new Date().toLocaleDateString()}
                  </span>
                </span>
                <span className="ml-auto text-[2.2rem] text-[#0D2620]">
                  {subHeading}
                </span>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
}
