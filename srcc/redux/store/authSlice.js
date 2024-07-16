import { createSlice } from "@reduxjs/toolkit";
import { login, logout, reAuth, register, refreshUser } from "../api/auth";
import { addBilling, getBillings } from "../api/billing";
import { getUserFormPercentage } from "../../utils/helper";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    isLoaded: false, // initial auth load
    profilePercentage:0, // percentage of profile data completed
    error: false,
  },
  reducers: {
    clearAuthError: (state) => {
      state.error = false;
      state.loading = false
    },
    updateWalletAmount: (state, { payload: { newAmount } }) => {
      state.user.walletAmount = newAmount;
    },
    setUserType: (state, { payload }) => {
      state.user.userType = payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(addBilling.pending, (state) => {
      state.loading = true;
    })
    .addCase(addBilling.fulfilled, (state, action) => {
      state.loading = false;
      state.user?.billings?.push(action.payload);
    })
    .addCase(addBilling.rejected, (state) => {
      state.loading = false;
    });
    builder
      .addCase(getBillings.pending, (state) => {
      })
      .addCase(getBillings.fulfilled, (state, action) => {
        state.user.billings = action.payload;
      })
      .addCase(getBillings.rejected, (state) => {
      });
    builder
      .addCase(reAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(reAuth.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.user = action.payload;
        state.profilePercentage = getUserFormPercentage(action.payload);
        state.loading = false;
      })
      .addCase(reAuth.rejected, (state, action) => {
        state.isLoaded = true;
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        state.profilePercentage = getUserFormPercentage({ ...state.user, ...action.payload });
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.profilePercentage = getUserFormPercentage(action.payload);
        state.isLoaded = true;
      })
      .addCase(login.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoaded = true;
      });
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.profilePercentage = 0;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.profilePercentage = getUserFormPercentage(action.payload);
        state.isLoaded = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoaded = true;
      });
  },
});

export const { clearAuthError, updateWalletAmount, setUserType, setUser } =
  authSlice.actions;
export default authSlice.reducer;
