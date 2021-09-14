import React from 'react'
import { View , Text, TouchableOpacity} from 'react-native'

function ChildrenInformation() {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={{ flex: 1}}>
                <Text>
                    Child Name
                </Text>
            </View>
            <View style = {{flex: 1}}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp');
                        ParentSignup();
                    }} style={{ backgroundColor: '#1796b3', width: 65, height: 65, justifyContent: 'center', borderRadius: 40 }}>
                    <Text style={{
                        color: '#FFFFFF', textAlign: 'center', fontSize: 13, fontWeight: "500"
                    }}>View Children</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChildrenInformation
