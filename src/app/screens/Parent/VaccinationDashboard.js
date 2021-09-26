import React from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import VaccinationDetails from './VaccinationDetails';
import LinearGradient from 'react-native-linear-gradient';

function VaccinationDashboard() {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.linearGradient}
                colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
                <View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            top: 40
                        }}>
                            <Title style={styles.title}>Vaccination Details
                            </Title>
                        </View>
                    </View>
                </View>
                {VaccinationDetails.map(data => {
                    return (
                        <View key={data.id} style={styles.userInfoSection}>
                            <View style={styles.row}>
                                <Text>
                                    <Text style={[styles.infoStyling, { fontWeight: "bold" }]}> Name: </Text>
                                    <Text style={styles.infoStyling}> {data.name}</Text>
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.infoStyling, { fontWeight: "bold" }]}> Manufacturer: </Text>
                                <Text style={styles.infoStyling}> {data.manufacturer}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.infoStyling, { fontWeight: "bold" }]}> Quantity:  </Text>
                                <Text style={styles.infoStyling}> {data.quantity}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.infoStyling, { fontWeight: "bold" }]}> Country: </Text>
                                <Text style={styles.infoStyling}> {data.country}</Text>
                            </View>
                        </View>
                    )
                })}
            </LinearGradient>
        </SafeAreaView>
    )
}

export default VaccinationDashboard


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 10,
        flex: 0.3,
        marginTop: 80
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
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoStyling: {
        fontSize: 18
    },
    linearGradient: {
        flex: 1,
        width: '100%',

    },
})
