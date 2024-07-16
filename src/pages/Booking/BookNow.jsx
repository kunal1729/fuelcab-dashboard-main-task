import React from "react";
import { useNavigate } from "react-router-dom";


export default function BookNow(){

  const navigate = useNavigate();

  function handleBooking(){
    navigate("/booking")
  }

    return (
        <section className="w-full flex md:flex-row flex-col md:px-20 px-8 md:pt-18 pt-10 text-white">
            <span className="text-black text-[4rem] md:w-[35%] w-auto">
                FCI.
            </span>
            <span className="md:w-[55%] w-auto md:mt-auto mt-2">
              <h2
              className="text-[#0D2620] md:text-[2.6rem] text-[2rem] leading-[3rem] tracking-[0.5px]">
            Restock with just a few clicks. Buy now and get back on the road without delay.
              </h2>
              <button onClick={handleBooking} className="mt-10 text-xl bg-[#1D523B] px-10 py-4">
            Book Now
          </button>
            </span>
        </section>
    )
}