import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import ordersReducer from "./store/ordersRedux";
import storage from "redux-persist/lib/storage";
import walletSlice from "./store/walletSlice";
import modalSlice from "./store/modalSlice";
import authSlice from "./store/authSlice";
import currentProductSlice from "./store/currentProductSlice";
import locationSlice from "./store/locationSlice";
import chatsSlice from "./store/chatsSlice";
import productSlice from "./store/productSlice";
import supportSlice from "./store/supportSlice";


const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartReducer,
  modal: modalSlice,
  wallet: walletSlice,
  orders: ordersReducer,
  chats: chatsSlice,
  currentProduct: currentProductSlice,
  location: locationSlice,
  products: productSlice,
  support:supportSlice,
});


export const store = configureStore({
  reducer: rootReducer
});

