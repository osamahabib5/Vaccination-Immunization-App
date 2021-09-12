import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChildrenInformation from './ChildrenInformation'

function ParentDashboard() {
    return (
        <View style = {styles.container}>
            <Text>Children Information</Text>
            <View>
                <ChildrenInformation />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default ParentDashboard
