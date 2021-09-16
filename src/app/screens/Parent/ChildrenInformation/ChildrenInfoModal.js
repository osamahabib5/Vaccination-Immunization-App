import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
function ChildrenInfoModal(props) {
    return (
        <View style = {styles.container}>
            <Text>
                Child Detail
            </Text>
            <TouchableOpacity onPress = {props.closeModal}>
                <Text>
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e4f0ea",
        width: "70%",
        marginTop: 50,
        alignSelf: 'center',
        flex: 1,
    }          
})
export default ChildrenInfoModal
