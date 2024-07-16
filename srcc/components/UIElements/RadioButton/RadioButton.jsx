import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RadioButton({ values, value, title, onChange, name,labelProps,size="medium" }) {
  console.log(value,values,"testtest");
  return (
    <div>
      <label
        htmlFor="fcd-radio-btn"
        id="fcd-radio-btn"
        className={`${labelProps?.className} text-sm leading-[18px] font-[500] text-[#151515] tracking-[.05em]`}
      >
        {title}
      </label>
      <RadioGroup
        row
        value={value}
        name={name}
        onChange={onChange}
        aria-labelledby="fcd-radio-btn"
        id="fcd-radio-btn"
      >
        {values.map((val) => {
          return (
            <FormControlLabel value={val} control={<Radio size={size}  sx={{
              '&.Mui-checked': {
                color: '#1D523B',
              },
            }} />} label={val}/>
          );
        })}
      </RadioGroup>
    </div>
  );
}
