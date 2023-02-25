import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/Landing/landing';
import SignUp from './SignUp';
import Profile from './screens/Profile/profile';
import Home from './screens/Home/home';
import TrashCollector from './screens/TrashCollector/trashCollector';
import SignIn from './SignIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/> 
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/> 
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={SignIn} options={{headerShown: false}}/>   
        <Stack.Screen name="Trash" component={TrashCollector} options={{headerShown: false}}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
