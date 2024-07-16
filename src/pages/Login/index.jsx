import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { login } from "../../redux/api/auth";
import { clearAuthError } from "../../redux/store/authSlice";
import { openSnackbar } from "../../redux/store/modalSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UIElements/Input/Input";
import Button from "../../components/UIElements/Button/Button";

export default function Login() {
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const { loading, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [loading]);

  // show error
  useEffect(() => {
    if (!error) return;
    const closeError = () => dispatch(clearAuthError());
    dispatch(openSnackbar({ message: error, cb: closeError }));
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();
    const { phoneNumber, password } = formData;
    const email = `${phoneNumber}@fuelcab.com`;
    dispatch(login({ email, password }));
  }

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  return (
    <div className="font-dmsans w-screen h-screen md:flex">
      <div className="flex flex-col justify-center md:px-20 px-8 py-6 w-full md:w-6/12">
        <form
          className="gap-4 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px]">
            Log In
          </h1>
          <p className="text-[0.9rem] leading-[1.5rem] text-[#969AB8]">
            Login to get the best deals, exclusive offers with FuelCab.
          </p>
          <div className="flex flex-col w-full">
            <Input
              title="Phone Number"
              required
              type="tel"
              minlength={10}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
              containerProps={{ className: "mt-4" }}
              pattern="[0-9]{10}"
            />
            <Input
              required
              type="password"
              minlength={6}
              name="password"
              title="Password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              containerProps={{ className: "mt-4" }}
              error={
                formData.password?.length > 0 &&
                formData.password?.length < 6 &&
                "Min 6 length passwrod."
              }
            />
          </div>
          <Button
            loading={loading}
            type="submit"
            disabled={
              !formData.phoneNumber.length === 10 ||
              !formData.password.length === 6
            }
          >
            Login
          </Button>
          <div>
            <p className="mt-4 text-sm text-gray-600">
              Don't have an account?
              <Link
                to="/signup"
                className="cursor-pointer font-semibold text-[#1D523B] ml-1 font-md"
              >
                Signup
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <Link
              to="/privacy"
              className="text-end cursor-pointer font-semibold text-[#1D523B] ml-1 text-sm"
            >
              Terms & Conditions
            </Link>
            <p className="text-sm mx-1">|</p>
            <Link
              to="/privacy"
              className="text-end cursor-pointer font-semibold text-[#1D523B] ml-1 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </form>
      </div>
      <div className="w-[50%] hidden md:block relative bg-[#1D523B]  overflow-hidden">
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        >
          <div className="w-full">
            <img
              src="/Images/lg-1.png"
              className="h-full object-contain"
              alt="img1"
            />
          </div>
          <div className="w-full">
            <img
              src="/Images/lg-2.png"
              className="h-full w-full object-contain"
              alt="img2"
            />
          </div>
          <div className="w-full">
            <img
              src="/Images/lg-3.png"
              className="h-full w-full object-contain"
              alt="img3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
