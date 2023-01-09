import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  value: 0,
};

export const counterSlices = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    increament: (state) => {
      state.value++;
    },
    decreament: (state) => {
      state.value--;
    },
    increaseAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increament, decreament, increaseAmount } = counterSlices.actions;
export default counterSlices.reducer;
// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const increment = createAction("increment/counter");
// export const decrement = createAction("decrement/counter");
// export const increaseAmount = createAction("increaseByAmount/counter");

// let action = increment();
// console.log("action", action);
// // reducers
// // // 1. using builder notation
// const initalState = {
//   value: 0,
// };

// export const counterSlices = createReducer(initalState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });
//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });
//   builder.addCase(increaseAmount, (state, action) => {
//     state.value += action.payload;
//   });
// });

// 2. using map notation
// export const counterSlices = createReducer(initalState, {
//   [increment]: (state, action) => {
//     state.value++;
//   },
//   [decrement]: (state, action) => {
//     state.value--;
//   },
//   [increaseAmount]: (state, action) => {
//     state.value += action.payload;
//   },
// });
