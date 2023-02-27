import { Dimensions, View } from "react-native";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    MiltonianTattoo: require("./src/fonts/MiltonianTattoo-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {() => <HomeScreen dimensions={dimensions} />}
          </Stack.Screen>
          <Stack.Screen name="Registration">
            {() => <RegistrationScreen dimensions={dimensions} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {() => <LoginScreen dimensions={dimensions} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
