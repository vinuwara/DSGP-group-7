  import React, { useState } from 'react';
  import { StyleSheet, Text, View, Image, Button } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';

  export default function brownspot() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [classificationResult, setClassificationResult] = useState(null);

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

      const response = await fetch('http://192.168.1.249:8000/brownspot', {
        method: 'POST',
        body: data,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      const result = await response.json();
      setClassificationResult(result.classification);
    };

    return (
      <View style={styles.container}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
        {classificationResult && <Text>{classificationResult}</Text>}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginTop: 20,
      width: 200,
      height: 200,
    },
  });
