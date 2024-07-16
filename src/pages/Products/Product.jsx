import React from "react";
import { MdStars } from "react-icons/md";
import { PRODUCT_UNIT } from "../../constants/product";
import Button from "../../components/UIElements/Button/Button";
import { LocationOnSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();

  const getDeliveryDays = () => {
    const startDate = product.createdAt.toDate();
    const relativeDate = product.expectedDelivery.toDate();
    const differenceInTime = relativeDate.getTime() - startDate.getTime();
    return Math.round(differenceInTime / (1000 * 3600 * 24));
  };

  const handleClick = () => {
    navigate("/product/" + product.id);
  };

  return (
    <section className="flex gap-6">
      <div className="flex flex-col items-center w-[40%]">
        <img
          src={product.imagesURL[0]}
          alt={product.productId + "-image-" + product.id}
          className="h-[80%] rounded-lg w-full transition-transform duration-400 hover:scale-105"
        />
        <Button size="sm" className="w-full mt-1 z-2">
          Book Now
        </Button>
      </div>
      <div className="w-full">
        <div className="text-green-700 text-[12px] leading-[16px] font-semibold mb-2">
          Rs {product.unitPrice.value} PER {PRODUCT_UNIT[product.unit]}
        </div>
        <div className="text-[16px] leading-[16px] font-semibold mb-2">
          {product.productId}
        </div>
        <div className="flex text-[12px] items-center my-1 text-gray-600 leading-[16px] mb-2">
          <MdStars className="text-black mr-1 h-4 w-4" />
          <p>
            {product.rating} ({product.bookingCount} bookings)
          </p>
        </div>
        <div className="text-[12px] flex text-gray-600 leading-[16px]">
          <span className="font-semibold">
            Total {product.quantity.value} {PRODUCT_UNIT[product.unit]}
          </span>
          <li className="mx-1 flex items-center">
            <span className="mr-1">•</span>
            {getDeliveryDays()} Days Delivery
          </li>
        </div>
        <div class="border border-gray-200 border-dashed h-0 w-full my-2"></div>
        <div className="text-[12px] text-gray-600 leading-[16px] mt-1 flex items-center">
          <LocationOnSharp className="text-black mr-1" sx={{ fontSize: 16 }} />
          {product.origin.addressLine}
        </div>
        <div className="text-[12px] text-gray-600 leading-[16px] mt-2">
          {product.qualityRemark}
        </div>
        <Button mode="text" onClick={handleClick} className="mt-2" size="sm">
          View details
        </Button>
      </div>
    </section>
  );
}
