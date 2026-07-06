import { describe, test } from "@jest/globals";
import { cartReducer } from "../../src/redux/cart.ts";
import { Product } from "../../src/redux/types.ts";

describe("Tests for the cart reducer", () => {
  const products = () => {
    return [
      new Product(
        "product-001",
        "Iced Caramel Latte",
        5.99,
        1,
        false,
        520,
        53,
        18
      ),
    ];
  };
  const createNewProduct = () => {
    return new Product(
      "product-002",
      "White Chocolate Mocha",
      5.75,
      2,
      false,
      430,
      53,
      18
    );
  };

  test("Add item to cart", () => {
    //Setting up initial state and new product state
    const initialState = products();
    const newProduct = createNewProduct();

    //Add product to cart
    const cartAction = cartReducer(initialState, {
      type: "addToCart",
      payload: createNewProduct(),
    });

    //Assert cart has 2 items
    expect(cartAction.length).toBe(2);
    //Assert cart product has all the correct properties
    expect(cartAction[0]).toEqual(initialState[0]);
    expect(cartAction[1]).toEqual(newProduct);
  });

  test("Increase product quantity", () => {
    //Setting up initial state
    const initialState = products();

    //Action to increase product quantity in shopping cart
    const cartAction = cartReducer(initialState, {
      type: "increaseQuantity",
      payload: { productId: "product-001" },
    });

    //Assert that product quantity is increased by 1
    expect(cartAction[0].quantity).toBe(2);
  });

  test("Decrease product quantity", () => {
    //Setting up initial state
    const initialState = [...products(), createNewProduct()];

    //Action to decrease the quantity of an item in the cart
    const cartAction = cartReducer(initialState, {
      type: "decreaseQuantity",
      payload: { productId: "product-002" },
    });

    //Assert that the cart has 2 items
    expect(cartAction.length).toBe(2);

    //Assert that product quantity is decreased by 1
    expect(cartAction[1].quantity).toBe(1);
  });

  test("Remove item from cart", () => {
    const initialState = products();

    //Action to remove an item from the cart
    const cartAction = cartReducer(initialState, {
      type: "decreaseQuantity",
      payload: { productId: "product-001" },
    });

    //Assert that the cart has no items
    expect(cartAction.length).toEqual(0);
  });
});
