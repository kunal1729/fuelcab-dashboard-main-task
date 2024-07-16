import React, { useRef, useState } from "react";
import LazyLoad from "react-lazyload";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative bg-no-repeat md:mx-6 flex md:mt-auto mt-2 p-10 mx-2 justify-start items-center md:h-[75vh] h-[50vh]">
      <div className="video-wrapper absolute object-cover left-0 w-full h-full">
        <LazyLoad once>
          <video
            autoPlay
            muted
            loop
            onLoadedData={handleVideoLoad}
            src="https://firebasestorage.googleapis.com/v0/b/fuelcab.appspot.com/o/about-us-hero.mp4?alt=media&token=5ea6fa30-6be8-4c14-8a3f-4afd39788c44"
            className="absolute object-cover left-0 w-full h-full"
            alt="FuelCab on-demand fuel delivery service"
          />
        </LazyLoad>
        {!videoLoaded && (
          <div className="">
            <img
              src="/Images/about-us-hero.jpg"
              className="absolute object-cover left-0 w-full h-full"
              alt="#"
            />
          </div>
        )}
        <article
          className="z-[2] absolute top-1/2 transform -translate-y-1/2 w-[35%] left-5 font-inter font-semibold lg:text-[53px] md:text-[53px] text-[35px] md:leading-[58px] leading-[48px] tracking-[-0.03em]"
          aria-live="polite"
        >
          <h1>FuelCab, Revolutionizing Transportation Solutions.</h1>
        </article>
      </div>
    </section>
  );
}