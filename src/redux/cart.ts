import { createAction, createReducer } from "@reduxjs/toolkit";
import { Product } from "./types.ts";

export const cartReducer = createReducer([] as Array<Product>, (builder) => {
  builder
    .addCase(createAction<Product>("addToCart"), (state, action) => {
      state.push(action.payload);
    })
    .addCase(
      createAction<{ productId: string }>("increaseQuantity"),
      (state, action) => {
        const product = state.find(
          (item) => item.productId === action.payload.productId
        );
        if (product) {
          product.quantity++;
        }
      }
    )
    .addCase(
      createAction<{ productId: string }>("decreaseQuantity"),
      (state, action) => {
        const productIndex = state.findIndex(
          (item) => item.productId === action.payload.productId
        );
        if (productIndex > -1) {
          const product = state[productIndex];
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            state.splice(productIndex, 1);
          }
        }
      }
    );
});
