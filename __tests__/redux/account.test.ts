import { describe, expect, test } from "@jest/globals";
import store from "../../src/redux/store.ts";

describe("Tests account reducer", () => {
  test("returns initial state", () => {
    //Initial state should have balance of 0 and stars of 0
    const state = store.getState();
    expect(state.account.balance).toBe(0);
    expect(state.account.stars).toBe(0);
  });

  test("Adds funds to account balance", () => {
    //Dispatch action to add funds
    store.dispatch({ type: "addFunds", payload: { funds: 15 } });

    //Get state after adding funds
    const state = store.getState();
    //Account balance should be 15
    expect(state.account.balance).toBe(15);
  });

  test("Remove funds from account balance", () => {
    //Dispatch action to remove funds
    store.dispatch({ type: "removeFunds", payload: { funds: 10 } });

    //Get state after removing funds
    const state = store.getState();
    //Expect balance to be 5
    expect(state.account.balance).toBe(5);
  });

  test("Add stars to account for rewards program", () => {
    //Dispatch action to add stars to account
    store.dispatch({ type: "addStars", payload: { amount: 10 } });

    //State should show updated star count of 10
    const state = store.getState();
    expect(state.account.stars).toBe(10);
  });

  test("Remove stars from account to redeem reward", () => {
    //Add stars to account for redemption
    store.dispatch({ type: "addStars", payload: { amount: 110 } });

    //Remove stars from account to redeem reward
    store.dispatch({ type: "removeStars", payload: { amount: 60 } });

    //Get state after removing stars
    const state = store.getState();
    expect(state.account.stars).toBe(60);
  });
});
