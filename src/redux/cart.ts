import { createAction, createReducer } from "@reduxjs/toolkit";

export type Product = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  redeemed: boolean;
};

const cartReducer = createReducer([] as Array<Product>, (builder) => {
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
        const product = state.find(
          (item) => item.productId === action.payload.productId
        );
        if (product) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            state.filter((item) => item.productId !== action.payload.productId);
          }
        }
      }
    );
});

export default cartReducer;
