import { describe, expect, test } from "@jest/globals";
import { accountReducer } from "../../src/redux/account.ts";

describe("Tests account reducer", () => {
  test("Adds funds to account balance", () => {
    //Dispatch action to add funds
    const accountAction = accountReducer(
      { balance: 0, stars: 120 },
      { type: "addFunds", payload: { funds: 15 } }
    );
    //Account balance should be 15
    expect(accountAction.balance).toBe(15);
  });

  test("Remove funds from account balance", () => {
    //Dispatch action to remove funds
    const accountAction = accountReducer(
      { balance: 15, stars: 120 },
      { type: "removeFunds", payload: { funds: 10 } }
    );

    //Expect balance to be 5
    expect(accountAction.balance).toBe(5);
  });

  test("Add stars to account for rewards program", () => {
    //Dispatch action to add stars to account
    const accountAction = accountReducer(
      { balance: 0, stars: 60 },
      { type: "addStars", payload: { amount: 60 } }
    );

    //State should show updated star count of 10
    expect(accountAction.stars).toBe(120);
  });

  test("Remove stars from account to redeem reward", () => {
    //Remove stars from account for redemption
    const accountAction = accountReducer(
      { balance: 0, stars: 120 },
      { type: "removeStars", payload: { amount: 60 } }
    );

    expect(accountAction.stars).toBe(60);
  });
});
