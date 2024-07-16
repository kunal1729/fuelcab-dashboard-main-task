import { createAsyncThunk } from "@reduxjs/toolkit";
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
import { db } from "../../firebase";
import { loadscript } from "../../utils/native";

export const getTransactions = createAsyncThunk(
  "wallet/fetchTransactions",
  async (arg, { getState }) => {
    const { userType, id } = getState().auth.user;
    const transactions = [];
    const q = query(
      collection(db, "transactions"),
      where(userType === 0 ? "buyerId" : "sellerId", "==", id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.exists()) transactions.push({ id: doc.id, ...doc.data() });
    });
    return transactions;
  }
);

// razorpay ---------------
export const payWithRazorpay = async (
  { amount, name, description },
  onSuccess,
  onError
) => {
  try {
    const isLoaded = await loadscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!isLoaded) {
      alert("No internet connection");
      return;
    }

    const OPTIONS = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount * 100,
      currency: "INR",
      name,
      description,
      handler: async function (res) {
        onSuccess && onSuccess(res);
      },
      modal: {
        ondismiss: async function () {
          onError && onError();
        },
      },
      prefill: {
        name,
      },
    };
    const paymentObj = new window.Razorpay(OPTIONS);
    paymentObj.open();
  } catch (error) {
    onError && onError();
    console.log(error);
  }
};

export const sendOtp = async ({ phoneNumber }) => {
  if (!phoneNumber) return;
  fetch(
    `https://api.authkey.io/request?authkey=40dff8dca020530e&mobile=9389586440&country_code=91&sid=8391&phoneNumber=${phoneNumber}&expireTime=1`
  );
};

// transactions ------------------
export const createTransaction = async (transactionData) => {
  const docRef = await addDoc(collection(db, "transactions"), {
    createdAt: serverTimestamp(),
    ...transactionData,
  });
  return docRef;
};

// orders --------------------
export const createOrder = async ({
  total,
  paymentId,
  buyerId,
  sellerId,
  walletDebitedAmount,
  receiptUrl,
  destination,
  productId,
  quantity,
  requirementId,
  origin,
  vehicleId,
}) => {
  const transactionRef = await createTransaction({
    amount: total,
    paymentId,
    status: 0, // success
    buyerId,
    sellerId,
    walletDebitedAmount: walletDebitedAmount || 0,
    receiptUrl: receiptUrl || "",
  });

  if (!transactionRef.id) return;

  const orderRef = await addDoc(collection(db, "orders"), {
    transactionId: transactionRef.id,
    createdAt: serverTimestamp(),
    eta: "",
    status: 0, // idle
    destination,
    buyerId,
    sellerId,
    productId: productId || "",
    quantity,
    requirementId: requirementId || "",
    origin: origin || {},
    total,
    vehicleId: vehicleId || "",
  });

  return orderRef;
};

// requirements --------------
export const createRequirement = async ({
  quantity,
  price,
  productId,
  sellerId,
  buyerId,
  open,
  productName,
  location,
  bookDate,
}) => {
  const requirementRef = await addDoc(collection(db, "requirements"), {
    open,
    quantity,
    price,
    productId: productId || "",
    sellerId: sellerId || "",
    buyerId,
    accepted: false,
    ordered: false,
    sendBy: 0,
    productName: productName || "",
    location: location || {},
    createdAt: serverTimestamp(),
    bookDate: bookDate || "",
  });
  return requirementRef;
};

export const getRequirement = async (requirementId) => {
  try {
    const docSnap = await getDoc(doc(db, "requirements", requirementId));
    if (!docSnap.exists()) {
      return;
    }
    return { ...docSnap.data(), id: docSnap.id };
  } catch (err) {
    console.log(err);
  }
};

export const acceptRequirement = async (requirementId) => {
  const requirementRef = doc(db, "requirements", requirementId);
  await updateDoc(requirementRef, {
    accepted: true,
  });
};

export const updateRequirement = async (requirementId, data) => {
  const requirementRef = doc(db, "requirements", requirementId);
  await updateDoc(requirementRef, {
    ...data,
  });
};

export const sendRequirement = async (buyerId, sellerId, requirement) => {
  const requirementRef = await createRequirement({
    buyerId,
    sellerId,
    ...requirement,
  });
  // await createChat(buyerId, sellerId, requirementRef.id);
};
