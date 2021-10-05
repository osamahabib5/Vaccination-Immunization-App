import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/app/screens/Splash';
import Login from './src/app/screens/Login';
import SignUp from './src/app/screens/Parent/SignUp';
import WorkerSignIn from './src/app/screens/Worker/WorkerSignIn';
import DrawerNavigator from './src/app/navigation/DrawerNavigator';
import WorkerDashboard from './src/app/screens/Worker/WorkerDashboard';
import WorkerNavigator from './src/app/navigation/WorkerNavigator';
import { NativeBaseProvider, Box } from 'native-base';
const Stack = createNativeStackNavigator();
export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'red'
    },
  };
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{
            title: 'Child Immunization.', headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            title: "Parent's Registration",
            headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Login" component={Login} options={{
            title: 'Parent Login',
            headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="WorkerSignIn" component={WorkerSignIn} options={{
            title: "Worker's Login",
            headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
<<<<<<< HEAD
          }} />*/}

=======
          }} />
>>>>>>> f2f229ec8038e2b1dd0593f334555f505ea7ad83
          <Stack.Screen name="ParentDrawer" component={DrawerNavigator} options={{
            headerShown: false,
            title: 'Parent Dashboard.',
            headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />

<<<<<<< HEAD
          {/* <Stack.Screen name="WorkerDrawer" component={WorkerNavigator} options={{
=======
          <Stack.Screen name="WorkerDrawer" component={WorkerNavigator} options={{
>>>>>>> f2f229ec8038e2b1dd0593f334555f505ea7ad83
            headerShown: false,
            title: 'Worker Dashboard.',
            headerStyle: {
              backgroundColor: '#001027',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}