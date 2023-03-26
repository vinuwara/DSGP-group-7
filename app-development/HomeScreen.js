import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('C:/Users/Administrator/Desktop/DSGP-group-7/app-development/assets/bg.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Brownspot Classification"
            onPress={() => navigation.navigate("brownspot")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="Gojarawalu Classification"
            onPress={() => navigation.navigate("gojarawalu")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="ChatBot"
            onPress={() => navigation.navigate("chatbot")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="Recomendations"
            onPress={() => navigation.navigate("recomendations")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
          <Button
            title="Log Out"
            onPress={() => navigation.navigate("Logout")}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "60%",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
