import React from "react";
import { useNavigation } from "@react-navigation/native";
import {ImageBackground, StyleSheet,View,Text } from "react-native";
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function Mild_Brownspot() {
     const navigation = useNavigation(); 
     return(
          <View>
               <Text>Disease Management</Text>
               <Text>Within the crop season {'\n'}
               {'\n'}
                         Application of urea in recommended dosages or application of urea based on leaf colour chart. {'\n'}
                         {'\n'}
                         Weed management {'\n'}
                         {'\n'}
If the crop is infected, following management options should be applied for the next season {'\n'}
{'\n'}
Application of organic fertilizer will increase the soil quality{'\n'}
{'\n'}
Use of certified seed paddy free from the disease{'\n'}
{'\n'}
Addition of burnt paddy husk (250 kg per acre) to the soil during land preparation.{'\n'}
{'\n'}
Abstain addition of disease infected straw.{'\n'}
{'\n'}
Treatment of seed paddy by dipping in hot water (53-54OC) for 10-12 minutes{'\n'}
{'\n'}
Treatment of seeds with a seed-protectant fungicide{'\n'}
{'\n'}
Crop rotation{'\n'}
Proper land leveling</Text>
     
          </View>
     );
 
 }
