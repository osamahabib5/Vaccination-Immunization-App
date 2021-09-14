import React, { useState } from 'react';
import { ScrollView, Alert, SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import { axios } from 'axios';

const ParentSignup = () => {
    if (parentDetails.email.length > 0 && parentDetails.name.length > 0 && parentDetails.cnic.length > 0 && parentDetails.password.length > 0
        && parentDetails.addr.length > 0 && parentDetails.area.length > 0 && parentDetails.city.length > 0){
            Alert.alert("Data", JSON.stringify(parentDetails))
    }
}

export default function SignUp({ navigation, route }) {
    let [parentDetails, setParentDetails] = useState({ email: "", name: "", cnic: "", password: "", addr: "",area: "",
    city: ""
})
    const { email, name, cnic, password, addr, area, city} = parentDetails;
    return (

        <ScrollView style={styles.signup_screen}>
            <LinearGradient style={{ alignItems: 'center', height: '100%', padding: 40 }} colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        placeholderTextColor="#00000087"
                        value={name}
                        onChangeText={(e) => {
                            setParentDetails({
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
                        onChangeText={(e) => {
                            setParentDetails({
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
                        onChangeText={(e) => {
                            setParentDetails({
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
                        onChangeText={(e) => {
                            setParentDetails({
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
                        onChangeText={(e) => {
                            setParentDetails({
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
                        value = {area}
                        onChangeText={(e) => {
                            setParentDetails({
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
                        value = {city}
                        onChangeText={(e) => {
                            setParentDetails({
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