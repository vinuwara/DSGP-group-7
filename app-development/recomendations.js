import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function Recomendations() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("C:/Users/Administrator/Desktop/DSGP-Repository/DSGP-group-7/app-development/assets/bg.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Recomendations</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Mild Brownspot Remedy"
            onPress={() => navigation.navigate("Mild_Brownspot")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="Severe Brownspot Remedy"
            onPress={() => navigation.navigate("Severe_Brownspot")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="Gojarawalu Remedy"
            onPress={() => navigation.navigate("Gojarawalu_remedy")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        </View>
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
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
  },
  buttonContainer: {
    width: "60%",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    marginBottom: 10,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
