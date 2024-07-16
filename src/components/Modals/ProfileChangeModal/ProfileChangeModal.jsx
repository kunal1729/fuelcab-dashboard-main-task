import { Modal ,CircularProgress} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeProfileChangeModal } from "../../../redux/store/modalSlice";
import { useEffect, useState } from "react";
import { setUserProfile } from "../../../redux/api/user";
import { setUserType } from "../../../redux/store/authSlice";
import { GrClose } from "react-icons/gr";

export default function ProfileChangeModal() {
  const { isOpen, profile } = useSelector(
    (state) => state.modal.profileChangeModal
  );
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!profile) return;
  //   setSelectedProfile(profile);
  // }, [profile]);

  async function handleConfirm() {
    try {
      setLoading(true);
      const newType = user.userType === 0 ? 1 : 0;
      await setUserProfile(user.id,newType);
      dispatch(setUserType(newType));
      dispatch(closeProfileChangeModal());
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={isOpen}
      onClose={() => {
        dispatch(closeProfileChangeModal());
      }}
    >
      <div className="bg-white md:w-[40%] w-[90%] py-8 px-8">
        <div className="flex justify-between mx-0">
          <h1 className="text-primary-100 md:text-[2.4rem] text-[2rem] leading-[2.8rem] trailing-[1.5px] font-semibold">
            Switch Profile
          </h1>
          <span className="flex border-1 rounded-[50%] justify-center items-center px-3">
            <GrClose
              className="cursor-pointer font-bold text-xl"
              onClick={() => {
                dispatch(closeProfileChangeModal());
              }}
            />
          </span>
        </div>
        <p className="text-[1rem] leading-[1.5rem] text-gray-600 mt-2">Your current profile is {user?.userType === 0 ? "Buyer" : "Seller"}, confirm to switch profile to {user?.userType === 0 ? "Seller" : "Buyer"}</p>
        <button
          className="py-4 px-8 bg-[#1D523B] text-white mt-4 h-[60px] flex items-center"
          onClick={handleConfirm}
        >
          {loading && <CircularProgress size="20px" sx={{ color: "white", padding: 0, marginRight: 2 }} />}
          Confirm
        </button>
      </div>
    </Modal>
  );
}
