import { TextField } from "@mui/material";
import React from "react";

export default function Input({
  title,
  value,
  onChange,
  placeholder,
  disabled,
  inputProps,
  error,
  containerProps,
  inputRef,
  className,
  ...rest
}) {

  const {className:containerClassName,...restContainerProps} = containerProps || {};
  return (
    <div className={`${containerClassName} font-dmsans flex flex-col w-full gap-[5px]`} {...restContainerProps}>
      {!!title && <label
        htmlFor={`${title}-input`}
        className={`text-sm leading-[18px] font-[500] ${
          disabled
            ? "text-gray-600"
            : error
            ? "text-[#d32f2f]"
            : "text-[#0D2620]"
        }`}
      >
        {title}
      </label>}
      <input
        ref={inputRef}
        required
        {...rest}
        id={`${title}-input`}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`text-${disabled ? "gray-400" : "black"}  ${className} py-4 h-full text-sm w-full border rounded-xl px-8 border outline-none`}
      />
      {error && (
        <p className={`${error ? "text-[#d32f2f]" : "text-[#151515]"} text-xs`}>
          {"*" + error}
        </p>
      )}
    </div>
  );
}
