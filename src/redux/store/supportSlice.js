import { createSlice } from "@reduxjs/toolkit";
import { createTicket, getTickets } from "../api/support";

const initialState = {
  raiseTicketCount: 0,
  ongoingTicketCount: 0,
  resolvedTicketCount: 0,
  tickets: [],
  loading:false,
};

export const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.fulfilled, (state, action) => {
        let rtc = 0, otc = 0, stc = 0;
        action.payload.map((ticket) => {
          if (ticket.status === 0) rtc++;
          else if (ticket.status === 1) otc++;
          else stc++;
        })
        state.raiseTicketCount = rtc;
        state.ongoingTicketCount = otc;
        state.resolvedTicketCount = stc;
        state.tickets = action.payload;
      })
    builder
      .addCase(createTicket.pending,(state)=>{
        state.loading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.raiseTicketCount++;
        state.tickets.push(action.payload);
        state.loading = false;
      })
      .addCase(createTicket.rejected,(state)=>{
        state.loading = false;
      })
  },
});

export const { setUserLocation } = supportSlice.actions;
export default supportSlice.reducer;
