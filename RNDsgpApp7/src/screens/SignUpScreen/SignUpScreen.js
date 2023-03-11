import React,{useState} from "react";
import {View, Text,StyleSheet,ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";


const SignUpScreen = () => {
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password,setPassword] = useState('');
  const [reEnterPassword,setReEnterPassword] = useState('');


  const onRegisterPressed = () => {
    console.warn("onRegisterPressed");
  }

  const onForgotPasswordPressed = () =>  {
    console.warn("Forgot Password?");
  }

  const onSignUpPressed = () =>  {
    console.warn('onSignUpPressed');
  }

  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    
    <Text style={styles.title}>Create an Account</Text>

      <CustomInput 
      placeholder="Username"
      value={username}
      setValue={setUsername} 
      />

      <CustomInput
      placeholder="Email"
      value={email}
      setValue={setEmail} 
      />
      
      <CustomInput 
      placeholder="Password"
      value={password}
      setValue={setPassword} 
      secureTextEntry={true} 
      />

      <CustomInput 
      placeholder="Re-Enter Password"
      value={reEnterPassword}
      setValue={setReEnterPassword} 
      secureTextEntry={true} 
      />

      <CustomButton 
      text="Register" 
      onPress={onRegisterPressed}
      type="PRIMARY" />

      <Text style={styles.text}>
        By registering, you confirm that you accept our {''}
        <Text style={styles.link}>Terms of use</Text> and {''}
        <Text style={styles.link}>privacy policy</Text>
      </Text>

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
    padding: 12,
},

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
    margin: 10,

  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  }

    
  })

export default SignUpScreen