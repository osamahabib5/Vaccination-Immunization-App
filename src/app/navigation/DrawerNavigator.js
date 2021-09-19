import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ParentDashboard" component={ParentDashboard} />
            
            <Drawer.Screen name="ParentProfile" component={ParentProfile} />
            <Drawer.Screen name="Home" component={ParentDashboard} />
            <Drawer.Screen name="My Profile" component={EditProfileScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
