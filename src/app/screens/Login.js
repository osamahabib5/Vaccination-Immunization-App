import React, { useState } from 'react';
import {  Text, TextInput, View, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from '../baseUrl';

export default function Login({ navigation, route }) {
  const [LoginDetails, setLoginDetails] = useState({ email: null, password: null })
  let { email, password } = LoginDetails;

  const parentLogin = () => {
    if (email && password) {
      axios.post(baseUrl + "/users/login", {
        username: email,
        password: password,
      }).then(function (response) {
        Alert.alert("Sign In", "Login Successful!", [
          {
            text: "OK", onPress: () => {
              navigation.navigate("ParentDrawer");
            }
          }
        ]);
      }).catch(function (error) {
        // handle error
        Alert.alert("Sign In", error);
      }).then(
        setLoginDetails({
          ...parentLogin,
          email: null,
          password: null
        })
      )
    } else {
      Alert.alert("SignIn", "Please fill all the details!")
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearGradient} colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Image style={{
            marginTop: 5,
            justifyContent: 'center', height: 120, width: 145, resizeMode: 'stretch', margin: 10
          }} source={require("../assets/logo.png")} />
        </View>
        <View style={{
          flex: 1, flexDirection: 'column', position: "relative", justifyContent: 'center',
          marginTop: 80
        }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              placeholderTextColor="#00000087"
              keyboardType='email-address'
              onChangeText={(e) => {
                setLoginDetails({
                  ...LoginDetails,
                  email: e
                })
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#00000087"
              secureTextEntry={true}
              onChangeText={(e) => {
                setLoginDetails({
                  ...LoginDetails,
                  password: e
                })
              }}
            />
          </View>
        </View>
        <View style={{
          flex: 1, flexDirection: 'column', position: "relative", marginBottom: "0%", justifyContent: 'center',
          marginTop: 50
        }}>
          <TouchableOpacity
            onPress={parentLogin} style={{ backgroundColor: '#1796b3', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
            <Text style={{
              color: '#FFFFFF', textAlign: 'center', fontSize: 18, fontWeight: "300"
            }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignUp')
            } style={{ backgroundColor: '#1796b3', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
            <Text style={{
              color: '#FFFFFF', textAlign: 'center', fontSize: 18, fontWeight: "300"
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>

  )
}

