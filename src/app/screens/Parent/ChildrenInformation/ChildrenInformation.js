import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import ChildDetails from './ChildDetails';
import ChildrenInfoModal from './ChildrenInfoModal';
import DietPlanModal from './DietPlanModal';


function ChildrenInformation(props, { navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [childid, setchildid] = useState(0);
    const closeModal = () => {
        setModalVisible(false);
    }
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
                                    setchildid(data.id);

                                }} style={styles.ViewDetailsButton}
                            >
                                <Text style={{
                                    color: '#FFFFFF', textAlign: 'center', fontSize: 13, fontWeight: "500"
                                }}>{props.buttondescription}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                {props.buttondescription === "View Details" ?
                    <ChildrenInfoModal closeModal={closeModal} 
                    childid = {childid}
                    /> :
                    <DietPlanModal closeModal={closeModal} />
                }
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    ChildName: {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 20,
        width: 100,
        fontSize: 15,
        fontWeight: 'bold'
    },
    ViewDetailsButton: {
        backgroundColor: '#1796b3',
        width: 65, height: 65,
        justifyContent: 'center',
        borderRadius: 40,
        marginLeft: 20
    },
    growthHeading: {

    }
})

export default ChildrenInformation

