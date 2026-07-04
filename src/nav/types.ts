import RootBottomTabs from "./navigators/RootBottomTabs.ts";

declare module "@react-navigation/native" {
  interface RootNavigator extends RootStackType {}
}

type RootStackType = typeof RootBottomTabs;
