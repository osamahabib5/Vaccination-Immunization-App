import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation'

function ParentDashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.textInput}>Children Information</Text>
            <View>
                <ChildrenInformation />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f7fc'
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
    },
})

export default ParentDashboard
