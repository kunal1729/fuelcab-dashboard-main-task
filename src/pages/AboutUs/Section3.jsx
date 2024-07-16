import React, { useState } from "react";
import ShopIcon from "@mui/icons-material/Shop";
import MapIcon from "@mui/icons-material/Map";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const steps = [
  {
    label: "Place Your Order for On-Demand Fuel Delivery",
    description: `Visit our website or download our mobile app to place your order for on-demand fuel delivery.`,
    Icon: ShopIcon,
  },
  {
    label: "Track Your Delivery and Prepare for Arrival",
    description:
      "Receive real-time updates on the status of your fuel delivery through our tracking system.",
    Icon: MapIcon,
  },
  {
    label: "Receive Safe and Convenient Fuel Delivery",
    description: `Our trained professionals will arrive at your designated location with the fuel you ordered.`,
    Icon: LocalShippingIcon,
  },
];

export default function Ads() {
  return (
    <section className="md:px-24 px-4 mt-10 bg-[#0A3523] py-10">
      <div className="flex justify-between items-center border-b-[1px] py-4 px-2">
        <h2 className="text-white text-[0.9rem] leading-[1.3rem]">
          One click booking
        </h2>
      </div>
      <section className="flex justify-between px-4 py-10 gap-12 md:flex-row flex-col ">
        <article className="md:w-[40%] text-white md:text-[2.6rem] text-[2rem] leading-[2.5rem] tracking-[0.5px]">
          <h3 className="mb-4">
            Fast and reliable on-demand fuel delivery right to your doorstep,
            ensuring convenience and peace of mind.
          </h3>
        </article>
        <Stepper activeStep={-1} orientation="vertical" className="md:w-[60%]">
          {steps.map((step, index) => (
            <Step key={step.label} expanded>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <div className="mt-4 py-[1.5rem] px-[1.25rem] bg-[#ffffff12] flex justify-between md:flex-row flex-col">
                  <span className="flex justify-center items-center bg-white rounded-[50%] p-4 h-fit md:self-center self-start">
                    <step.Icon fontSize="large" sx={{ color: "#274840" }} />
                  </span>
                  <span className="p-4">
                    <h4 className="text-[500] text-white text-[1.1rem] leading-[2rem]">
                      {step.description}
                    </h4>
                  </span>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </section>
    </section>
  );
}
