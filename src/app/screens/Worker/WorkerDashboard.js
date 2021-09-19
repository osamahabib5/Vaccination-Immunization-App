import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Touchable } from 'react-native'
import ChildrenInformation from '../Parent/ChildrenInformation/ChildrenInformation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function WorkerDashboard() {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#0df2c9', '#b1faed']} style={{ padding: 10 }} >
            <View style={{ marginTop: 20,paddingTop: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 8 }}>Child Information</Text>
              <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center', paddingHorizontal: 12 }}>
                <TextInput
                  style={{ backgroundColor: '#eee', fontWeight: 'bold', fontSize: 16, width: 200, borderRadius: 10, paddingLeft: 15 }}
                  placeholder='Children Name' placeholderTextColor="#00000087" />
                <TouchableOpacity style={{backgroundColor:'white'}}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        <LinearGradient
          colors={['#b1faed','#0df2c9' ]} style={{ marginTop: 50, paddingTop: 18 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Polio Symptoms</Text>
            <View style={{ flexDirection: 'column', marginTop: 16, alignItems: 'center', paddingHorizontal: 12 }}>
              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />
                
              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />

              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />

              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />

              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />

              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your specifc  Symptom' placeholderTextColor="#00000087" />
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: 'black',
    fontSize: 20,
    alignSelf: 'center'
  },
  searchFilterTextField: {
    backgroundColor: '#eee',
    fontWeight: 'bold',
    fontSize: 14,
    width: 300,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 10
  }
})
export default WorkerDashboard;