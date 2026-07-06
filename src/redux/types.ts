export class Product {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  redeemed: boolean;
  calories: number;
  sugar: number;
  fat: number;

  constructor(
    productId: string,
    name: string,
    price: number,
    quantity: number,
    redeemed: boolean,
    calories: number,
    sugar: number,
    fat: number
  ) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.redeemed = redeemed;
    this.calories = calories;
    this.sugar = sugar;
    this.fat = fat;
  }
}

export class Account {
  balance: number;
  stars: number;

  constructor(balance: number, stars: number) {
    this.balance = balance;
    this.stars = stars;
  }
}
