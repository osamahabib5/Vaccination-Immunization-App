import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/style';
function ParentProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}>
                    <View>
                        <Avatar.Image
                            source={require('../../assets/Avatar.jpg')}
                            size={80}
                        />
                    </View>
                    <View>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5
                        }]}>Osama Habib</Title>
                        <Caption style={styles.caption}>Bj_doe</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name = "map-marker-radius" color = "#777777"/>
                    <Text>Karachi, Pakistan</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}



export default ParentProfile
