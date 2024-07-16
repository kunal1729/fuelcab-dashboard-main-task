import { Divider, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ArrowBack, Close } from "@mui/icons-material";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { closeAddressModal } from "../../../redux/store/modalSlice";
import { getStructuredLocation } from "../../../utils/location";
import { setLocation } from "../../../redux/store/locationSlice";

export default function AddressModal() {
  const { isOpen } = useSelector((state) => state.modal.addressModal);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (!searchValue) return;

    const debounce = (func, delay) => {
      clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        func();
      }, delay);
    };

    debounce(() => {
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        { input: searchValue },
        (predictions, status) => {
          if (status === "OK" && predictions) {
            setResults(predictions);
          }
        }
      );
    }, 500);

    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue]);

  const handleClose = () => {
    setResults([]);
    setSearchValue("");
    dispatch(closeAddressModal());
  };

  const handleSelect = (location) => {
    const placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    placesService.getDetails(
      { placeId: location.place_id },
      (place, status) => {
        if (status === "OK" && place) {
          const structuredLoc = getStructuredLocation(place);
          dispatch(setLocation(structuredLoc));
          localStorage.setItem("lastLocation", JSON.stringify(structuredLoc));
          handleClose();
        } else {
          console.log("Place not found");
        }
      }
    );
  };

  return (
    <Modal open={isOpen} sx={{zIndex:10}}>
      <div className="font-dmsans flex items-center justify-center h-[100vh]">
        <section className="w-[40%]">
          <div onClick={handleClose} className="flex justify-end">
            <span className="hover:bg-gray-200 bg-white w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
              <Close />
            </span>
          </div>
          <div className="rounded-md bg-gray-200 mt-2">
            <div
              className={`rounded-t-md ${
                !results.length ? "rounded-b-md" : ""
              } bg-white p-6`}
            >
              <div className="p-5 border px-5 h-[50px] rounded-md flex gap-4 items-center w-full">
                <span
                  className="text-gray cursor-pointer"
                  onClick={handleClose}
                >
                  <ArrowBack fontSize="small" />
                </span>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="outline-none bg-transparent text-sm"
                  placeholder="Enter Address"
                  type="text"
                  maxlength="11"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  spellcheck="true"
                  inputmode="numeric"
                />
              </div>
            </div>

            {!!results.length && (
              <div className="mt-2 rounded-b-md bg-white p-6">
                <h2 className="text-2xl">Results</h2>
                <ul className="mt-2">
                  {results.map((suggestion, index) => (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleSelect(suggestion)}
                    >
                      <li
                        key={index}
                        className="flex gap-2 items-center py-2 font-[300]"
                      >
                        <FiMapPin />
                        <span>
                          {`${suggestion.description}`.slice(0, 50)}
                          {suggestion.description.length > 50 ? "..." : ""}
                        </span>
                      </li>

                      {index !== results.length - 1 && (
                        <Divider sx={{ my: 1 }} />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </Modal>
  );
}
