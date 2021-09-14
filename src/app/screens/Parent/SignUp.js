import React, { useState } from 'react';
import { ScrollView, Alert, SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from '../../baseUrl';

export default function SignUp({ navigation, route }) {
    const [parentDetails, setParentDetails] = useState({
        email: null, name: null, cnic: null, password: null, addr: null, area: null,
        city: null
    })
    let { email, name, cnic, password, addr, area, city } = parentDetails;

    const ParentSignup = () => {
        if (email && name && cnic && password && addr && area && city) {
            axios.post(baseUrl + "/users/create", {
                email: email,
                name: name,
                cnic: cnic,
                userType: "parent",
                password: password,
                address: {
                    addr: addr,
                    area: area,
                    city: city
                }
            }).then(function (response) {
                Alert.alert("Sign Up", "User created successfully!");
            }).catch(function (error) {
                // handle error
                Alert.alert("Error", JSON.stringify(error));
            }).then(
                setParentDetails({
                    ...parentDetails,
                    email: null, name: null, cnic: null, password: null, addr: null, area: null,
                    city: null
                })
            )
        } else {
            Alert.alert("SignUp", "Please fill all the details!")
        }
    }
    return (
        <ScrollView style={styles.signup_screen}>
            <LinearGradient style={{ alignItems: 'center', height: '100%', padding: 40 }} colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        placeholderTextColor="#00000087"
                        value={name}
                        name="name"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                name: e
                            })
                        }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email Address"
                        placeholderTextColor="#00000087"
                        keyboardType='email-address'
                        value={email}
                        name="email"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                email: e
                            })
                        }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="CNIC"
                        placeholderTextColor="#00000087"
                        keyboardType='number-pad'
                        value={cnic}
                        name="cnic"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                cnic: e
                            })
                        }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#00000087"
                        value={password}
                        name="password"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                password: e
                            })
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Address"
                        value={addr}
                        name="addr"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                addr: e
                            })
                        }}
                        placeholderTextColor="#00000087"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Area"
                        placeholderTextColor="#00000087"
                        value={area}
                        name="area"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                area: e
                            })
                        }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="City"
                        placeholderTextColor="#00000087"
                        value={city}
                        name="city"
                        onChangeText={(e) => {
                            setParentDetails({
                                ...parentDetails,
                                city: e
                            })
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp');
                        ParentSignup();
                    }} style={{ backgroundColor: '#1796b3', width: 200, height: 50, justifyContent: 'center', borderRadius: 30, margin: 6 }}>
                    <Text style={{
                        color: '#FFFFFF', textAlign: 'center', fontSize: 18, fontWeight: "300"
                    }}>Submit</Text>
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
    )
}