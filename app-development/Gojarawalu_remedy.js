import React from "react";
import { useNavigation } from "@react-navigation/native";
import {ImageBackground, StyleSheet,View,Text } from "react-native";
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function Gojarawalu_remedy() {
     const navigation = useNavigation(); 
     return(
          <View>
               <Text>Efficient weed control in DSR is still a main concern, and strategies are needed to reduce the weed problem. {'\n'} 
                    If there is an interest in reducing reliance on herbicides, additional weed management tools (i.e., use of competitive cultivars, {'\n'}
                    high seeding rates, and narrow row spacing) are needed to achieve sustainable weed control. {'\n'}
                    Comprehension of weed biology and ecology is important to develop cultural weed management strategies. {'\n'}</Text>
     
          </View>
     );
 
 }