import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import ChildDetails from './ChildDetails';
import ChildrenInfoModal from './ChildrenInfoModal';


function ChildrenInformation({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={{ flexDirection: 'column', marginTop: 20, alignSelf: 'center' }}>
            {ChildDetails.map(data => {
                return (
                    <View key={data.id} style={{
                        flexDirection: 'row', marginTop: 20
                    }}>
                        <View>
                            <Text style={styles.ChildName}>
                                {data.name}
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    // navigation.navigate('SignUp');
                                    // ParentSignup();
                                    setModalVisible(true);
                                }} style={styles.ViewDetailsButton}>
                                <Text style={{
                                    color: '#FFFFFF', textAlign: 'center', fontSize: 13, fontWeight: "500"
                                }}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <ChildrenInfoModal />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    ChildName: {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 20,
        width: 100
    },
    ViewDetailsButton: {
        backgroundColor: '#1796b3',
        width: 65, height: 65,
        justifyContent: 'center',
        borderRadius: 40,
        marginLeft: 20
    }
})

export default ChildrenInformation

