import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ChildrenInformation from '../Parent/ChildrenInformation/ChildrenInformation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function WorkerDashboard() {
    return (
        <View style={styles.row}>
            <View style={styles.inputWrap}>
                <Text style={styles.label}>Expiration date</Text>
                <TextInput style={styles.inputdate} />
            </View>

            <View style={styles.inputWrap}>
                <Text style={styles.label}>CVV</Text>
                <TextInput style={styles.inputcvv} maxLength={17} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: "row"
    },
    inputWrap: {
      flex: 1,
      borderColor: "#cccccc",
      borderBottomWidth: 1,
      marginBottom: 10
    },
    inputdate: {
      fontSize: 14,
      marginBottom: -12,
      color: "#6a4595"
    },
    inputcvv: {
      fontSize: 14,
      marginBottom: -12,
      color: "#6a4595"
    }
  });

import { Text, View } from 'react-native'

function WorkerDashboard() {
    return (
       <View>
           <Text>Hello</Text>
       </View>
    )
}

export default WorkerDashboard
