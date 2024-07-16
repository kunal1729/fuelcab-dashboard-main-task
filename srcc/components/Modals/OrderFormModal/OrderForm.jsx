import React, { useState } from "react";
import { Grid } from "@mui/material";
import Dropdown from "../../UIElements/Dropdown/Dropdown";
import AddressInput from "../../AddressInput";
import Input from "../../UIElements/Input/Input";

const PAYMENT_TERMS = [
  "100% before dispatch of material again proforma invoice",
  "50% before dispatch against proforma invoice and balance 50% at time of dispatch against Invoice & Eway bill",
  "50% before dispatch of materials against proforma invoice and balance 50% on delivery of the material",
  "50% before dispathc of material against Invoice and balance 50% on delivery of the material",
  "100% on delivery of the material",
];

export default function OrderForm({ product }) {
  const [formData, setFormData] = useState({});

  return (
    <div id="order-form">
      <p className="text-[1rem] leading-[1.5rem] text-gray-600">
        Create an order for the listing.
      </p>
      <div className="mt-4 flex flex-col h-max justify-between">
        {/* ---------- form inputs ----------- */}
        <div className="w-full mt-4">
          <Grid container spacing={2}>
            {/*  -------- Price per unit ---- */}
            <Grid item xs={12} md={6}>
              <Input
                placeholder="Enter Unit Price"
                value={formData.unitPrice}
                name="unitPrice"
                containerProps={{ className: "mt-0" }}
                required
                type="number"
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    unitPrice: e.target.value,
                  }))
                }
                title="Unit Price"
              />
            </Grid>
            {/*  -------- Delivery Address ---- */}
            <Grid item xs={12} md={6}>
              <AddressInput />
            </Grid>

            {/*  -------- quantity needed ---- */}
            <Grid item xs={12} md={6}>
              <Input
                value={formData.quantity}
                onChange={(e) => {
                  setFormData((p) => ({
                    ...p,
                    quantity: e.target.value,
                  }));
                }}
                required
                type="number"
                title="Quantity Needed"
                placeholder="Quantity"
              />
            </Grid>
            {/* ---------- expected delivery days */}
            <Grid item xs={12} md={6}>
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
                title="Expected Days"
                placeholder="Enter days (Number)"
              />
            </Grid>
            {/* -----  Payment Terms ------- */}
            <Grid item xs={12} md={6}>
              <p className="text-sm leading-[18px] font-[500] font-dmsans pb-[4px]">
                Payment Terms
              </p>
              <Dropdown
                units={PAYMENT_TERMS}
                unit={PAYMENT_TERMS[formData.paymentTerm]}
                setUnit={(value) => {
                  setFormData((p) => ({
                    ...p,
                    paymentTerm: PAYMENT_TERMS.indexOf(value),
                  }));
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
