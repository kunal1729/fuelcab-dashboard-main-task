import React, { useState, useRef, useEffect } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Modal, Grid, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../UIElements/Dropdown/Dropdown";
import Input from "../UIElements/Input/Input";
import { getStructuredLocation } from "../../utils/location";
import { Add } from "@mui/icons-material";
import {
  closeAddressFormModal,
  openAddressFormModal,
} from "../../redux/store/modalSlice";
import Button from "../UIElements/Button/Button";
import { State } from "country-state-city";
import { addUserAddress, getUserAddresses } from "../../redux/api/user";

const formInintialData = {
  state: "",
  postalCode: "",
  city: "",
  addressLine: "",
};

export default function AddressInput({ onChange,label, ...rest }) {
  const { isOpen } = useSelector((state) => state.modal.addressFormModal);
  const [formData, setFormData] = useState(formInintialData);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    getUserAddresses().then((addresses) => {
      setAddresses(addresses);
    });
  }, []);

  const handlePlaceChanged = async () => {
    const [place] = inputRef.current.getPlaces();
    const address = getStructuredLocation(place);
    address.state = "";
    setFormData({ ...formData, ...address });
  };

  const handleAdd = () => {
    dispatch(openAddressFormModal());
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await addUserAddress(formData);
    setAddresses((p) => [...p, formData]);
    onChange(formData)
  };

  return (
    <>
      <div {...rest}>
        <div className="font-dmsans flex gap-2 relative w-fit">
          <p className="text-sm leading-[18px] mb-1">
            {label}
          </p>
          <IconButton
            sx={{ position: "absolute", right: -30, top: -5 }}
            size="small"
            onClick={handleAdd}
          >
            <Add fontSize="small" />
          </IconButton>
        </div>
        <Dropdown
          className="cursor-pointer"
          units={addresses}
          propertyShown="addressLine"
          unit={selectedAddress}
          setUnit={(value) => {
            setSelectedAddress(value);
            onChange(value)
          }}
        />
      </div>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeAddressFormModal())}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <form
          className="font-dmsans rounded-md bg-white md:w-1/2 w-full px-8 py-6"
          style={{ height: "80vh" }}
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <h1 className="text-primary-100 md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px] font-semibold">
              Add New Address
            </h1>
            <span className="flex flex-col md:flex-row justify-center items-center gap-2">
              <Button loading={false}>Add</Button>
            </span>
          </div>
          <p className="text-[1rem] leading-[1.5rem] text-gray-600">
            Add a new address to your profile
          </p>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <div className="flex flex-col w-full gap-[5px]">
                <label className="text-sm font-[500]">Address Line</label>
                <StandaloneSearchBox
                  style={{ border: "10px" }}
                  onLoad={(ref) => (inputRef.current = ref)}
                  onPlacesChanged={handlePlaceChanged}
                >
                  <Input
                    type="text"
                    inputRef={inputRef}
                    placeholder="Enter Address Line"
                    value={formData.addressLine}
                    name="addressLine"
                    required
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        addressLine: e.target.value,
                      }))
                    }
                  />
                </StandaloneSearchBox>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Input
                placeholder="Enter City"
                value={formData.city}
                name="city"
                required
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    city: e.target.value,
                  }))
                }
                title="City"
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text-sm font-[500] pb-[4px]">State</p>
              {console.log(formData)}
              <Dropdown
                units={State.getStatesOfCountry("IN").map((s) => s.name)}
                innerProperty="name"
                unit={formData.state}
                setUnit={(value) => {
                  setFormData((p) => ({
                    ...p,
                    state: value,
                  }));
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                placeholder="Enter Postal Code"
                value={formData.postalCode}
                name="postalCode"
                required
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    postalCode: e.target.value,
                  }))
                }
                title="Postal Code"
              />
            </Grid>
          </Grid>
        </form>
      </Modal>
    </>
  );
}
