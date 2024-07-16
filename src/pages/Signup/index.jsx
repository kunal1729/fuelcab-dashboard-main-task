import React, { useEffect, useRef, useState } from "react";
import { register } from "../../redux/api/auth";
import { verifyString } from "../../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOTP } from "../../redux/api/user";
import { clearAuthError } from "../../redux/store/authSlice";
import { openSnackbar } from "../../redux/store/modalSlice";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UIElements/Button/Button";
import { ArrowBack } from "@mui/icons-material";
import Inputs from "./Inputs";

const initialFormData = {
  phoneNumber: { value: "", error: "" },
  name: { value: "", error: "" },
  password: { value: "", error: "" },
  email: { value: "", error: "" },
  otp: { value: "", error: "" },
  gst: { value: "", error: "" },
  buyer: { value: false, error: "" },
  seller: { value: false, error: "" },
};

export default function Signup() {
  const { error, loading, user } = useSelector((state) => state.auth);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpsend, setOtpSend] = useState(false);
  const [step, setStep] = useState(0);
  const [timer, setTimer] = useState(100);
  const [form, setForm] = useState(initialFormData);
  const firstInptRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // auto focus on input
  useEffect(() => {
    firstInptRef.current?.focus();
  }, []);

  // initialise timer
  useEffect(() => {
    const startTimer = () => {
      setTimer((p) => (p > 0 ? p - 1 : p));
    };
    if (step === 0 && otpsend) {
      setInterval(startTimer, 1000);
    }
    return () => {
      clearInterval(startTimer, 1000);
    };
  }, [step, otpsend]);

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const { error } = verifyString(name, value);
    setForm((p) => ({ ...p, [name]: { value, error } }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // check for input value error
    const formData = {};
    let formError = false;
    Object.entries(form).map(([name, { error, value }]) => {
      if (error) formError = true;
      formData[name] = value;
    });
    if (formError) return;

    // perform step 0 - otp verification
    if (step == 0) {
      setOtpLoading(true);
      try {
        if (!otpsend) {
          const sendRes = await sendOTP(form.phoneNumber.value);
          setOtpLoading(false);
          if (sendRes.status !== 200) {
            dispatch(openSnackbar({ message: "Something went wrong!" }));
            return;
          } else {
            dispatch(openSnackbar({ message: "OTP Send!", type: "success" }));
            setOtpSend(true);
          }
        } else {
          const verifyRes = await verifyOTP(
            form.phoneNumber.value,
            form.otp.value
          );
          setOtpLoading(false);
          if (verifyRes.status !== 200) {
            setForm((f) => ({
              ...f,
              otp: { ...f.otp, error: "OTP not match" },
            }));
            return;
          }
          setStep((p) => p + 1);
        }
      } catch (error) {
        dispatch(openSnackbar({ message: "Something went wrong!" }));
        setOtpLoading(false);
      }
    }

    if (step == 1) {
      setStep((p) => p + 1);
    }

    if (step == 2) {
      dispatch(register(formData));
    }
  }

  return (
    <>
      <section
        className={`w-full flex items-center justify-center font-dmsans`}
      >
        <div className="w-full flex items-center h-screen">
          <div className=" flex flex-col justify-between md:px-20 px-8 py-6 w-full md:w-6/12">
            <form
              className="gap-4 flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h1 className="md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px]">
                Signup
              </h1>
              <p className="text-[0.9rem] leading-[1.5rem] text-[#969AB8]">
                Signup to get the best deals, exclusive offers with FuelCab.
              </p>
              <p className="text-[1rem] leading-[1.5rem] text-gray-600">
                {`STEP - ${step + 1}/3`}
              </p>
              <div className="flex flex-col w-full">
                <Inputs
                  form={form}
                  handleInputChange={handleInputChange}
                  otpsend={otpsend}
                  step={step}
                  firstInptRef={firstInptRef}
                  setForm={setForm}
                />
              </div>
              {step == 2 ? (
                <Button
                  loading={loading}
                  className="w-full"
                  disabled={!form.gst.value || !form.name.value}
                >
                  Sign up
                </Button>
              ) : (
                <Button
                  disabled={
                    step === 1
                      ? !form.email.value ||
                        !form.password.value ||
                        (!form.buyer.value && !form.seller.value)
                      : !otpsend
                      ? form.phoneNumber.value.length !== 10
                      : form.otp.value.length !== 6
                  }
                  loading={otpLoading}
                  className="w-full"
                >
                  Next
                </Button>
              )}
              {step === 0 && (
                <div className="text-center">
                  <p className="mt-2 text-sm text-gray-600">
                    Already have an account
                    <Link
                      to="/login"
                      className="cursor-pointer font-semibold text-[#1D523B] ml-1 font-md"
                    >
                      Log In
                    </Link>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    By Signing up, you agree to Fuelcab's
                  </p>
                  <span className="flex items-center">
                    <a className="cursor-pointer font-semibold text-[#1D523B] text-sm">
                      Terms & Conditions
                    </a>
                    <p className="text-sm mx-1">&</p>
                    <a className="cursor-pointer font-semibold text-[#1D523B] text-sm">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              )}
              {step == 0 && otpsend && (
                <div className="flex gap-2 items-center">
                  <p className="text-gray-600 text-sm">Didn't receive OTP?</p>
                  <a
                    onClick={() => {
                      if (timer > 0) return;
                      sendOTP(form.phoneNumber.value);
                      setTimer(100);
                    }}
                    className={`cursor-pointer text-${
                      timer > 0 ? "gray-400" : "[#1D523B]"
                    } font-sm`}
                  >
                    Resend OTP
                  </a>
                  {timer !== 0 && (
                    <span className="text-gray-400">({timer})</span>
                  )}
                </div>
              )}
              {(step > 0 || otpsend) && (
                <Button
                  mode="text"
                  className="gap-2"
                  size="md"
                  onClick={() => {
                    if (step === 1) {
                      setOtpSend(false);
                    }
                    setStep(step - 1);
                  }}
                >
                  <ArrowBack
                    fontSize="small"
                    className="inline cursor-pointer"
                  />
                  Back
                </Button>
              )}
            </form>
          </div>
          <div className="w-1/2  ml-8 hidden h-full md:flex relative items-center justify-center">
            {step == 0 && (
              <img
                src="./Images/lg-2.png"
                className="h-full w-full object-cover"
                alt="an img"
              />
            )}

            {step == 1 && (
              <img
                src="./Images/lg-4.png"
                className="h-full object-cover w-full"
                alt="img"
              />
            )}
            {step == 2 && (
              <img
                src="./Images/lg-3.png"
                className="h-full  w-full object-cover object-center "
                alt="img"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
