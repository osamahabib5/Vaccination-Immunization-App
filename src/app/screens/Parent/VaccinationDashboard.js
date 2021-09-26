import React from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
function VaccinationDashboard() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style = {{flex: 1,
                    alignItems: 'center'
                    }}>
                        <Title style={styles.title}>Vaccination Details
                        </Title>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" size={20} color="#777777" />
                    <Text>Name</Text>
                </View>
                <View style={styles.row}>
                    <Text>Manufacturer</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} color="#777777" />
                    <Text>Quantity</Text>
                </View>
                <View style={styles.row}>
                    <Text>Expiry Date</Text>
                </View>
                <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                    <TouchableOpacity >
                        <Text style={styles.closeButton}>Hide</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VaccinationDashboard


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        flex: 1,
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
