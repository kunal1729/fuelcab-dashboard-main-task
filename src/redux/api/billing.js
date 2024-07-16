import {
    doc,
    setDoc,
    getDoc,
    where,
    query,
    collection,
    addDoc,
    getDocs,
    Timestamp,
    serverTimestamp,
    updateDoc,
  } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";

export const addBilling = createAsyncThunk(
  "addBilling",
  async (billingData, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().auth?.user;
      const newBilling = {
        ...billingData,
        createdAt: Timestamp.fromDate(new Date()),
      };
      await addDoc(collection(db, "users", id, "billings"), newBilling);
      return newBilling;
    } catch (err) {
      rejectWithValue("billing", err);
    }
  }
);

export const getBillings = createAsyncThunk(
  "fetchBillings",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().auth?.user;
      const q = query(collection(db, "users", id, "billings"));
      const querySnapshot = await getDocs(q);
      const billings = [];
      querySnapshot.forEach(async (doc) => {
        if (doc.id) {
          billings.push({ ...doc.data(), id: doc.id });
        }
      });
      return billings;
    } catch (error) {
      rejectWithValue("billing", error);
    }
  }
);

// billings ----------------
export const getAddress = async (addressId) => {
  try {
    const docSnap = await getDoc(doc(db, "addresses", addressId));
    if (!docSnap.exists()) {
      return;
    }
    return { ...docSnap.data(), id: docSnap.id };
  } catch (err) {
    console.log(err);
  }
};
