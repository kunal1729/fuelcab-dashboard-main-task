import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openFeedbackModal,
  openProductFormModal,
  openProfileChangeModal,
  openAuthModal,
} from "../../redux/store/modalSlice";

export default function Footer() {
  const currentUser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  return (
    <div className="px-8 pt-10 md:px-24 md:pt-14 text-black mt-10 bg-[#f6f6f6]">
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-5 text-[#0d2620]">
            <div className="grid gap-2  mt-4 md:mt-0">
              <h5 className="font-semibold text-[1rem] mb-6">About Us</h5>
              <p>
                <Link
                  to="/about-us"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  About Company
                </Link>
              </p>
              <p>
                <Link
                  to="/blogs"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Blogs
                </Link>
              </p>
              <p>
                <Link
                  to="/term-policy"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link
                  to="/return-policy"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Return & Cancellation Policy
                </Link>
              </p>
              <p>
                <Link
                  to="/ship-policy"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Ship & Delivery Policy
                </Link>
              </p>
              <p>
                <Link
                  to="/privacy"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div
              className="grid gap-2  mt-4 md:mt-0"
              style={{ height: "fit-content" }}
            >
              <h5 className="font-semibold text-[1rem] mb-6">Need Help</h5>
              <p>
                <Link
                  to="tel:9988909052"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Call us
                </Link>
              </p>
              <p>
                <Link
                  to=""
                  onClick={() => {
                    dispatch(openFeedbackModal());
                  }}
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Feedback
                </Link>
              </p>
              <p>
                <Link
                  to="/faq"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  FAQ
                </Link>
              </p>
            </div>
            <div
              className="grid gap-2 mt-4 md:mt-0"
              style={{ height: "fit-content" }}
            >
              <h5 className="font-semibold text-[1rem] mb-6">For Sellers</h5>
              <p>
                <Link
                  to=""
                  onClick={() => {
                    if (!currentUser) {
                      dispatch(openAuthModal());
                    } else if (currentUser.userType === 0) {
                      dispatch(openProfileChangeModal(1));
                    } else {
                      dispatch(openProductFormModal());
                    }
                  }}
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Sell on Fuelcab
                </Link>
              </p>
              <p>
                <Link
                  to="/products"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Search Verified Leads
                </Link>
              </p>
              <p>
                <Link
                  to="/dashboard/setting?tab=3"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Get Membership
                </Link>
              </p>
            </div>
            <div
              className={`grid gap-2  mt-4 md:mt-0`}
              style={{ height: "fit-content" }}
            >
              <h4 className="font-semibold text-[1rem] mb-6">For Buyers</h4>
              <p>
                <Link
                  to="/products"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Search Suppliers/Products{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="#product-requirement-form"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Post Your Requirements{" "}
                </Link>
              </p>
            </div>
            <div
              className={`grid gap-2  mt-4 md:mt-0`}
              style={{ height: "fit-content" }}
            >
              <h5 className="font-semibold text-[1rem] mb-6">
                Partner With us
              </h5>
              <p>
                <Link
                  to="/partnership"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Logistics Partnership{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="/partnership"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  FuelEnt/DDD Partnership{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="/partnership"
                  className=" hover:opacity-50 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  Fuel Station Partnership{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="flex md:flex-row flex-col justify-center md:justify-between border-t-[0.5px] border-[#43574654] mt-8 py-6 items-center">
          <p className="text-[#274840] font-semibold text-[1rem]">
            Terms & Condition | Privacy Policy
          </p>
          <div>
            <div className="grid grid-cols-4 gap-4 md:mt-auto mt-2">
              <a
                href="https://www.linkedin.com/company/fuelcab"
                target="_blank"
                className="cursor-pointer flex justify-center items-center bg-white rounded-[50%] p-4 h-fit self-center"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "#274840" }} />
              </a>

              <a
                href="https://m.facebook.com/Fuelcab/"
                target="_blank"
                className="cursor-pointer flex justify-center items-center bg-white rounded-[50%] p-4 h-fit self-center"
              >
                <FacebookIcon fontSize="large" sx={{ color: "#274840" }} />
              </a>

              <a
                href="https://www.instagram.com/fuelcabindia/"
                target="_blank"
                className="cursor-pointer flex justify-center items-center bg-white rounded-[50%] p-4 h-fit self-center"
              >
                <InstagramIcon fontSize="large" sx={{ color: "#274840" }} />
              </a>

              <a
                href="https://twitter.com/fuelcab"
                target="_blank"
                className="cursor-pointer flex justify-center items-center bg-white rounded-[50%] p-4 h-fit self-center"
              >
                <TwitterIcon fontSize="large" sx={{ color: "#274840" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="py-10 font-semibold text-[#0d2620] text-[1rem] text-center border-t-1 border-[#43574654]">
        © 2023 FuelCab. All Rights Reserved
      </p>
    </div>
  );
}
