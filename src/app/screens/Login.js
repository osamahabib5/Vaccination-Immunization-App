import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/style';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import {axios} from 'axios';

export default function Login({ navigation, route }) {
  const [LoginDetails, setLoginDetails] = useState({email : "", password: ""})
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linearGradient} colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Image style={{
            marginTop: 5,
            justifyContent: 'center', height: 120, width: 145, resizeMode: 'stretch', margin: 10
          }} source={require("../assets/logo.png")} />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', position: "relative", justifyContent: 'center',
        marginTop: 80
      }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              placeholderTextColor="#00000087"
              keyboardType='email-address'
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#00000087"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', position: "relative", marginBottom: "0%", justifyContent: 'center',
      marginTop: 50
      }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home')
            } style={{ backgroundColor: '#1796b3', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
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

