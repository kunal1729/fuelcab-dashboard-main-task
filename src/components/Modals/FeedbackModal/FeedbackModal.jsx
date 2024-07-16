import React, { useEffect, useState } from "react";
import { Alert, Modal } from "@mui/material";
import Input from "../../UIElements/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeFeedbackModal } from "../../../redux/store/modalSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import Button from "../../UIElements/Button/Button";

export default function FeedbackModal() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const {
    feedbackModal: { isOpen },
  } = useSelector((state) => state.modal);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((d) => ({
        fullName: user.fullName,
        email: user.email,
        message: "",
      }));
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    await addDoc(collection(db, "feedback"), {
      fullName,
      email,
      message,
    });

    if (user) {
      setFormData((d) => ({ ...d, message: "" }));
    } else {
      setFormData({ fullName: "", email: "", message: "" });
    }
    setSuccess(true);
  }

  function handleInputChange(e) {
    e.preventDefault();
    if (error) {
      setError(null);
    }
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleClose(e) {
    dispatch(closeFeedbackModal());
  }

  return (
    <Modal
      open={isOpen}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={handleClose}
    >
      <section
        className="font-dmsans flex bg-white md:w-1/2 w-full m-10"
        style={{ height: "80vh" }}
      >
        <div className="w-full flex flex-col justify-between px-12 pb-16 pt-6">
          <form className="gap-4 flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold mt-2">Feedback</h1>
            <p className="font-medium">
              We'd love to hear your feedback! Please provide your name, email,
              and message below.
            </p>
            <div className="flex flex-col mx-6 gap-2 items-center">
              <Input
                title="Name"
                type="text"
                name="fullName" 
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              <Input
                title="Email"
                required
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              <Input
                required
                name="message"
                title="Message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                multiline
                rows={6}
              />
              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </div>
            {error && <Alert severity="error">{error}</Alert>}
            {success && (
              <Alert severity="success">Feedback submitted successfully!</Alert>
            )}
          </form>
        </div>
      </section>
    </Modal>
  );
}
