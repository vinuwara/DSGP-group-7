import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const image = { uri: 'https://reactjs.org/logo-og.png' };


export default function Mild_Brownspot() {
return (
<ImageBackground
source={require("C:/Users/Administrator/Desktop/DSGP-group-7/app-development/assets/bg.jpg")}
style={styles.backgroundImage}
resizeMode="cover"
>
<View style={styles.container}>
<Text style={styles.topic}>
How to reduce Brown spot in the season which it got recognized:
</Text>
<Text style={styles.text}>
By using a increased dose of potassium (MOP).</Text>
<Text style={styles.topic}>
How to reduce and eradicate brown spot for the next Paddy season:
</Text>
<Text style={styles.text}>
- By using a increased dose of potassium (MOP).
- Using partially burnt paddy husk(Kara dahayya) in the Paddy about 235kgs for an acr {'\n\n'}
- Using green fertilizer which is a good source of organic matter and nitrogen {'\n\n'}
- Destroying parasitic plants in the paddy field {'\n\n'}
- By looking out for the healthy seeds that has not been infected with brown spot in the current season, we can use them for the next season to get a healthy yield {'\n\n'}
- By Using Balanced fertilizer that has all the nutrients needed for the paddy. We need to use this balanced fertilizer according to the professional instructions {'\n\n'}
- To reduce the acidity of the fertilizer, dolomite needs to be used {'\n\n'}
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
color: "lightgrey",
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