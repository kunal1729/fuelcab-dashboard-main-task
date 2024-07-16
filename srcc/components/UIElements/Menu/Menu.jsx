import { useState } from "react";
import classes from "./Menu.module.css";
import { useDispatch } from "react-redux";
import { openFeedbackModal } from "../../../redux/store/modalSlice";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Chip } from "@mui/material";

export default function Menu({ item, nameClass, dropDownClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleFeedbackClick() {
    dispatch(openFeedbackModal());
  }

  return (
    <div className="flex flex-col relative">
      <button
        onClick={item?.onClick}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`font-semibold flex items-center capitalize text-sm tracking-[-0.03em] h-[40px] hover:border-b-2 border-[#1d523b] ${nameClass}`}
      >
        {item.name}
        {!!item?.list?.length &&
          (isOpen ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          ))}
      </button>
      {!!item?.list?.length && isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setTimeout(()=>setIsOpen(false),500)}
          className={`${classes.dropDownProfile} ${dropDownClass} z-10 absolute w-[300px] top-12 -left-24 border bg-white px-2 py-[10px] `}
        >
          <span className="text-sm ml-1 font-semibold">
            {item.name.toUpperCase()}
          </span>
          {item.list.map(({ title, onClick, commingSoon }, index) => {
            // Function to capitalize each word in the title
            const capitalizeEachWord = (str) => {
              return str.replace(/\b\w/g, (char) => char.toUpperCase());
            };

            return (
              <button
                onClick={onClick}
                key={index}
                className={`${
                  commingSoon ? "cursor-not-allowed" : ""
                } text-sm leading-[28px] h-[40px] p-2 flex items-center justify-between hover:bg-[#f6f6f6] w-full`}
              >
                {capitalizeEachWord(title)}
                {commingSoon && <Chip label="Soon" size="small" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
