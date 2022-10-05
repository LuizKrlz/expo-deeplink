import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen";

import { HomeScreen } from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const prefix = Linking.createURL("/");

export default function App() {
  const linking = {
    prefixes: [
      prefix,
      "https://lovely-profiterole-335634.netlify.app",
      "myapp://",
    ],
    config: {
      screens: {
        Password: "recuperar-senha",
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
