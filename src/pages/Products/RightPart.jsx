import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../../components/UIElements/Button/Button";

const RightPart = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border w-[260px] text-[12px] px-4 py-5 rounded-lg gap-4">
        {!showAll && (
          <div>
            <div className="flex gap-2 items-start">
              <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
                <BiSolidOffer className="h-6 w-6 text-green-700" />
              </div>
              <div className="">
                <p className="text-[12px] font-semibold">
                  20% off on Kotak Silk cards
                </p>
                <p className="text-[12px] text-gray-500">
                  20% off up to INR 350
                </p>
              </div>
            </div>
          </div>
        )}
        {showAll && (
          <>
            <div>
              <div className="flex gap-2 items-start">
                <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
                  <BiSolidOffer className="h-6 w-6 text-green-700" />
                </div>
                <div className="">
                  <p className="text-[12px] font-semibold">
                    20% off on Kotak Silk cards
                  </p>
                  <p className="text-[12px] text-gray-500">
                    20% off up to INR 350
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-start">
                <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
                  <BiSolidOffer className="h-6 w-6 text-green-700" />
                </div>
                <div className="">
                  <p className="text-[12px] font-semibold">
                    20% off on Kotak Silk cards
                  </p>
                  <p className="text-[12px] text-gray-500">
                    20% off up to INR 350
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-start">
                <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
                  <BiSolidOffer className="h-6 w-6 text-green-700" />
                </div>
                <div className="">
                  <p className="text-[12px] font-semibold">
                    20% off on Kotak Silk cards
                  </p>
                  <p className="text-[12px] text-gray-500">
                    20% off up to INR 350
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <Button
          mode="text"
          size="sm"
          onClick={handleViewMore}
        >
          {showAll ? "View Less Offers" : "View More Offers"}
          {showAll ? (
            <IoIosArrowUp className="mx-1" />
          ) : (
            <IoIosArrowDown className="mx-1" />
          )}
        </Button>
      </div>
      <div className="flex border justify-between w-[260px] text-[12px] p-4 rounded-lg">
        <div className="">
          <h3 className="text-[18px] font-semibold">FC Promise</h3>
          <ul className="list-disc pl-4 text-[12px] mt-2">
            <li className="mb-1">Verified Sellers</li>
            <li className="mb-1">Tested Products</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
