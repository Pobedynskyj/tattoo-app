import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ dimensions }) => {
  const [isKeyboardShow, setIsKeyBoardShow] = useState(false);
  const [logState, setLogState] = useState(initialState);

  const keyboardHide = () => {
    setIsKeyBoardShow(false);
    Keyboard.dismiss();
    setLogState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../Images/bg.jpeg")}
          style={styles.bgcImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isKeyboardShow ? 10 : "50%",
              }}
            >
              <Text style={styles.title}>ADAS Tattoo</Text>
              <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  marginBottom={5}
                  textAlign="center"
                  value={logState.email}
                  onFocus={() => {
                    setIsKeyBoardShow(true);
                  }}
                  onChangeText={(value) => {
                    setLogState((prevState) => ({
                      ...prevState,
                      email: value,
                    }));
                  }}
                />
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textAlign="center"
                  value={logState.password}
                  onFocus={() => {
                    setIsKeyBoardShow(true);
                  }}
                  onChangeText={(value) => {
                    setLogState((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                />

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.textBtn}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    alignItems: "center",
    color: "#fff",
    justifyContent: "center",
    opacity: 0.5,
    fontFamily: "MiltonianTattoo",
    padding: 10,
  },
  bgcImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    color: "#000",
    borderRadius: 6,
    paddingLeft: 10,
    height: 40,
    fontSize: 25,
  },
  form: {
    marginHorizontal: 48,
    backgroundColor: "grey",
    padding: 10,
    opacity: 0.8,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputTitle: {
    color: "#000",
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "MiltonianTattoo",
  },
  btn: {
    marginBottom: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    backgroundColor: "grey",
    borderColor: "#000",
    ...Platform.select({
      ios: {
        marginHorizontal: 40,
      },
      android: {
        marginHorizontal: 60,
      },
    }),
  },
  textBtn: {
    fontSize: 20,
    color: "#000",
    fontFamily: "MiltonianTattoo",
  },
});
