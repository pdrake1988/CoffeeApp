/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStaticNavigation } from "@react-navigation/native";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store.ts";
import RootBottomTabs from "./src/nav/navigators/RootBottomTabs.ts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Amplify } from "aws-amplify";
import amplify_outputs from "./amplify_outputs.json";

Amplify.configure(amplify_outputs);

const Navigator = createStaticNavigation(RootBottomTabs);

function App() {
  return (
    <Authenticator.Provider>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </Provider>
    </Authenticator.Provider>
  );
}

export default App;
