import React from "react";

export default function Hero(){
    return (
        <div className="relative bg-no-repeat md:mx-6 flex md:mt-auto mt-2 p-10 mx-2  justify-start items-center md:h-[75vh] h-[50vh]">
            <video autoPlay muted loop src="https://firebasestorage.googleapis.com/v0/b/fuelcab.appspot.com/o/partnership-hero.mp4?alt=media&token=ed54773c-6c76-4846-95d5-e439f15dd189" className="absolute object-cover left-0 w-full h-full"  style={{filter: "brightness(70%)"}}/>

         <h1 className="z-[1] md:w-[40%] w-full font-inter font-semibold lg:text-[53px] md:text-[53px] text-[35px] md:leading-[58px] leading-[48px] tracking-[-0.03em]">
         FuelCab,
         Driving towards a Sustainable Future
            </h1>
      </div>
    )
}