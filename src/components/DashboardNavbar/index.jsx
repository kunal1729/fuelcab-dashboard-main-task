import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import {logout} from "../../redux/api/auth"
import Button from "../UIElements/Button/Button";

export default function DashboardNavbar({title}) {
    const currentUser = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
      };

    return (
        <div className="flex justify-between items-center px-4 py-4 flex-wrap border-b-1">
            <div className="flex  flex-wrap justify-start items-center gap-5">
                <p className="font-bold font-poppins text-2xl  text-[#8A8A8A] sm:pb-0">
                    {title}
                </p>
            </div>
            <div className="flex flex-row gap-4 relative right-6 items-center justify-center">
                <div className="flex gap-1">
                    <p className="text-[#8A8A8A] text-md flex items-center">
                        {currentUser?.companyName}
                    </p>
                </div>
                <IconButton>
                <NotificationsIcon
                    className="text-[#1D523B]"
                    fontSize="large"
                />
                </IconButton>
                <Button onClick={handleLogout} className="py-2">
                    Logout 
                </Button>
            </div>
        </div>
    )
}