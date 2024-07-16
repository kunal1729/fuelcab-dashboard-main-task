import React from "react";

export default function Section1() {
  return (
    <section className="w-full flex md:flex-row justify-between flex-col md:px-24 px-8 md:py-20 py-10">
      <h2 className="text-[#0D2620] font-[500] text-[2.5rem] md:w-[45%] leading-[2.6rem] w-auto">
        Join the FuelCab India Revolution.
      </h2>
      <article className="md:w-[45%] w-auto md:mt-auto mt-2">
        <h3 className="text-[#0D2620] text-[1rem] leading-[1.6rem] tracking-[0.5px]">
          Embark on a journey towards a greener and more sustainable future with
          FuelCab. Whether you are an individual, a business, or a government
          entity, we have the expertise and solutions to transform your
          transportation operations. Contact us today to explore how we can
          partner together and drive innovation in the transportation industry.
        </h3>
      </article>
    </section>
  );
}
