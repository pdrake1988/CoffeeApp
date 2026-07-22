import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack.ts";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

const RootBottomTabs = createBottomTabNavigator({
  initialRouteName: "Home",
  groups: {
    signedIn: {
      if: () => {
        const { authStatus } = useAuthenticator();
        return authStatus === "authenticated";
      },
      screens: {
        Home: HomeStack,
      },
    },
    signedOut: {
      if: () => {
        const { authStatus } = useAuthenticator();
        return authStatus === "unauthenticated";
      },
      screens: {
        Home: Authenticator,
      },
    },
  },
});

export default RootBottomTabs;
