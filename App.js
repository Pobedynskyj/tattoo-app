import { Dimensions, View } from "react-native";

import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Components/Home";
import { RegistrationScreen } from "./src/Components/RegistrationScreen";
import { LoginScreen } from "./src/Components/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
        >
          {({ navigation }) => (
            <HomeScreen dimensions={dimensions} navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
        >
          {() => <RegistrationScreen dimensions={dimensions} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
        >
          {() => <LoginScreen dimensions={dimensions} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
