import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getDoc,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { app, db } from "../../firebase";
import { USER_TYPES } from "../../constants/user";
import { openSnackbar } from "../store/modalSlice";
import { extractError } from "../../utils/string";

const auth = getAuth(app);

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (!docSnap.exists()) {
        return rejectWithValue("User not found!");
      }
      dispatch(
        openSnackbar({ message: "Successfully logged In", type: "success" })
      );
      return { ...docSnap.data(), id: user.uid };
    } catch (error) {
      console.log(error);
      return rejectWithValue(extractError(error.message));
    }
  }
);

export const reAuth = createAsyncThunk(
  "reAuth",
  async (user, { rejectWithValue }) => {
    try {
      if (!user) {
        return rejectWithValue(false);
      }
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (!docSnap.exists()) {
        return rejectWithValue("Something went wrong!");
      }
      return { ...docSnap.data(), id: user.uid };
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  }
);

export const logout = createAsyncThunk("logout", async () => {
  await signOut(auth);
});

export const register = createAsyncThunk(
  "register",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      if (!userData?.phoneNumber) throw "No Phone Number";
      const { user } = await createUserWithEmailAndPassword(
        auth,
        `${userData.phoneNumber}@fuelcab.com`,
        userData.password
      );
      delete userData.password;
      delete userData.otp;
      const newUserData = {
        ...userData,
        walletAmount: 0,
        profileURL: "",
        membershipId: "FF",
        defaultBillingId: "",
        interestedProducts: [],
        address: {
          addressLine: "",
          city: "",
          state: "",
          postalCode: "",
          coords: { latitude: "", longitude: "" },
        },
        createdAt: Timestamp.fromDate(new Date()),
      };
      await setDoc(doc(db, "users", user.uid), newUserData);
      dispatch(
        openSnackbar({ message: "Successfully  Registered", type: "success" })
      );
      return { id: user.uid, ...newUserData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "refreshUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { id } = getState().auth?.user;
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, {
        ...userData,
      });
      return userData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
