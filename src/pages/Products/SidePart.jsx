import React from "react";
import { MdStars, MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const SidePart = () => {
  return (
    <div className="flex flex-col font-dmsans w-[340px] overflow-y-auto">
      <h2 className="text-[36px] font-semibold leading-[44px]">
        Bathroom & kitchen cleaning
      </h2>
      <span className="flex text-[16px] leading-[24px] items-center my-1">
        <MdStars className="text-purple-800 mr-2 h-5 w-5" />
        <p>4.80 (5.6 M bookings)</p>
      </span>
      <div className="flex items-center bg-gray-100 text-[12px] p-[15px] rounded-[10px] my-2 justify-between">
        <div className="flex items-center gap-3">
          <FaHeart className="text-blue-800" />
          <span>UC Professional Cleaning Guide</span>
        </div>
        <div className="">
          <MdKeyboardArrowRight className="h-5 w-5" />
        </div>
      </div>
      <div className="border border-gray-300 my-4 text-[12px] p-5 rounded-lg">
        <div className="mb-6 flex items-center">
          <div className="text-gray-600 leading-[16px]">Select a service</div>
          <div className="bg-gray-300 h-[1px] flex-grow ml-2"></div>
        </div>

        <div className="flex flex-wrap gap-3 px-4 justify-between">
          <div className="flexflex-col items-center rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647338324380-74da55.png"
              alt="#"
              className="rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="text-gray-600 leading-[16px] my-2 w-[80px]">
              sub heading
            </div>
          </div>
          <div className="flexflex-col items-center rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647338324380-74da55.png"
              alt="#"
              className="rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="text-gray-600 leading-[16px] my-2 w-[80px]">
              sub heading
            </div>
          </div>
          <div className="flexflex-col items-center rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647338324380-74da55.png"
              alt="#"
              className="rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="text-gray-600 leading-[16px] my-2 w-[80px]">
              sub heading
            </div>
          </div>
          <div className="flexflex-col items-center rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1647338324380-74da55.png"
              alt="#"
              className="rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="text-gray-600 leading-[16px] my-2 w-[80px]">
              sub heading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePart;
