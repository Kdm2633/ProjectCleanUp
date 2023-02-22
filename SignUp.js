import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import axios from "axios";

const SignUp = (navigation) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (name === "" || email === "" || password === "") {
      alert("All fields are required");
      return;
    }
    const resp = await axios.post("http://localhost:8001/api/signup", {
      name,
      email,
      password,
    });
    if (resp.data.error) {
      alert(resp.data.error);
    } else {
      alert("Sign Up Successful");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign Up</Text>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={{ fontSize: 16, color: "#000000" }}>Name</Text>
        <TextInput
          style={styles.signupInput}
          value={name}
          onChange={(text) => setName(text)}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Text style={{ fontSize: 16, color: "#000000" }}>Email</Text>
        <TextInput
          style={styles.signupInput}
          value={email}
          onChange={(text) => setEmail(text)}
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize={false}
        />
        <Text style={{ fontSize: 16, color: "#000000" }}>Password</Text>
        <TextInput
          style={styles.signupInput}
          value={password}
          onChange={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCompleteType="password"
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Already have an account?
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => console.log("navigate")}
        >
          Sign in.
        </Text>
      </Text>
    </View>
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

export default SignUp;
