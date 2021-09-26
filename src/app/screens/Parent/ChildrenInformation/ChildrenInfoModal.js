import React from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import ChildDetails from './ChildDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';

function ChildrenInfoModal(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}>
                    <View>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5
                        }]}>{ChildDetails[props.childid].name}
                        </Title>
                        <Caption style={styles.caption}>{ChildDetails[props.childid].parentName}</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" size={20} color="#777777" />
                    <Text>{ChildDetails[props.childid].address}</Text>
                </View>
                <View style={styles.row}>
                    <Text>DOB: {ChildDetails[props.childid].dateOfBirth}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} color="#777777" />
                    <Text>Contact No: {ChildDetails[props.childid].contactNo}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name={ChildDetails[props.childid].gender
                        === "Male" ? "human-male" : "human-female"}
                        size={20} color="#777777" />
                    <Text>{ChildDetails[props.childid].gender}</Text>
                </View>
                <View style={styles.row}>
                    <Text>CNIC: {ChildDetails[props.childid].parentCNIC}</Text>
                </View>
                <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Text style={styles.closeButton}>Hide</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e4f0ea",
        width: "70%",
        marginTop: 50,
        alignSelf: 'center',
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default ChildrenInfoModal
