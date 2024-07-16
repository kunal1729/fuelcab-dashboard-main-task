import React, { useLayoutEffect, useRef, useState } from "react";
import Input from "../Input/Input";

export default function Dropdown({
  unit,
  setUnit,
  units,
  width,
  inputClass,
  propertyShown,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();
  const [listWidth, setListWidth] = useState("");

  useLayoutEffect(() => {
    setListWidth(inputRef.current.offsetWidth);
  }, []);

  return (
    <div className="h-full overflow-y-auto w-full">
      <Input
        inputRef={inputRef}
        value={typeof unit === "object" ? unit[propertyShown] : unit}
        readOnly
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          inputClass || ""
        } py-4 cursor-pointer text-black h-full capitalize text-sm w-full border px-[21px] outline-none`}
        placeholder={"Select Value"}
      />
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ width: width || listWidth }}
          className={`max-h-[250px] absolute z-10 overflow-y-auto cursor-pointer mt-1 bg-white rounded-md border  px-[8px] py-[10px]`}
        >
          {units.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                setUnit(item);
                setIsOpen(false);
              }}
              className="capitalize font-poppins text-[14px] leading-[28px] min-h-[38px] p-[8px] text-[#151515] flex items-center text-center rounded-md justify-start hover:bg-gray-200 w-full"
            >
              {typeof item === "object" ? item[propertyShown] : item}
            </button>
          ))}
          {!units.length && (
            <p className="capitalize text-[0.9rem] leading-[28px] p-1 text-[#151515]">
              No Unit to select
            </p>
          )}
        </div>
      )}
    </div>
  );
}
