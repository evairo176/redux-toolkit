import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const increaseAmount = createAction("increaseByAmount/counter");

// reducers
// 1. using builder notation
const initalState = {
  value: 0,
};

export const counterSlices = createReducer(initalState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.value++;
  });
  builder.addCase(decrement, (state, action) => {
    state.value--;
  });
  builder.addCase(increaseAmount, (state, action) => {
    state.value = action.payload;
  });
});
