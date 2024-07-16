import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    authModal: { isOpen: false, modalNumber: 0, callback: () => {} }, // 0 - login, 1 - signup
    productFormModal: { isOpen: false, productId: "" },
    orderFormModel: { isOpen: false, product: null },
    feedbackModal: { isOpen: false },
    orderSuccessModal: { isOpen: false },
    profileChangeModal: { isOpen: false, profile: 0 },
    addressModal: { isOpen: false },
    addressFormModal: { isOpen: false },
    productSelectorModal: {
      isOpen: false,
      singleSelect: false,
      onSelect: () => {},
    },
    snackbar: { isOpen: false, message: "", type: "error", cb: () => {} },
  },
  reducers: {
    openSnackbar: (state, action) => {
      state.snackbar.isOpen = true;
      const { message, type, cb } = action.payload;
      state.snackbar.message = message;
      if (type) state.snackbar.type = type;
      if (cb) state.snackbar.cb = cb;
    },
    closeSnackbar: (state) => {
      state.snackbar.isOpen = false;
      state.snackbar.message = "";
      state.snackbar.type = "error";
      state.snackbar.cb = () => {};
    },
    closeAuthModal: (state) => {
      state.authModal.isOpen = false;
      state.authModal.callback = () => {};
    },
    openAuthModal: (state, { payload }) => {
      state.authModal.isOpen = true;
      if (payload) {
        state.authModal.callback = payload;
      }
    },
    resetAuthModal: (state) => {
      state.authModal = { isOpen: false, modalNumber: 0, callback: () => {} };
    },
    changeAuthModalNumber: (state, action) => {
      state.authModal.modalNumber = action.payload.modalNumber;
    },
    closeProductFormModal: (state) => {
      state.productFormModal.isOpen = false;
    },
    openProductFormModal: (state, action) => {
      state.productFormModal.isOpen = true;
      state.productFormModal.productId = action.payload;
    },
    closeProductSelectorModal: (state) => {
      state.productSelectorModal.isOpen = false;
    },
    openProductSelectorModal: (state, action) => {
      state.productSelectorModal.isOpen = true;
      state.productSelectorModal.onSelect = action.payload.onSelect;
      state.productSelectorModal.singleSelect = action.payload.singleSelect;
    },
    closeOrderFormModal: (state) => {
      state.orderFormModel.isOpen = false;
    },
    openOrderFormModal: (state, action) => {
      state.orderFormModel.isOpen = true;
      state.orderFormModel.product = action.payload;
    },
    openFeedbackModal: (state) => {
      state.feedbackModal.isOpen = true;
    },
    closeFeedbackModal: (state) => {
      state.feedbackModal.isOpen = false;
    },
    openAddressFormModal: (state) => {
      state.addressFormModal.isOpen = true;
    },
    closeAddressFormModal: (state) => {
      state.addressFormModal.isOpen = false;
    },
    openOrderSuccessModal: (state) => {
      state.orderSuccessModal.isOpen = true;
    },
    closeOrderSuccessModal: (state) => {
      state.orderSuccessModal.isOpen = false;
    },
    openProfileChangeModal: (state, action) => {
      state.profileChangeModal.isOpen = true;
      state.profileChangeModal.profile = action.payload;
    },
    closeProfileChangeModal: (state) => {
      state.profileChangeModal.isOpen = false;
      state.profileChangeModal.profile = 0;
    },
    openAddressModal: (state) => {
      state.addressModal.isOpen = true;
    },
    closeAddressModal: (state) => {
      state.addressModal.isOpen = false;
    },
  },
});

export const {
  closeAuthModal,
  openAuthModal,
  changeAuthModalNumber,
  resetAuthModal,
  closeProductFormModal,
  openProductFormModal,
  openOrderFormModal,
  closeOrderFormModal,
  openFeedbackModal,
  openProductSelectorModal,
  closeProductSelectorModal,
  openOrderSuccessModal,
  closeProfileChangeModal,
  openAddressFormModal,
  closeAddressFormModal,
  openProfileChangeModal,
  closeOrderSuccessModal,
  closeFeedbackModal,
  openSnackbar,
  closeSnackbar,
  openAddressModal,
  closeAddressModal,
} = modalSlice.actions;
export default modalSlice.reducer;
