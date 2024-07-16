import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UIElements/Button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PageNotFound() {
  return (
    <div className="h-screen text-center py-8">
      <div className="w-full">
        <img
          src="/Logos/logo-fuelcab.svg"
          alt="fuelcab-logo"
          className="w-[150px] relative left-[41%] md:w-[180px]"
        />
      </div>
      <div className="md:items-center  md:flex md:justify-  md:px-64 w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-black font-bold text-3xl">
            Oops....
            <br />
            <span className="font-semibold text-2xl">Page Not Found</span>
          </h2>
          <div className="text-xl">
            <p className="text-gray-600">
              This Page doesn't exist or was removed!
            </p>
            <p className="text-gray-600">We suggest you back to home.</p>
          </div>
          <Link to="/" className="w-full translate-x-[20%]">
            <Button className="">
              <ArrowBackIcon />
              <p>Back To Home</p>
            </Button>
          </Link>
        </div>
        <img
          src="/Images/404.svg"
          alt="Page Not Found"
          className="w-full max-w-md flex-shrink-0 ml-3 sm:ml-auto"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
