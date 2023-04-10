import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,ImageBackground } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ImageBackground
      source={require('C:/Users/Administrator/Desktop/DSGP-Repository/DSGP-group-7/app-development/assets/bg.jpg')}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.Text}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 1,
    opacity:0.5,
    width: 120,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    opacity:1,
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
