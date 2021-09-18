import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation';
import ChildrenDietPlan from './ChildrenDietPlan/ChildrenDietPlan';
import LinearGradient from 'react-native-linear-gradient';

function ParentDashboard() {
    const [buttondescription, setbuttondescription] = useState("View Details")
    return (
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient colors={['#e6f7fc', '#e6f7fc', '#0df2c9']}>
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
                </LinearGradient >
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default ParentDashboard
