import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressLine: "",
  city: "",
  state: "",
  postalCode: "",
  coords: {
    latitude: "",
    longitude: "",
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.addressLine = action.payload.addressLine;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.postalCode = action.payload.postalCode;
      state.coords = action.payload.coords;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
