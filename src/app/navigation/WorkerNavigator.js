import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
const Drawer = createDrawerNavigator();
function WorkerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={WorkerDashboard} />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator
