import React, { useRef, useState } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStructuredLocation } from "../../utils/location";

const ProductMenu = ({ products, product, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full text-start"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {product.name}{" "}
      </button>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute z-10 md:w-[200px]  w-[80%] md:left-auto left-[10%] mt-[15px]  bg-white border border-gray-300 px-[8px] py-[10px] rounded-xl "
        >
          {products?.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                onChange(item);
                setIsOpen(false);
              }}
              className="font-sg text-[14px] leading-[28px] h-[38px] p-[8px] text-[#111B29]  flex items-center justify-start hover:bg-[#e1e1e6] rounded-lg w-full"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DatePicker = ({ date, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <input
        value={format(date, "dd/MM/yyyy")}
        readOnly
        onClick={() => setIsOpen((prev) => !prev)}
        className="font-roboto text-sm text-[#717171] outline-none cursor-pointer"
        placeholder="22/01/2023"
      />
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Calendar
            date={date}
            onChange={(d) => {
              setDate(d);
              setIsOpen(false);
            }}
            className="absolute z-10 top-[108%] left-[-4%] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default function Hero() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    coords: { latitude: "", longitude: "" },
  });
  const [date, setDate] = useState(new Date());
  const [product, setProduct] = useState(null);
  const { productsByFC } = useSelector((state) => state.products);
  const inputRef = useRef();

  const handleBookDelivery = () => {
    navigate("/booking", {
      state: { address, date, product },
    });
  };

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    const address = getStructuredLocation(place);
    setAddress(address);
  };

  return (
    <>
      <div className="bg-no-repeat md:flex block md:mt-auto items-center md:h-[80vh] justify-between md:px-20 px-8 mt-5">
        <div className="mb-6 md:mb-0 lg:ml-10">
          <div className="relative flex flex-col lg:w-[322px] md:w-[322px] bg-white rounded-[50px] w-full h-full py-[12px] gap-[6px]">
            <span className="font-roboto font-bold text-sm text-black">
              Location
            </span>
            <div className="py-4 text-black h-full text-sm w-full border px-[21px] border-[#0D2620] outline-none">
              <StandaloneSearchBox
                style={{ border: "10px" }}
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                <input
                  type="text"
                  value={address.addressLine}
                  onChange={({ target }) =>
                    setAddress((p) => ({ ...p, addressLine: target.value }))
                  }
                  className="text-gray-600 text-sm outline-none w-full placeholder:text-gray-600"
                  placeholder="Where you want the delivery?"
                />
              </StandaloneSearchBox>
            </div>
          </div>
          <div className="relative flex flex-col lg:w-[322px] md:w-[322px] bg-white rounded-[50px] w-full h-full py-[12px] gap-[6px]">
            <span className="font-roboto font-bold text-sm text-black pl-[3px]">
              Date
            </span>
            <div className="py-4 text-black h-full text-sm w-full border px-[21px] border-[#0D2620] outline-none">
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>
          <div className="flex flex-col lg:w-[322px] md:w-[322px] bg-white rounded-[50px] w-full h-full py-[12px] gap-[6px]">
            <span className="font-roboto font-bold text-sm text-black">
              Product
            </span>
            <div className="py-4 h-full w-full border px-[21px] border-[#0D2620] outline-none font-roboto text-sm text-[#717171]">
              <ProductMenu
                products={productsByFC}
                product={productsByFC[0] || { name: "No Product" }}
                onChange={(product) => setProduct(product)}
              />
            </div>
          </div>
          <button
            onClick={handleBookDelivery}
            className="py-4 px-8 bg-[#1D523B] mt-6 h-[55px] flex items-center text-white"
          >
            Search
          </button>
        </div>
        <div className="gap-[10px] md:gap-[38px] flex flex-col md:w-[42%] lg:w-[55%] items-center justify-center lg:mr-10">
          <div className="text-center">
            <div className="font-inter font-semibold lg:text-[53px] md:text-[53px] text-[35px] md:leading-[58px] leading-[48px] tracking-[-0.03em]">
              FuelCab
            </div>
            <div className="font-inter font-semibold lg:text-[53px] md:text-[53px] text-[35px] md:leading-[58px] leading-[48px] tracking-[-0.03em] ">
              Get your Fuel Today
            </div>
          </div>
          <div className="text-center">
            <div className=" font-inter lg:text-[20px] md:text-[20px] text-[18px] tracking-[-0.03em] text-opacity-80">
              Presenting you doorstep fuel delivery, available 24X7. We provide
              fuel for your personal & industrial equipments safely at your
              door, so you can focus on your business.
            </div>
            {/* <div className="font-inter lg:text-[20px] md:text-[20px] text-[16px] tracking-[-0.03em] text-opacity-80"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
