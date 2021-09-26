import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
import Splash from '../screens/Splash';
const Drawer = createDrawerNavigator();
function WorkerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={WorkerDashboard} />
            <Drawer.Screen name="Logout" component={Splash} />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator
