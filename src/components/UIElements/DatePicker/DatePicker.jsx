import { useState } from "react";
import format from "date-fns/format";
import { Calendar } from "react-date-range";
import Input from "../Input/Input";

export default function DatePicker({ date, setDate,...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div {...rest} style={{position:'relative'}}>
      <Input
        value={format(date, "dd/MM/yyyy")}
        readOnly
        required
        onClick={() => setIsOpen((prev) => !prev)}
        className="py-4 text-black h-full bg-gray-50 text-sm w-full border px-[21px] border-[#0D2620] outline-none"
        placeholder="22/01/2023"
      />
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=""
        >
          <Calendar
            date={date}
            onChange={(d) => {
              setDate(d);
              setIsOpen(false);
            }}
            color="#1D523B"
            className="absolute z-10 mt-[10px] left-[10px] border-2 border-gray-200"
          />
        </div>
      )}
    </div>
  );
}
