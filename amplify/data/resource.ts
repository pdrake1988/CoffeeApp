import { a, type ClientSchema, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    //Model represents a customer account
    Account: a.model({
      firstName: a.string(),
      lastName: a.string(),
      address: a.string(),
      zipCode: a.string(),
      state: a.string(),
      country: a.string(),
      balance: a.float(),
      stars: a.integer(),
      orders: a.hasMany("Orders", "accountId"),
    }),
    //Model represents store products
    Product: a.model({
      name: a.string(),
      price: a.float(),
      calories: a.integer(),
      sugar: a.integer(),
      fat: a.integer(),
      store: a.hasMany("StoreProducts", "productId"),
      orders: a.hasMany("ProductOrders", "productId"),
    }),
    StoreProducts: a.model({
      storeId: a.id().required(),
      productId: a.id().required(),
      store: a.belongsTo("Store", "storeId"),
      product: a.belongsTo("Product", "productId"),
    }),
    Store: a.model({
      name: a.string(),
      address: a.string(),
      zipCode: a.string(),
      state: a.string(),
      country: a.string(),
      orders: a.hasMany("Orders", "storeId"),
      inventory: a.hasMany("StoreProducts", "storeId"),
    }),
    ProductOrders: a.model({
      productId: a.id().required(),
      orderId: a.id().required(),
      quantity: a.integer(),
      products: a.belongsTo("Product", "productId"),
      orders: a.belongsTo("Orders", "orderId"),
    }),
    Orders: a.model({
      storeId: a.id().required(),
      accountId: a.id().required(),
      store: a.belongsTo("Store", "storeId"),
      account: a.belongsTo("Account", "accountId"),
      products: a.hasMany("ProductOrders", "orderId"),
    }),
  })
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
