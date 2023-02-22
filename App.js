import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./src/Components/RegistrationScreen";
import { LoginScreen } from "./src/Components/LoginScreen";

function HomeScreen({ navigation }) {
  return (
    <>
      <ImageBackground
        source={require("./src/Images/bg.jpeg")}
        resizeMode={"cover"}
        style={styles.bgc}
      >
        <Text style={styles.title}>ADAS Tattoo</Text>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.btnTxt}>Registration</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

function RegScreen() {
  return (
    <>
      <RegistrationScreen />
    </>
  );
}

function LogScreen() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegScreen} />
        <Stack.Screen name="Login" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignItems: "center",
    color: "#fff",

    opacity: 0.5,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  navBtn: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: 200,
    alignItems: "center",
    marginHorizontal: 60,
    backgroundColor: "grey",
    borderColor: "#000",
    opacity: 0.8,
  },
  btnTxt: {
    fontSize: 20,
    color: "#000",
  },
  bgc: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
