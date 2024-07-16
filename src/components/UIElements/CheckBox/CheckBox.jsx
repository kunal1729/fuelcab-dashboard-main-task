import React from "react";
import { Checkbox as MUICheckBox, FormControlLabel } from "@mui/material";

export default function CheckBox({
  label,
  checked,
  defaultChecked = false,
  onChange = () => {},
  size = "medium",
}) {
  return (
    <FormControlLabel
      control={
        <MUICheckBox
          size={size}
          checked={checked}
          onChange={onChange}
          defaultChecked={defaultChecked}
          sx={{
            "&.Mui-checked": {
              color: "#1D523B",
            },
          }}
        />
      }
      sx={{ textTransform: "capitalize" }}
      className="font-dmsans"
      label={`${label}`.slice(0, 20)}
    />
  );
}
