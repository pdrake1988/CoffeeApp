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
      city: a.string(),
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
    //Join table for many-to-many relationship between Store and Product
    StoreProducts: a.model({
      storeId: a.id().required(),
      productId: a.id().required(),
      quantity: a.integer(),
      store: a.belongsTo("Store", "storeId"),
      product: a.belongsTo("Product", "productId"),
    }),
    //Model represents a store
    Store: a.model({
      name: a.string(),
      address: a.string(),
      zipCode: a.string(),
      state: a.string(),
      city: a.string(),
      country: a.string(),
      orders: a.hasMany("Orders", "storeId"),
      inventory: a.hasMany("StoreProducts", "storeId"),
    }),
    //Model represents many-to-many relationship between Orders and Products
    ProductOrders: a.model({
      productId: a.id().required(),
      orderId: a.id().required(),
      quantity: a.integer(),
      products: a.belongsTo("Product", "productId"),
      orders: a.belongsTo("Orders", "orderId"),
    }),
    //Model represents an order
    Orders: a.model({
      storeId: a.id().required(),
      accountId: a.id().required(),
      store: a.belongsTo("Store", "storeId"),
      account: a.belongsTo("Account", "accountId"),
      products: a.hasMany("ProductOrders", "orderId"),
    }),
  })
  //Requires users to be authenticated
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
