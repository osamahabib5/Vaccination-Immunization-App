import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function ParentDashboard() {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 18 }}>
                <Text style={styles.textInput}>Children Information</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <ChildrenInformation />
                {/* <ChildrenInformation />
                <ChildrenInformation /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f7fc',
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default ParentDashboard
