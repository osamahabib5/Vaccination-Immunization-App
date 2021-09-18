import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import ParentProfile from '../screens/Parent/ParentProfile';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ParentDashboard" component={ParentDashboard} />
            WorkerDrawer
            <Drawer.Screen name="ParentProfile" component={ParentProfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
