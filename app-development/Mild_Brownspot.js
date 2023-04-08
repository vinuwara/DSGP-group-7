import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const image = { uri: 'https://reactjs.org/logo-og.png' };

export default function Mild_Brownspot() {
return (
<ImageBackground
source={require("C:/Users/Administrator/Desktop/DSGP-Repository/DSGP-group-7/app-development/assets/bg.jpg")}
style={styles.backgroundImage}
resizeMode="cover"
>
<View style={styles.container}>
<Text style={styles.topic}>
Disease Management
</Text>
<Text style={styles.text}>
Within the crop season  
- Application of urea in recommended dosages or application of urea based on leaf colour chart.</Text>
<Text style={styles.topic}>
Weed management
</Text>
<Text style={styles.text}>
If the crop is infected, following management options should be applied for the next season{'\n\n'}
- Application of organic fertilizer will increase the soil quality{'\n\n'}
- Use of certified seed paddy free from the disease{'\n\n'}
- Addition of burnt paddy husk (250 kg per acre) to the soil during land preparation.{'\n\n'}
- Abstain addition of disease infected straw.{'\n\n'}
- Treatment of seed paddy by dipping in hot water (53-54OC) for 10-12 minutes{'\n\n'}
- Treatment of seeds with a seed-protectant fungicide{'\n\n'}
- Crop rotation{'\n\n'}
- Proper land leveling
</Text>
</View>
</ImageBackground>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
},
topic: {
color: "green",
fontSize: 20,
fontWeight: "bold",
margin: 20,
textAlign: "center",
},
text: {
color: "black",
fontSize: 16,
fontWeight: "bold",
margin: 20,
textAlign: "justify",
},
backgroundImage: {
flex: 1,
width: "100%",
height: "100%",
},
});