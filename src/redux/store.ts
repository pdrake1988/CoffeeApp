import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account.ts";
import cartReducer from "./cart.ts";

export default configureStore({
  reducer: {
    account: accountReducer,
    cart: cartReducer,
  },
});
