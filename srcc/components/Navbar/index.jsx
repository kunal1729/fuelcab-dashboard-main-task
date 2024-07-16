import { Divider } from "@mui/material";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaAngleDown } from "react-icons/fa";
import Button from "../UIElements/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { openAddressModal } from "../../redux/store/modalSlice";
import ProductSearchBar from "../ProductSearchBar";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const address = useSelector((state) => state.location);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddress = () => {
    dispatch(openAddressModal());
  };

  return (
    <nav className="z-1 h-[80px] flex justify-between items-center px-14 py-10 bg-white border-b sticky top-0">
      <img
        src="https://fuelcab.com/assets/svg/logo-fuelcab.svg"
        className="h-[50px]"
      />
      <ul className="text-[200] flex gap-8 w-[20%]">
        <li>
          <Link
            to="/booking"
            className="group text-gray-600 transition duration-300"
          >
            HSD
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/about-us"
            className="group text-gray-600 transition duration-300"
          >
            About us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="group text-gray-600 transition duration-300"
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span>
          </Link>
        </li>
      </ul>
      {/* Seach bar with location */}
      <div className="flex gap-3 items-center border rounded-md py-3 px-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleAddress}
        >
          <FaMapMarkerAlt color="gray" />
          <p className="text-black font-[200]">{`${
            address.state || address.addressLine
          }`}</p>
        </div>
        <div className="border-r h-[1.5rem]" />
        <ProductSearchBar removeStyles />
      </div>
      {user ? (
        <div className="flex items-center gap-2">
          <span>{user.name}</span>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
        </div>
      ) : (
        <Link
          to="/login"
          className="border px-8 py-3 text-black rounded-md hover:bg-gray-100"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
