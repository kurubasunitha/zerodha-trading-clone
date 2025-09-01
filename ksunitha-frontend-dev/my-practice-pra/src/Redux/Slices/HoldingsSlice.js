import { createSlice } from "@reduxjs/toolkit";


 const initialHoldings = [
       
  {
    instrument: "ADANIENT",
    quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52967.0,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+2.41%"
  },
  {
    instrument: "ADANIGREEN",
    quantity: 21,
    avgCost: 3197.4,
    ltp: 1648.15,
    invested: 55956.56,
    currentValue: 52967.9,
    pnl: 8012.45,
    netChange: "+18.153%",
    dayChange:"+11.12%"
  },
  {
    instrument: "ADANIPORTS",
    quantity: 8,
    avgCost: 8142.78,
    ltp: 4152.10,
    invested: 74956.75,
    currentValue: 12967.00,
    pnl: 8010.47,
    netChange: "+25.12%",
    dayChange:"+2.41%"
  },
  {
    instrument: "ADANIPOWER",
    quantity: 14,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52967.00,
    pnl: 8010.00,
    netChange: "+18.45%",
    dayChange:"+4.10%"
  },
  {
    instrument: "BAJAJELEC",
   quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+2.41%"
  },
  {
    instrument: "ADANIGREEN",
    quantity: 21,
    avgCost: 3197.4,
    ltp: 1648.15,
    invested: 55956.56,
    currentValue: 52967.9,
    pnl: 8012.45,
   netChange: "+18.153%",
    dayChange:"+11.12%"
  },
  {
    instrument: "BFUTILITE",
    quantity: 25,
    avgCost: 5167.4,
    ltp: 5234.15,
    invested: 458.56,
    currentValue: 35679.9,
    pnl: 8010.45,
    netChange: "+25.153%",
    dayChange:"+23.12%"
  },
  {
    instrument: "CRISIL",
    quantity: 20,
    avgCost: 2196.25,
    ltp: 5780.15,
    invested: 45365.56,
    currentValue: 4578.9,
    pnl: 7020.45,
    netChange: "+25.23%",
    dayChange:"+18.23%"
  },
  {
    instrument: "DRREDDY",
    quantity: 20,
    avgCost: 3254.02,
    ltp: 6548.23,
    invested: 578956.56,
    currentValue: 3564.9,
    pnl: 1245.45,
    netChange: "+10.153%",
    dayChange:"+15.12%"
  },
  {
    instrument: "GPIL",
    quantity: 20,
   avgCost: 2105.4,
    ltp: 1648.15,
    invested: 4563.35,
    currentValue: 4567.9,
    pnl: 4567.45,
    netChange: "+25.153%",
    dayChange:"+10.12%"
  },
  {
    instrument: "GREENPOWER",
    quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52967.00,
   pnl:9010.25,
    netChange: "+20.50%",
    dayChange:"+2.41%"
  },
  {
    instrument: "HAPPSTMNDS",
    quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52976.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+2.41%"
  },
  {
    instrument: "HAVELLS",
   quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 4365.23,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+21.23%"
  },
  {
    instrument: "ADANIENT",
    quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+2.41%"
  },
  {
    instrument: "HAVELLS",
   quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 4365.23,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+21.23%"
  },{
    instrument: "HAVELLS",
   quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 4365.23,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+21.23%"
  },
  {
    instrument: "HAVELLS",
   quantity: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 4365.23,
    currentValue: 52967.00,
    pnl: 9010.25,
    netChange: "+20.50%",
    dayChange:"+21.23%"
  },

];
const HoldingsSlice = createSlice({
  name: "holdings",
  initialState: {
    value: initialHoldings, 
  },
  reducers: {
    addHolding: (state, action) => {
      state.value.push(action.payload);
    },
    removeHolding: (state, action) => {
      state.value = state.value.filter((_, i) => i !== action.payload);
    },
    updateHolding: (state, action) => {
      const { index, data } = action.payload;
      state.value[index] = { ...state.value[index], ...data };
    },
  },
});

export const { addHolding, removeHolding, updateHolding } = HoldingsSlice.actions;
export default HoldingsSlice.reducer;
