import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    if (email === "" || password === "") {
      alert("All fields are required");
      return;
    }
    const resp = await axios.post("http://localhost:8001/api/signin", {
      email,
      password,
    });
    if (resp.data.error) {
      alert(resp.data.error);
    } else {
      await AsyncStorage.setItem("auth-rn", JSON.stringify(data));
      alert("Sign In Successful");
    }
  };
  return (
    <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
      <View style={{ marginVertical: 100 }}>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/icon.png")}
            style={styles.imageStyles}
          />
        </View>
        <Text style={styles.signupText}>Sign In</Text>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>EMAIL</Text>
          <TextInput
            style={styles.signupInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>PASSWORD</Text>
          <TextInput
            style={styles.signupInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoComplteType="password"
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12, textAlign: "center" }}>
          Not yet registered?{" "}
        </Text>{" "}
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => console.log("navigate")}
        >
          Sign Up
        </Text>
        <Text style={{ fontSize: 12, textAlign: "center", marginTop: 10 }}>
          Forgot Password?
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#BFCEB8",
  },
  signupText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  signupInput: {
    borderBottomWidth: 0.5,
    justifyContent: "center",
    height: 30,
    borderBottomcolor: "#000000",
    marginBottom: 30,
    backgroundColor: "#C5E2FF",
  },
  buttonStyle: {
    backgroundColor: "#C5E2FF",
    height: 50,
    marginBottom: 25,
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default SignIn;
