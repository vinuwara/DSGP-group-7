import React from "react";
import {View,SafeAreaView, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import { Stack } from "@mui/system";
import HomeScreen from "./HomeScreen";


const App2 = ()  => {
  return(
    <SafeAreaView >
      <SignUpScreen />
    </SafeAreaView>
  );
}; 



export default App2;


