import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDocs,
  query,
  collection,
  where,
  Timestamp,
  setDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { uploadBytes, ref, getStorage } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, app } from "../../firebase";
import { openSnackbar } from "../store/modalSlice";

const storage = getStorage(app);

export const getTickets = createAsyncThunk(
  "support/fetchTickets",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().auth?.user;
      const q = query(collection(db, "supports"), where("userId", "==", id));
      const tickets = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.exists()) tickets.push({ id: doc.id, ...doc.data() });
      });
      return tickets;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

export const createPartnerShipQuery = async (queryData) => {
  try {
    const docRef = await addDoc(collection(db, "partnershipQueries"), {
      ...queryData,
      createdAt: Timestamp.fromDate(new Date()),
    });
    return { docId: docRef.id, error: null };
  } catch (err) {
    return { docId: null, error: "Something went wrong" };
  }
};

export const createTicket = createAsyncThunk(
  "support/createTicket",
  async (ticketData, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id: uid } = getState().auth?.user;
      const id = uuidv4();
      const imagePromises = ticketData.files.map(async (file, index) => {
        const storageRef = ref(storage, `supports/${id}/${index}`);
        return uploadBytes(storageRef, file);
      });
      const imagesRef = await Promise.all(imagePromises);
      delete ticketData.files;
      const ticket = {
        ...ticketData,
        status: 0,
        userId: uid,
        createdAt: Timestamp.fromDate(new Date()),
        filesUrl: imagesRef.map(({ metadata }) => `${metadata.fullPath}`),
      };
      await setDoc(doc(db, "supports", id), ticket);
      dispatch(openSnackbar({ message: "Ticker Created", type: "success" }));
      return ticket;
    } catch (err) {
      dispatch(openSnackbar({ message: "Something went wrong" }));
      rejectWithValue(err.message);
    }
  }
);
