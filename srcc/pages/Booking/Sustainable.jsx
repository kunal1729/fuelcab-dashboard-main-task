import React from "react";

export default function Sustainable() {
  return (
    <div className="bg-[url('https://enua.de/wp-content/uploads/2022/01/products.jpg')] mt-10 md:mx-20 mx-4 md:px-10 px-6 py-2 bg-cover">
      <div className="flex justify-between items-center border-b-[1px] py-4 px-2">
        <h2 className="text-white text-[0.9rem] leading-[1.3rem]">
          Sustainability
        </h2>
        <button className="rounded-[3rem] px-4 py-2 border-[0.5px] border-white-900 text-white text-[1rem] leading-[1.5rem]">
          <a
            href="https://en.wikipedia.org/wiki/Sustainable_development"
            target="_blank"
          >
            Know More
          </a>
        </button>
      </div>
        <h2 className="text-white md:text-[1.5rem] text-[1.1rem] md:leading-[2.5rem] leading-[1.5rem] md:px-6 px-auto py-8">
          FuelCab, a provider of on-demand fuel delivery, is dedicated to
          promoting sustainable development. The company strives to reduce
          carbon emissions by optimizing fuel transportation and utilizing
          eco-friendly vehicles. By encouraging energy efficiency and the
          adoption of renewable energy sources, FuelCab aims to minimize fuel
          consumption and reliance on fossil fuels.
        </h2>
    </div>
  );
}
