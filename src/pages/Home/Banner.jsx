import React from "react";

const Banner = () => {
  return (
    <div className="md:px-14 px-4 mt-14">
      <div className="w-full h-[400px] flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"
          alt=""
          className="w-full h-full rounded-md transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner;
