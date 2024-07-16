import { Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { SUB_CATEGORIES } from "../../../constants/product";
import Button from "../../UIElements/Button/Button";
import { closeProductSelectorModal } from "../../../redux/store/modalSlice";
import { ArrowForward } from "@mui/icons-material";

export default function ProductSelectorModal({ type = "solid" }) {
  const { isOpen, onSelect, singleSelect } = useSelector(
    (state) => state.modal.productSelectorModal
  );
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);

  function handleSelect(id) {
    setSelectedProducts((p) => {
      if (p.includes(id)) {
        return [...p].filter((s) => s !== id);
      } else {
        return [...p, id];
      }
    });
    if (singleSelect) {
      onSelect && onSelect(id);
      dispatch(closeProductSelectorModal());
    }
  }

  function handleClose() {
    dispatch(closeProductSelectorModal());
  }

  return (
    <Modal
      open={isOpen}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className="font-dmsans bg-white lg:px-12 px-8 py-10 w-[80%] h-[80%] rounded-md overflow-y-scroll">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-black">
            Select Product{" "}
            <span className="capitalize text-gray-500">({type})</span>
          </h2>
          <span className="flex gap-2">
            <Button onClick={handleClose} className="w-fit gap-2" mode="text">
              Close
            </Button>
            <Button className="w-fit gap-2" disabled={!selectedProducts.length}>
              Done <ArrowForward fontSize="small" />
            </Button>
          </span>
        </div>
        <p className="mt-1 text-gray-400 text-md">
          Select sub category type of the product to proceed further.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text mt-12">
          {SUB_CATEGORIES[type].map(({ title, desc, id }, idx) => (
            <div
              onClick={() => handleSelect(id)}
              className={`flex gap-2 rounded-md h-full relative border ${
                selectedProducts.includes(id) ? "scale-90" : "hover:scale-105"
              }  transition-all duration-300 cursor-pointer py-4 px-8 hover:shadow-2xl hover:shadow-gray-500/30`}
            >
              <img src={`./Solid/${idx + 1}.png`} className="h-[120px]" />
              <span>
                <div className="text-xl font-[500] py-2">{title}</div>
                <div className="text-gray-500">{desc}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
