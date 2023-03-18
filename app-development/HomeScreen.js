import React from "react";
import { useNavigation } from "@react-navigation/native";
import {ImageBackground, StyleSheet,View,Text } from "react-native";
import { Button } from "react-native-elements";
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function HomeScreen(){
     const navigation = useNavigation(); 
     return(
          <View>
               <Text>HomeScreen</Text>
               <ImageBackground source={image} resizeMode="cover"></ImageBackground>
               <Button title="Brownspot Classification" onPress={()=>navigation.navigate("brownspot")}/> 
               <Button title="Gojarawalu Classification" onPress={()=>navigation.navigate("gojarawalu")}/> 
               <Button title="chatbot" onPress={()=>navigation.navigate("chatbot")}/> 
               <Button title="Recomendations" onPress={()=>navigation.navigate("Recomendations")}/>
               <Button title="Log Out" onPress={()=>navigation.navigate("Home1")}/>
          </View>
     );
 
}

   