import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import { ParentStackNavigator, StackNavigator } from './StackNavigator';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import ParentProfile from '../screens/Parent/ParentProfile';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ParentDashboard" component={ParentDashboard} />
            <Drawer.Screen name="ParentProfile" component={ParentProfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
