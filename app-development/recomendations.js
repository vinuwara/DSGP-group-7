import React from "react";
import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function Recomendations(){
     const navigation = useNavigation(); 
     return(
          <View>
               <Text>HomeScreen</Text>
               <Button title="Mild Brownspot Remedy" onPress={()=>navigation.navigate("Mild_Brownspot")}/> 
               <Button title="Severe Brownspot Remedy" onPress={()=>navigation.navigate("Severe_Brownspot")}/> 
               <Button title="Gojarawalu Remedy" onPress={()=>navigation.navigate("Gojarawalu_remedy")}/> 
          </View>
     );
}