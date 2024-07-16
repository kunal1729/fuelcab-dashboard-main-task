import React, { useState, useEffect, useMemo } from "react";
import style from "./SellerModal.module.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Modal, Snackbar, Alert } from "@mui/material";

import { closeProductFormModal } from "../../../redux/store/modalSlice";
import Input from "../../UIElements/Input/Input";
import Dropdown from "../../UIElements/Dropdown/Dropdown";
import { PAYMENT_TERMS,FREQUENCIES,CHARGE_TYPES } from "../../../constants/product";
import { postProduct } from "../../../redux/api/product";
import { PRODUCT_UNIT } from "../../../constants/product";
import RadioButton from "../../UIElements/RadioButton/RadioButton";
import AddressInput from "../../AddressInput";
import Button from "../../UIElements/Button/Button";
import CheckBox from "../../UIElements/CheckBox/CheckBox";
import { getCategoryFromPID, getProductByID } from "../../../utils/helper";

const formInintialData = {
  gst: {
    type: 0,
    value: "",
  },
  unitPrice: {
    negotiable: false,
    value: "",
  },
  unit: 0,
  transportationCharge: {
    type: 0,
    value: "",
  },
  quantity: {
    monthsAvailable: "",
    frequencyType: 0,
    value: "",
  },
  paymentTermType: 0,
  expectedDeliveryDays: "",
  qualityRemark: "",
  origin: {},
};

export default function ProductFormModal() {
  const { isOpen, productId } = useSelector(
    (state) => state.modal.productFormModal
  );
  const [formData, setFormData] = useState(formInintialData);
  const [productImages, setProductImages] = useState([]);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const product = useMemo(() => {
    if (productId) setFormData((p) => ({ ...p, productId }));
    return getProductByID(productId);
  }, [productId]);

  function handleClose() {
    setFormData({ ...formInintialData });
    setProductImages([]);
    setStep(0);
    dispatch(closeProductFormModal());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (step < 1) {
      setStep(step + 1);
      return;
    }
    if (!formData.origin.coords) {
      setSnackbarMessage("Enter a valid address");
      return;
    }
    setLoading(true);
    try {
      await postProduct({
        ...formData,
        productId,
        category: getCategoryFromPID(productId),
        images: productImages,
        sellerId: currentUser.id,
      });
      setFormData({ ...formInintialData });
      setProductImages([]);
      setStep(0);
      setLoading(false);
      dispatch(closeProductFormModal());
    } catch (err) {
      setLoading(false);
      setSnackbarMessage("Something went wrong");
    }
  }

  function uploadImage(e) {
    const file = e.target.files;
    setProductImages((p) => [...p, ...file]);
  }

  console.log(formData);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        zIndex: 1,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:px-10 px-8 md:h-[85vh] h-[95vh] w-[95vw] md:w-[75vw] rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="text-primary-100 md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px] font-semibold">
            Add New Product
          </h1>
          {/*  -------- buttons -------- */}
          <span className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Button loading={loading}>
              {step === 1 ? "Add Product" : "Next"}
            </Button>
            {step === 1 && (
              <Button mode="text" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step === 0 && (
              <Button
                mode="text"
                onClick={() => dispatch(closeProductFormModal())}
              >
                Close
              </Button>
            )}
          </span>
        </div>
        <p className="text-[1rem] leading-[1.5rem] text-gray-600">
          List your product under 1 min
        </p>
        <p className="text-[0.9rem] leading-[1.5rem] text-gray-600 mt-2">
          {`STEP - ${step + 1}/2`}
        </p>
        <div className="flex flex-col h-max justify-between">
          {/* ---------- form inputs ----------- */}
          <div className="w-full mt-4">
            {step === 0 ? (
              <Grid container spacing={2}>
                {/* ----- sub category dropdown ------- */}
                <Grid item xs={12} md={6}>
                  <Input value={product?.title} disabled title="Product" />
                </Grid>
                {/*  -------- Pickup Address ---- */}
                <Grid item xs={12} md={6}>
                  <AddressInput
                    label="Pickup Address"
                    onChange={(origin) =>
                      setFormData((p) => ({ ...p, origin }))
                    }
                  />
                </Grid>
                {/*  -------- available quantity with frequency ---- */}
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col w-full h-[60px] gap-[5px]">
                    <div className="flex flex-col">
                      <p className="text-sm font-[500]">Available Quantity</p>
                      <RadioButton
                        name="availableFrequencyType"
                        title=""
                        size="small"
                        values={FREQUENCIES}
                        value={FREQUENCIES[formData.quantity.frequencyType]}
                        onChange={(e) => {
                          setFormData((p) => ({
                            ...p,
                            quantity: {
                              ...p.quantity,
                              frequencyType: FREQUENCIES.indexOf(
                                e.target.value
                              ),
                            },
                          }));
                        }}
                      />
                    </div>
                    <div className="flex h-full">
                      <Input
                        value={formData.quantity.value}
                        onChange={(e) => {
                          setFormData((p) => ({
                            ...p,
                            quantity: {
                              ...p.quantity,
                              value: e.target.value,
                            },
                          }));
                        }}
                        required
                        type="number"
                        placeholder="Quantity"
                      />
                      <Dropdown
                        unit={PRODUCT_UNIT[formData.unit]}
                        setUnit={(value) => {
                          setFormData((p) => ({
                            ...p,
                            unit: PRODUCT_UNIT.indexOf(value),
                          }));
                        }}
                        inputClass={"!rounded-r-md !rounded-l-none"}
                        units={PRODUCT_UNIT}
                      />
                    </div>
                  </div>
                </Grid>
                {/*  -------- Price per unit ---- */}
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col w-full gap-[5px]">
                    <div className="flex flex-col">
                      <p className="text-sm font-[500]">Price Per Unit</p>
                      <CheckBox
                        checked={formData.unitPrice.negotiable}
                        label={"Price is Negotiable"}
                        size="small"
                        onChange={() =>
                          setFormData((p) => ({
                            ...p,
                            unitPrice: {
                              ...p.unitPrice,
                              negotiable: !formData.unitPrice.negotiable,
                            },
                          }))
                        }
                      />
                    </div>
                    <Input
                      placeholder="Enter Unit Price"
                      value={formData.unitPrice.value}
                      name="unitPrice"
                      containerProps={{ className: "mt-0" }}
                      required
                      type="number"
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          unitPrice: {
                            ...p.unitPrice,
                            value: e.target.value,
                          },
                        }))
                      }
                      title=""
                    />
                  </div>
                </Grid>
                {/*  -------- transport charge ---- */}
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col w-full h-[60px] gap-[5px]">
                    <div className="flex flex-col">
                      <p className="text-sm font-[500]">
                        Transport Charge Per Unit
                      </p>
                      <RadioButton
                        name="availableFrequency"
                        title=""
                        size="small"
                        values={CHARGE_TYPES}
                        value={CHARGE_TYPES[formData.transportationCharge.type]}
                        onChange={(e) => {
                          setFormData((p) => ({
                            ...p,
                            transportationCharge: {
                              ...p.transportationCharge,
                              type: CHARGE_TYPES.indexOf(e.target.value),
                            },
                          }));
                        }}
                      />
                    </div>
                    <Input
                      placeholder="Enter Transport Unit charge"
                      value={formData.transportationCharge.value}
                      name="transportUnitPrice"
                      containerProps={{ className: "mt-0" }}
                      required
                      type="number"
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          transportationCharge: {
                            ...p.transportationCharge,
                            value: e.target.value,
                          },
                        }))
                      }
                      title=""
                    />
                  </div>
                </Grid>
                {/*  -------- GST ---- */}
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col w-full gap-[5px]">
                    <div className="flex flex-col">
                      <p className="text-sm font-[500]">GST</p>
                      <RadioButton
                        name="availableFrequency"
                        title=""
                        size="small"
                        values={CHARGE_TYPES}
                        value={CHARGE_TYPES[formData.gst.type]}
                        onChange={(e) => {
                          setFormData((p) => ({
                            ...p,
                            gst: {
                              ...p.gst,
                              type: CHARGE_TYPES.indexOf(e.target.value),
                            },
                          }));
                        }}
                      />
                    </div>
                    <Input
                      placeholder="Enter GST charge percentage"
                      value={formData.gst.value}
                      name="gst"
                      containerProps={{ className: "mt-0" }}
                      required
                      type="number"
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          gst: {
                            ...p.gst,
                            value: e.target.value,
                          },
                        }))
                      }
                      title=""
                    />
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {/* ---------- expected delivery days */}
                <Grid item xs={12} md={6}>
                  <span className="mt-1 flex w-full">
                    <Input
                      value={formData.expectedDeliveryDays}
                      onChange={(e) => {
                        setFormData((p) => ({
                          ...p,
                          expectedDeliveryDays: e.target.value,
                        }));
                      }}
                      required
                      type="number"
                      className={`${
                        formData.quantity.frequencyType === 0
                          ? "rounded-md"
                          : "rounded-l-md"
                      } outline-none`}
                      title="Expected Delivery Time (Days)"
                      placeholder="Enter days (Number)"
                    />
                    {formData.quantity.frequencyType === 1 && (
                      <Input
                        value={formData.quantity.frequencyType}
                        onChange={(e) => {
                          setFormData((p) => ({
                            ...p,
                            quantity: {
                              ...p.quantity,
                              monthsAvailable: e.target.value,
                            },
                          }));
                        }}
                        required
                        type="number"
                        className="rounded-r-md"
                        placeholder="Enter Months"
                      />
                    )}
                  </span>
                </Grid>
                {/* -----  Payment Terms ------- */}
                <Grid item xs={12} md={6}>
                  <p className="text-sm font-[500] pb-[4px]">Payment Terms</p>
                  <div className="h-[70%]">
                    <Dropdown
                      units={PAYMENT_TERMS}
                      unit={PAYMENT_TERMS[formData.paymentTermType]}
                      setUnit={(value) => {
                        setFormData((p) => ({
                          ...p,
                          paymentTermType: PAYMENT_TERMS.indexOf(value),
                        }));
                      }}
                    />
                  </div>
                </Grid>
                {/* ---------- quanlity remark ---------- */}
                <Grid item xs={12} md={6}>
                  <label
                    className="text-sm font-[500]"
                    htmlFor="quality-remark"
                  >
                    Quality Remark
                  </label>
                  <textarea
                    minRows={3}
                    id="quality-remark"
                    name="description"
                    value={formData.qualityRemark}
                    placeholder="Product Description"
                    required
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        qualityRemark: e.target.value,
                      }))
                    }
                    className="mt-1 p-4 h-[70%] w-full text-black bg-gray-50 text-sm border rounded-md outline-none"
                  />
                </Grid>
                {/* ------- product images --------- */}
                <Grid item xs={12} md={6}>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    onChange={uploadImage}
                    name="file"
                    multiple
                  />
                  <div className={style.uploadImages}>
                    <label className="text-sm font-[500]">Images</label>
                    <div className={style.imageSection}>
                      {productImages.map((img, index) => {
                        return (
                          <label
                            key={index}
                            className={style.image}
                            style={{ marginLeft: "10px" }}
                          >
                            <img
                              src={URL.createObjectURL(img)}
                              height={"100%"}
                              width={"100%"}
                              style={{ borderRadius: "45%" }}
                              alt="pic"
                            />
                          </label>
                        );
                      })}

                      {productImages?.length <= 4 && (
                        <label
                          className={style.image}
                          for="file"
                          style={{ marginLeft: "10px" }}
                        >
                          <AddPhotoAlternateIcon className={style.addPhoto} />
                        </label>
                      )}

                      {!productImages[0] && (
                        <div className={style.description}>
                          <label for="file" className="text-primary-100">
                            Click here to upload
                          </label>
                          <p className={style.secondary}>
                            SVG, PNG or JPG (max. 800x400px)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={2000}
          onClose={() => {
            setSnackbarMessage("");
          }}
        >
          <Alert
            severity={"error"}
            onClose={() => setSnackbarMessage("")}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </form>
    </Modal>
  );
}
