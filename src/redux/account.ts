import { createAction, createReducer } from "@reduxjs/toolkit";

type AccountState = {
  balance: number;
  stars: number;
};

const accountReducer = createReducer(
  { balance: 0, stars: 0 } as AccountState,
  (builder) => {
    builder
      .addCase(createAction<{ funds: number }>("addFunds"), (state, action) => {
        state.balance += action.payload.funds;
      })
      .addCase(
        createAction<{ funds: number }>("removeFunds"),
        (state, action) => {
          state.balance -= action.payload.funds;
        }
      )
      .addCase(
        createAction<{ amount: number }>("addStars"),
        (state, action) => {
          state.stars += action.payload.amount;
        }
      )
      .addCase(
        createAction<{ amount: number }>("removeStars"),
        (state, action) => {
          state.stars -= action.payload.amount;
        }
      );
  }
);

export default accountReducer;
