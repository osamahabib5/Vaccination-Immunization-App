import React, { useState } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, Image,ScrollView, Alert } from 'react-native';
import { styles } from '../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from '../baseUrl';

export default function Login({ navigation, route }) {
  const [LoginDetails, setLoginDetails] = useState({ email: null, password: null })
  let { email, password } = LoginDetails;
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const parentLogin = () => {
    if (email && password) {
      if (validateEmail(email)) {
        axios.post(baseUrl + "/users/login", {
          username: email,
          password: password,
        }).then(function (response) {
          Alert.alert("Sign In", "Login Successful!", [
            {
              text: "OK", onPress: () => {
                setLoginDetails({
                  ...parentLogin,
                  email: null,
                  password: null
                });
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
      }
      else {
        Alert.alert("SignIn", "Please enter a valid email address!")
      }
    } else {
      Alert.alert("SignIn", "Please fill all the details!")
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Image style={{
            marginTop: 5,
            justifyContent: 'center', height: 120, width: 145, resizeMode: 'stretch', margin: 10
          }} source={require("../assets/logo.png")} />
        </View>
        <View style={{
          flex: 1, flexDirection: 'column', position: "relative", justifyContent: 'center',
          marginTop: 20
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
            onPress={parentLogin} style={{ backgroundColor: '#0Cb8B6', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
            <Text style={{
              color: '#FFFFFF', textAlign: 'center', fontSize: 18, fontWeight: "300"
            }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignUp')
            } style={{ backgroundColor: '#0Cb8B6', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
            <Text style={{
              color: '#FFFFFF', textAlign: 'center', fontSize: 18, fontWeight: "300"
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  )
}

