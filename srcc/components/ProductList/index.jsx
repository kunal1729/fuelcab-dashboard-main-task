import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Star } from "@mui/icons-material";
import { PRODUCT_UNIT } from "../../constants/product";

const EMPTY_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/fuelcab.appspot.com/o/empty-product.png?alt=media&token=60656eaf-80c4-472b-9636-ca5925b02cfb";

const Item = ({
  product: { productId, unit, unitPrice, imagesURL, id },
  isCategory,
  showPrice,
}) => {

  return (
    <Link
      to={`./product/${id}`}
      className="opacity-0.5 pl-2 w-[240px] min-w-[240px] block"
    >
      <div
        className={`relative bg-white h-[230px] w-full overflow-hidden rounded-md border hover:border-gray-400`}
      >
        <LazyLoad>
          <img
            src={imagesURL[0] || EMPTY_IMAGE_URL}
            alt="product"
            className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 transform hover:scale-105`}
            loading="lazy"
          />
        </LazyLoad>
      </div>

      <span className={`flex flex-col ${isCategory ? "flex-col" : ""}  mt-4`}>
        <p className="font-[500] text-[1rem] leading-[1.5rem] capitalize">
          {`${productId}`.replace("_", " ")}
        </p>
        {showPrice && (
          <span className="flex gap-1 items-center">
            <Star style={{ fontSize: "15px", color: "gray" }} />
            <p className="font-[400] text-[0.8rem] leading-[1.5rem]">5 (4K)</p>
          </span>
        )}
        {showPrice && (
          <p className="font-[400] text-[0.8rem] leading-[1.5rem]">
            {isCategory && (
              <ArrowForwardIcon
                fontSize="small"
                sx={{ color: "black", mr: 1 }}
              />
            )}
            {`₹${unitPrice.value}/${PRODUCT_UNIT[unit]}`}
          </p>
        )}
      </span>
    </Link>
  );
};

export default function ProductList({
  products = [],
  title,
  subtitle,
  category,
  showPrice,
  className
}) {
  const isCategory = !!category;
  const sliderId = `slider-${Math.random().toString(36).substring(7)}`; // Generate unique id for each slider

  const slideRight = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft += 500;
  };
  const slideLeft = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft -= 500;
  };

  if (!products.length) {
    return null;
  }

  return (
    <section className={`w-full md:py-18 py-4 text-black ${className}`}>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <span>
          <h3 className="text-4xl font-[500] leading-[2.6rem] tracking-[1.5px]">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 font-[400] text-gray-700">{subtitle}</p>
          )}
        </span>
        <button className="rounded-md px-4 py-3 border text-[1rem] leading-[1.5rem] hover:bg-gray-100">
          <Link to="/products">All Products</Link>
        </button>
      </div>
      <div className={`mt-2`}>
        <div className="relative">
          <div
            id={sliderId}
            className={`${
              isCategory ? "ml-4" : ""
            } flex flex-row w-full gap-4 overflow-x-auto overflow-y-hidden scroll-smooth md:mt-0 mt-10 py-6 relative`}
            style={{
              scrollbarWidth: "none",
              "-ms-overflow-style": "none",
            }}
          >
            {products.map((product, index) => (
              <Item
                product={product}
                key={index}
                isCategory={isCategory}
                showPrice={showPrice}
                index={index}
              />
            ))}
          </div>

          <button
            onClick={slideLeft}
            className="absolute left-[-15px] top-[150px] transform -translate-y-1/2 z-4 w-[50px] h-[50px] border-[1px] rounded-full flex items-center justify-center border-gray-400 bg-white hover:bg-[#f8f8f8]"
          >
            <MdOutlineArrowBackIos fontSize="large" />
          </button>
          <button
            onClick={slideRight}
            className="absolute right-[-15px] top-[150px] transform -translate-y-1/2 z-4 w-[50px] h-[50px] border-[1px] rounded-full flex items-center justify-center border-gray-400 bg-white hover:bg-[#f8f8f8]"
          >
            <MdOutlineArrowForwardIos fontSize="large" />
          </button>
        </div>
      </div>
    </section>
  );
}
