import React from "react";
import { Modal } from "@mui/material";
import Button from "../../UIElements/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import QuoteForm from "./OrderForm";
import { closeOrderFormModal } from "../../../redux/store/modalSlice";

export default function OrderFormModal() {
  const { isOpen, product } = useSelector(
    (state) => state.modal.orderFormModel
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeOrderFormModal());
  };

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
      <div className="bg-white p-6 md:px-10 px-8 md:h-[85vh] h-[95vh] w-[95vw] md:w-[75vw] rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-primary-100 md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px] font-semibold">
            Create Order
          </h1>
          <span className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Button>Create</Button>
            <Button mode="text" onClick={handleClose}>
              Close
            </Button>
          </span>
        </div>
        <QuoteForm product={null} />
      </div>
    </Modal>
  );
}
