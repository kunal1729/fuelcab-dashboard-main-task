import React from "react";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

export default function Hero() {
  return (
    <section className="px-14 py-10 text-black">
      <div className="w-full border rounded-md">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
        >
          <LazyLoad>
            <div className="md:h-[90vh]">
              <img
                src="/Images/b-2.png"
                className="w-full h-full object-fit rounded-md"
                alt="#"
                loading="lazy"
              />
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="md:h-[90vh]">
              <img
                src="/Images/b-1.png"
                className="w-full h-full object-fit rounded-md"
                alt="#"
                loading="lazy"
              />
            </div>
          </LazyLoad>
        </Carousel>
      </div>
    </section>
  );
}
