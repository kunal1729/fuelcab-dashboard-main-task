import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Snackbar,Alert } from "@mui/material";
import { createPartnerShipQuery } from "../../redux/api/support";
import Input from "../../components/UIElements/Input/Input";

const FEATURES = [
  {
    heading: "Sustainable Transport",
    Icon: LocalShippingIcon,
  },

  {
    heading: "Enhanced Efficiency",
    Icon: WatchLaterIcon,
  },

  {
    heading: "Operational Excellence",
    Icon: HandshakeIcon,
  },
];

function Section() {
  return (
    <div className="md:mt-auto mt-6 flex flex-wrap gap-6">
      {FEATURES.map(({ heading, Icon }) => {
        return (
          <div
            key={heading}
            className="mt-4 md:w-[30%] w-full py-[1.5rem] px-[1.25rem] bg-[#CFD8D2]"
          >
            <span className="bg-white rounded-[50%] p-4 flex items-center justify-center w-fit">
              <Icon fontSize="large" sx={{ color: "#274840" }} />
            </span>
            <span className="md:ml-6 ml-2 mt-4">
              <h4 className="text-[500] text-[#0D2620] text-[1.3rem] leading-[2rem] tracking-[0.5px]">
                {heading}
              </h4>
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Pair({ title, value, href }) {
  return (
    <span className="text-[0.9rem] text-black flex gap-2 mt-4">
      <p className="font-semibold">{title}:</p>
      <a href={href} className="text-opacity-60">
        {value}
      </a>
    </span>
  );
}

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  message: "",
};

export default function Features() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  function handleInputChange({target}) {
    const {name,value} = target;
    setForm((p)=>({...p,[name]:value}))
  }

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    const {error} = await createPartnerShipQuery(form);
    if(error) setError(error); 
    else{
      setError("Query Send");
      setForm({...INITIAL_FORM})
    }
    setLoading(false);
  }

  return (
    <section className="w-full md:px-24 px-4 my-16">
      <div className="flex md:justify-between justify-center items-center border-b-[1px] border-black w-full py-4 px-2">
        <span className="md:block hidden">
          <h2 className="text-black font-semibold text-[0.9rem] leading-[1.3rem]">
            Join
          </h2>
          <p className="text-black text-[0.9rem] leading-[1.3rem] text-opacity-50">
            FuelCab India
          </p>
        </span>
        <h1 className="text-[#0d2620] md:mb-0 mb-4 font-[500] text-[3rem] leading-[1.3rem]">
          Partnership
        </h1>
        <div className="md:block hidden"/>
      </div>
      <div className="flex w-full mt-10">
        <div className="w-[43%] md:block hidden">
          <span className="text-black text-[4rem] md:w-[35%] w-auto">FCI.</span>
          <p className="text-[0.9rem] mt-8 text-black font-semibold">
            FuelCab India Partnership Contacts
          </p>
          <Pair
            title="Telephone"
            value="+91 9988909052"
            href="tel:+91 9988909052"
          />
          <Pair
            title="Telefax"
            value="+91 9988909052"
            href="tel:+91 9988909052"
          />
          <Pair
            title="E-Mail"
            value="info@fuelcab.com"
            href="mail:info@fuelcab.com"
          />
          <p className="text-[0.9rem] mt-8 text-black font-semibold">
          FuelCab India Support Contacts
          </p>
          <Pair
            title="Telephone"
            value="+91 9988909052"
            href="tel:+91 9988909052"
          />
          <Pair
            title="E-Mail"
            value="support@fuelcab.com"
            href="mail:support@fuelcab.com"
          />
        </div>
        <div className="md:w-[57%] w-auto">
          <h2 className="text-[#0D2620] md:text-[2.5rem] text-[2rem] leading-[2.4rem] tracking-[1.5px] font-[500]">
            Transforming the Future of Transportation
          </h2>
          <p className="mt-6 text-black text-[1rem] leading-[1.5rem]">
            Driving Innovation and Sustainability in the Transportation Industry
            through Advanced Fuel Efficiency Solutions and Collaborative
            Partnerships.
          </p>
          <h2 className="mt-8 text-[#0D2620]  md:text-[2.5rem] text-[2rem] leading-[2.4rem] tracking-[1.5px] font-[500]">
            Benefits.
          </h2>
          <Section />
          <form className="grid grid-cols-2 gap-4 mt-8" onSubmit={handleSubmit}>
            <Input
              title="First Name"
              required
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
            <Input
              title="Last Name"
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
            <Input
              title="Email"
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <Input
              title="Phone Number"
              requiredm
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <Input
              title="Address"
              required
              type="text"
              containerProps={{ className: "col-span-2" }}
              name="address"
              value={form.address}
              onChange={handleInputChange}
              placeholder="Enter your full address"
            />

            <span className="mt-2 col-span-2">
              <label
                htmlFor="partnership-message"
                className={`text-sm leading-[18px] font-[500] text-[#0D2620] tracking-[.05em]`}
              >
                Message
              </label>
              <textarea
              required
                id="partnership-message"
                name="message"
                placeholder="Write your message..."
                rows="4"
                cols="50"
                className="py-4 text-black h-full bg-gray-50 text-sm w-full border px-[21px] border-[#0D2620] outline-none"
              />
            </span>
            <button
              type="submit"
              className="mt-10 text-xl bg-[#1D523B] px-10 py-4 flex justify-center items-center"
            >
                {loading && (
                  <svg
                    class="w-5 h-5 mr-3 -ml-2 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              Send
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={2000}
        onClose={() =>{
          setError(null);
        }}
      >
        <Alert
          severity={error === "Query Send" ? "success"  :"error"}
          onClose={() =>  setError(null)}
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </section>
  );
}
