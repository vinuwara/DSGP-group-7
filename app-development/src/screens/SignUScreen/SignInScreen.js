import React,{useState} from "react";
import {View, Text, Image , StyleSheet, useWindowDimensions,ScrollView} from "react-native";
import Logo from '../../../assets/images/Logo_M.png'
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton.Js";

const SignInScreen = () => {
  const [username,setUsername] = useState('');

  const [password,setPassword] = useState('');

  const{height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  }

  const onForgotPasswordPressed = () =>  {
    console.warn("Forgot Password?");
  }

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
  }

  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source ={Logo} 
      styles ={[StyleSheet.logo, {height: height * 0.3}]} 
      resizeMode="center"/>

      <CustomInput 
      placeholder="Username"
      value={username}
      setValue={setUsername} />
      
      <CustomInput 
      placeholder="Password"
      value={password}
      setValue={setPassword} 
      secureTextEntry={true} 
      />

      <CustomButton 
      text="Sign In" 
      onPress={onSignInPressed}
      type="PRIMARY" />

      <CustomButton 
      text="Forgot Password?" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY" />

      <CustomButton 
      text="Don't have an account? Create One" 
      onPress={onSignUpPressed} 
      type="TERTIARY" />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
},

  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200
    }
  })

export default SignInScreen