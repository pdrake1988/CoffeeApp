export default {
  preset: "react-native",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@reduxjs/toolkit|immer)/)",
  ],
};
