import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

export default function Gojarawalu() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage(pickerResult.assets[0].uri);

    const data = new FormData();
    data.append('file', {
      uri: pickerResult.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg'
    });

    const response = await fetch('http://192.168.1.249:8000/gojarawalu', {
      method: 'POST',
      body: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    const result = await response.json();
    setClassificationResult(result.classification);
    setConfidence(result.confidence);
  };

  const getClassificationStyle = () => {
    switch (classificationResult) {
      case 'Not Gojarawalu':
        return styles.notGojarawalu;
      case 'Gojarawalu':
        return styles.gojarawalu;
      default:
        return null;
    }
  };

  return (
    <ImageBackground source={require('C:/Users/Administrator/Desktop/DSGP-group-7/app-development/assets/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Pick an image from camera roll" onPress={pickImage} color="black" titleStyle={{color: 'white', fontWeight: 'bold'}}/>
            <Button title="Recomendation" onPress={() => navigation.navigate("recomendations")} color="green" titleStyle={{color: 'white', fontWeight: 'bold'}}/>
          </View>
        </View>
        {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
        {classificationResult && (
          <View style={[styles.classification, getClassificationStyle()]}>
            <Text style={styles.Text}>
            {classificationResult} ({confidence})</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    opacity:0.8,
  },
  buttonWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    color: 'white',
  },
  classification: {
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  confidenceLabel: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
  },   
  
});
