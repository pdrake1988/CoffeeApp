export default {
  preset: "@react-native/jest-preset",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@reduxjs/toolkit|immer)/)",
  ],
};
