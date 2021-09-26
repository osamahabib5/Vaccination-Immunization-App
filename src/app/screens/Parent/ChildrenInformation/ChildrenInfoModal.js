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
import LinearGradient from 'react-native-linear-gradient';
function ChildrenInfoModal(props) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.linearGradient}
                colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
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
                        <Text>{ChildDetails[props.childid].contactNo}</Text>
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
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e4f0ea",
        width: "70%",
        marginTop: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 700,
        
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 60
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
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default ChildrenInfoModal
