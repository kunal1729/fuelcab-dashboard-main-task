import React, { useState, useEffect, useRef, useMemo } from "react";
import style from "./Booking.module.css";
import { useLocation } from "react-router-dom";
import { sendRequirement } from "../../redux/api/wallet";
import { useDispatch, useSelector } from "react-redux";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Snackbar } from "@mui/material";
import {
  openAuthModal,
  openOrderSuccessModal,
} from "../../redux/store/modalSlice";
import { getStructuredLocation } from "../../utils/location";
import Dropdown from "../../components/UIElements/Dropdown/Dropdown";
import { Alert, CircularProgress } from "@mui/material";
import Hero from "./Hero";
import BookNow from "./BookNow";
import Services from "./Services";
import Sustainable from "./Sustainable";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DatePicker from "../../components/UIElements/DatePicker/DatePicker";

const initialForm = {
  address: {
    coords: { latitude: "", longitude: "" },
    city: "",
    state: "",
    addressLine: "",
  },
  product: null,
  date: new Date(),
  quantity: "",
};

export default function Booking() {
  const { state } = useLocation(); // route location
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [fuelPrice, setFuelPrice] = useState(89.0);
  const { address } = useSelector((state) => state.location);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { productsByFC } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const inputRef = useRef();

  // set location if given by previous page
  useEffect(() => {
    if (state?.address) {
      setForm({ ...form, ...state });
    } else if (address) {
      setForm({ ...form, address });
    }
  }, [state, address]);

  // select first product
  useEffect(() => {
    if (!productsByFC?.length) return;
    setForm((p) => ({ ...p, product: productsByFC[0] }));
  }, [productsByFC]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePlaceChanged = async () => {
    const [place] = inputRef.current.getPlaces();
    const address = getStructuredLocation(place);
    //const price = await getFuelPrice(place.formatted_address);
    setFuelPrice(89.45);
    setForm({ ...form, address });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      dispatch(openAuthModal());
      return;
    }
    if (!form.product || !form.address?.coords?.latitude) {
      setError("All details needed");
      return;
    }

    try {
      setLoading(true);
      const { address, quantity, product, date } = form;
      await sendRequirement(user.id, product.sellerId, {
        price: Number(product?.price),
        quantity: {
          value: quantity,
          unit: product.quantity?.unit || "unknown",
        },
        productId: product.id,
        productName: product.name,
        open: false,
        address,
        bookingDate: date,
      });
      dispatch(openOrderSuccessModal());
      setLoading(false);
    } catch (error) {
      setError("Please try again");
      console.log(error, "booking");
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <BookNow />
      <Sustainable />
      <Services />
      <Footer />
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={2000}
        onClose={() => setError(null)}
      >
        <Alert
          severity={"error"}
          onClose={() => setError(null)}
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
