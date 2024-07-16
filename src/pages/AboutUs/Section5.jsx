import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Section5() {
  return (
    <section className="w-full md:px-24 px-4 md:py-20 py-10 bg-[#0A3523] mt-4">
      <div className="flex justify-between items-center border-b-[1px] py-4 px-2">
        <h2 className="text-white text-[0.9rem] leading-[1.3rem]">
          FuelCab International
        </h2>
        {/* <button className="rounded-[3rem] px-4 py-2 border-[0.5px] border-green-900 text-white text-[1rem] leading-[1.5rem]">
          <Link to="#">Know More</Link>
        </button> */}
        <nav>
          <Link
            to="#"
            className="rounded-[3rem] px-4 py-2 border-[0.5px] border-green-900 text-white text-[1rem] leading-[1.5rem]"
          >
            Know More
          </Link>
        </nav>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between md:py-20 py-10">
        <article className="md:w-[40%] w-auto">
          <h2 className="text-white text-[2rem] leading-[2.4rem] font-semibold">
            FCI.
          </h2>
          <h3 className="text-white text-[1rem] leading-[2.4rem] font-semibold">
            Global Fuel Delivery Solutions
          </h3>
          <p className="text-white text-opacity-40 text-[1rem] leading-[1.5rem]">
            Bringing Convenient and Reliable On-Demand Fuel Delivery Services to
            Customers Worldwide.
          </p>
        </article>
        <aside className="md:w-[50%] w-auto md:mt-auto mt-6">
          <img
            src="https://enua.de/wp-content/themes/cannify-dev-wp/img/map.svg"
            alt="map"
            className="w-full text-opacity-40"
          />
        </aside>
      </div>
    </section>
  );
}
