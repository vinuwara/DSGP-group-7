import React,{useEffect,useState} from "react";
import { Alert,SafeAreaView,Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import brownspot from "./brownspot";
import chatbot from "./chatBot";
import gojarawalu from "./gojarawalu";
import styles from "./styles";
import recomendations from "./recomendations";


const Stack = createNativeStackNavigator();

export default function App(){
  return <View style={styles.container}> 
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="brownspot" component={brownspot}/>
      <Stack.Screen name="gojarawalu" component={gojarawalu}/>
      <Stack.Screen name="chatbot" component={chatbot}/>
      <Stack.Screen name="recomendations" component={recomendations}/>
    </Stack.Navigator>
  </NavigationContainer>
  </View>;
 
}