import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
function ChildrenInfoModal() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.heading}>
                Child Details
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e4f0ea",
        marginTop: 50,
        width: 350,
        alignSelf: 'center',
        height: "300"
    }          
})
export default ChildrenInfoModal
