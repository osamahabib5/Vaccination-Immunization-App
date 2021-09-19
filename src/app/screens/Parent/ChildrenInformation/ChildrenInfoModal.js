import React from 'react'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from "react-native-paper";
import ChildDetails from './ChildDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

function ChildrenInfoModal(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}>
                    {/* <View>
                        <Avatar.Image
                            source = {require('../../')}
                            size={80}
                        />
                    </View> */}
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
                    <Icon name="birthday-cake" size={20} color="#777777" />
                    <Text>{ChildDetails[props.childid].dateOfBirth}</Text>
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
                    <Icon name="confirmation-number" size={20} color="#777777" />
                    <Text>{ChildDetails[props.childid].parentCNIC}</Text>
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
    }, userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
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
})
export default ChildrenInfoModal
