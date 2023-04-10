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
Disease Management
</Text>
<Text style={styles.text}>
After developing three leaves the weedicides must be sprayed.
The weedicides that can be used : Phenopsy prop ethyl (Vitsupper)  After 3 weeks.Metari (Metamifop)  After 10 to 14 days
</Text>
<Text style={styles.topic}>
Field preparation methods to avoid weedicides.
</Text>
<Text style={styles.text}>
- Tilling and leveling the field.{'\n\n'}
- Weedicides before planting – Can use mild weedicides after preparing the field.{'\n\n'}
- Maintaining the recommended space between paddy plants which is 20 -25 cm apart.{'\n\n'}
- Maintaining the recommended water level in a field which is about 5cm in height.{'\n\n'}
- Using the certified Seedlings to ensure no weedicides are included.{'\n\n'}
- Planting competitive plants to the weedicide which are not harmful to the paddy plants.{'\n\n'}
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