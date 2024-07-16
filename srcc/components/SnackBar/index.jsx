import React from "react";
import { Snackbar as MUISnackBar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { closeSnackbar } from "../../redux/store/modalSlice";

export default function SnackBar() {
  const dispatch = useDispatch();
  const { isOpen, message, type, cb } = useSelector(
    (state) => state.modal.snackbar
  );
  return (
    <MUISnackBar
      open={isOpen}
      autoHideDuration={2000}
      onClose={() => {
        cb();
        dispatch(closeSnackbar());
      }}
    >
      <Alert
        severity={type}
        onClose={() => {
          cb();
          dispatch(closeSnackbar());
        }}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </MUISnackBar>
  );
}
