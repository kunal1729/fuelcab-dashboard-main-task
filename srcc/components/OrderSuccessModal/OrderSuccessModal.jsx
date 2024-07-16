import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeOrderSuccessModal } from "../../redux/store/modalSlice";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function OrderSuccessModal() {
  const { isOpen } = useSelector((state) => state.modal.orderSuccessModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeOrderSuccessModal());
  };

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={isOpen}
      onClose={handleClose}
    >
      <div className="p-4 bg-white mx-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Request Send!</h1>
          <span className="flex border-1 rounded-[50%] justify-center items-center p-2">
            <GrClose
              className="cursor-pointer font-bold text-xl"
              onClick={handleClose}
            />
          </span>
        </div>
        <p className="mt-2 text-sm">
          Thank you for the request, we have send your requirement to the
          Fuelcab.
        </p>
        <Link to="/dashboard/chat">
          <button
            onClick={handleClose}
            className="mt-4 bg-[#1D523B] text-white py-2 px-4 justify-center flex items-center font-inter font-semibold text-[15px] tracking-[-0.03em] hover:scale-105 duration-200"
          >
            Chat with the seller
          </button>
        </Link>
      </div>
    </Modal>
  );
}
