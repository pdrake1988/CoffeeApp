import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home.tsx";

const HomeStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: Home,
  },
});

export default HomeStack;
