import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
export default function DietPlanModal(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textInput}>Child Details</Text>
            <View style={{ marginTop: 30 }}>
                <View style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Text style={styles.label}>Height</Text>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput
                            placeholder="height"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                        />
                    </View>
                </View>
                <View style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <Text style={styles.label}>Weight</Text>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput
                            placeholder="weight"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                        />
                    </View>
                </View>
                <View style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <Text style={styles.label}>Age</Text>
                    <View style={{ marginLeft: 0 }}>
                        <TextInput
                            placeholder="age"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
            </View>
            <View style={styles.SubmitOptions}>
                <TouchableOpacity onPress={props.closeModal}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>
                        Proceed
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.closeModal}
                    style={{ marginTop: 30 }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>
                        Close
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e4f0ea",
        width: "80%",
        marginTop: 50,
        alignSelf: 'center',
        flex: 1,
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45,
        fontWeight: 'bold'
    },
    selectoptionStyling: {
        fontSize: 15
    },
    label: {
        fontSize: 19,
        textAlign: 'center',
        justifyContent: 'center',
        width: 90
    },
    SubmitOptions: {
        marginTop: 40
    }
})