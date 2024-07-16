import { useLoadScript } from "@react-google-maps/api";
import { LinearProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect } from "react";

import ProductFormModal from "./components/Modals/ProductFormModal";
import AddressModal from "./components/Modals/AddressModal";
import { setLocation } from "./redux/store/locationSlice";
import { getDeviceLocation, getStoredLocation } from "./utils/location";
import SnackBar from "./components/SnackBar";
import { reAuth } from "./redux/api/auth";
import RootRoute from "./pages";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import ProductSelectorModal from "./components/Modals/ProductSelectorModal";
import OrderFormModal from "./components/Modals/OrderFormModal";

const MAP_LIBRARIES = ["places"];

export default function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { isLoaded, user } = useSelector((state) => state.auth);
  const { isLoaded: mapLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
    libraries: MAP_LIBRARIES,
  });

  // reauth - get user meta data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(reAuth(user));
    });
    return unSubscribe;
  }, []);

  // get initial user location
  useEffect(() => {
    const getInitialLocation = async () => {
      let loc = null;
      const storedLoc = await getStoredLocation();
      if (storedLoc) loc = storedLoc;
      else {
        if (user) loc = user.address;
        else {
          const deviceLoc = await getDeviceLocation();
          if (deviceLoc) loc = deviceLoc;
        }
      }
      dispatch(setLocation(loc));
    };
    getInitialLocation();
  }, [user]);

  // set viewport hard coded
  useEffect(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute(
      "content",
      viewport.content + ", height=" + window.innerHeight
    );
  }, []);

  if (!isLoaded || !location.city || !mapLoaded) {
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <img src="" alt="fuelcab-logo" className="h-[50px]" />
        <LinearProgress
          sx={{ width: "20vw", mt: 4, height: 4, borderRadius: 10 }}
          color="inherit"
        />
      </div>
    );
  }

  return (
    <div className="App">
      <RootRoute />

      {/* ------------ modals ---------- */}
      <SnackBar />
      <AddressModal />
      <ProductFormModal />
      <ProductSelectorModal/>
      <OrderFormModal/>
    </div>
  );
}
