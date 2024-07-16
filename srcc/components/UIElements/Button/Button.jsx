import React from "react";

export default function Button({
  children,
  disabled,
  className,
  loading,
  mode = "contained",
  size = "md", // Introduce a new prop for button size
  ...rest
}) {
  let paddingSize;
  let fontSize;

  // Define padding and font size based on size prop
  switch (size) {
    case "sm":
      paddingSize = "px-4 py-1"; // Small padding
      fontSize = "text-sm"; // Small font size
      break;
    case "lg":
      paddingSize = "px-8 py-4"; // Large padding
      fontSize = "text-lg"; // Large font size
      break;
    default:
      paddingSize = "px-4 py-4"; // Default padding
      fontSize = "text-base"; // Default font size
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      className={`font-dmsans rounded-xl bg-${
        disabled ? "gray-100" : mode === "contained" ? "[#1D523B]" : ""
      }  flex justify-center cursor-${
        disabled ? "not-allowed" : "pointer"
      } items-center text-${
        disabled
          ? "gray-400"
          : mode === "contained"
          ? "white"
          : "[#1D523B]"
      } flex ${fontSize} ${paddingSize} ${className}`}
    >
      {loading && (
        <svg
          className="w-5 h-5 mr-3 -ml-2 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
