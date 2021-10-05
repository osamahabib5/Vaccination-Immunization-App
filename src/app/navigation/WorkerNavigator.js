import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
import Splash from '../screens/Splash';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
const Drawer = createDrawerNavigator();
function WorkerNavigator() {
    return (
<<<<<<< HEAD
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            sceneContainerStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Drawer.Screen name="Home" component={WorkerDashboard}/>
            <Drawer.Screen name="Polio Symptoms" component={CheckPolioSymptoms} />
=======
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={WorkerDashboard} options={{
                headerShown: false,
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Polio Symptoms" component={CheckPolioSymptoms} options={{
                headerShown: false,
                title: 'Polio Symptoms',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
>>>>>>> f2f229ec8038e2b1dd0593f334555f505ea7ad83
            <Drawer.Screen name="Logout" component={Splash} />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator
