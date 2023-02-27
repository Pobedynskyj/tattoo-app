import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <ImageBackground
        source={require("../Images/bg.jpeg")}
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
