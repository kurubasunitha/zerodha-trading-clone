import { createSlice } from "@reduxjs/toolkit";


const initialBids = [
  { name: "IGCL", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "PROFX", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "ACEALPHA", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "VALINDIA", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "MMEL", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "ADCOUNTRY", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "NEETUYOSHI", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "OSWALPUMPS", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "ARISINFRA", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
  { name: "GLOBECIVIL", date: "26th-30th Jun", range: "105-111", price: 14985, action: "Apply" },
];

const BidsSlice = createSlice({
  name: "bids",
  initialState: {
    value: initialBids,
  },
  reducers: {
    addBid: (state, action) => {
      state.value.push(action.payload);
    },
    removeBid: (state, action) => {
      state.value = state.value.filter((_, i) => i !== action.payload);
    },
    updateBid: (state, action) => {
      const { index, data } = action.payload;
      if (state.value[index]) {
        state.value[index] = { ...state.value[index], ...data };
      }
    },
  },
});

export const { addBid, removeBid, updateBid } = BidsSlice.actions;
export default BidsSlice.reducer;
