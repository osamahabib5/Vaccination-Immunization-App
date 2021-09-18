import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation';
import ChildrenDietPlan from './ChildrenDietPlan/ChildrenDietPlan';

function ParentDashboard() {
    const [buttondescription, setbuttondescription] = useState("View Details")
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: 18 }}>
                    <Text style={styles.textInput}>Children Information</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <ChildrenInformation buttondescription="View Details" />
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.textInput}>Children Diet Plan</Text>
                    <View style={{ alignSelf: 'center' }}>
                        <ChildrenInformation buttondescription="View Diet Plan" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f7fc',
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default ParentDashboard
