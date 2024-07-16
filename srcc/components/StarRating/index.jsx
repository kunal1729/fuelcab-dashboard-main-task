import { Star, StarOutline } from "@mui/icons-material";
import React from "react";

export default function StarRating({ star, editable, onChange }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (elem, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              if (!editable) return;
              onChange(index + 1);
            }}
          >
            {star > index ? (
              <div className="w-[20px] h-[20px]">
                <Star fontSize="small" />
              </div>
            ) : (
              <div className="w-[20px] h-[20px]">
                <StarOutline fontSize="small" />
              </div>
            )}
          </span>
        );
      })}
    </div>
  );
}
