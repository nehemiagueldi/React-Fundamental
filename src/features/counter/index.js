import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // nama services, bebas namanya, pastikan sama dengan yang dibuat
  initialState: { // inisial value state,
    value: 0,
  },
  reducers: { // nama servicesnya feature, boleh bebas namanya
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, payload) => {
      state.value += payload.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // export feature

export default counterSlice.reducer;
