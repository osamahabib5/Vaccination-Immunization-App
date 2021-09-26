import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';

function WorkerDashboard() {
  return (
    <ScrollView>
      <LinearGradient style={styles.linearGradient}
        colors={['#0df2c9', '#b1faed']} style={{ padding: 10 }} >
        <View >
          <TextInput
            style={{ backgroundColor: '#eee',textAlign: 'center', fontWeight: 'bold', fontSize: 20, width: 200, borderRadius: 10, alignSelf: 'flex-end'}}
            placeholder='Search Child ID'  placeholderTextColor="#00000087" />
          <View >
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 8 }}>Child Information</Text>
              {ChildDetails.map(data => {
                return (
                  <View key={data.id} style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center', paddingHorizontal: 12 }}>
                    <TextInput
                      style={{ backgroundColor: '#eee', fontWeight: 'bold', fontSize: 16, width: 200, borderRadius: 10, paddingLeft: 15 }}
                      placeholder='Children Name' value={data.name} placeholderTextColor="#00000087" />
                    <TouchableOpacity style={{ backgroundColor: 'white' }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 50, flex: 1, height: 480 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Polio Symptoms</Text>
            <View style={{ flexDirection: 'column', marginTop: 16, alignItems: 'center', paddingHorizontal: 12 }}>
              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your Symptoms' placeholderTextColor="#00000087" />
              <TextInput
                style={styles.searchFilterTextField}
                placeholder='Add Your Symptoms' placeholderTextColor="#00000087" />
              <View style={{ marginTop: 30 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
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
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
})
export default WorkerDashboard;