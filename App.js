import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignIn">
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SignUp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
