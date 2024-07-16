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
import { app, db } from "../../firebase";
import { getAuth } from "firebase/auth";

export const sendOTP = async (phoneNumber) => {
  if (!phoneNumber) return;
  const res = await fetch(
    `https://civil-sprite-393009.df.r.appspot.com/apiv1/otp/generate`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "FC-API-Key": "FCI1-API-MART",
      },
      body: `phoneNumber=${phoneNumber}`,
    }
  );
  return res;
};

// verify otp
export const verifyOTP = async (phoneNumber, otp) => {
  if (!phoneNumber) return;
  const res = await fetch(
    `https://civil-sprite-393009.df.r.appspot.com/apiv1/otp/verify`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "FC-API-Key": "FCI1-API-MART",
      },
      body: `phoneNumber=${phoneNumber}&otp=${otp}`,
    }
  );
  return res;
};

// users ------------------------
export const getUser = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (!docSnap.exists()) {
      return;
    }
    return { ...docSnap.data(), id: docSnap.id };
  } catch (err) {
    console.log(err);
  }
};

export const setUserProfile = async (userId, userType) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    userType,
  });
};

export async function getUserAddresses() {
  try {
    const auth = getAuth();
    const q = query(collection(db, "users", auth.currentUser.uid, "addresses"));
    const querySnapshot = await getDocs(q);
    const addresses = [];
    querySnapshot.forEach((doc) => {
      if (doc.exists()) addresses.push({ id: doc.id, ...doc.data() });
    });
    return addresses;
  } catch (err) {
    console.log("addresses", err);
  }
}

export async function addUserAddress(address) {
  try {
    const auth = getAuth();
    const data = {
      ...address,
      createdAt: Timestamp.fromDate(new Date()),
    };
    await addDoc(
      collection(db, "users", auth.currentUser.uid, "addresses"),
      data
    );
    return data;
  } catch (err) {
    console.log("addresses", err);
  }
}
