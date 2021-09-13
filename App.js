import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/app/screens/Splash';
import Login from './src/app/screens/Login';
import SignUp from './src/app/screens/Parent/SignUp';
import WorkerSignIn from './src/app/screens/Worker/WorkerSignIn';
import ParentDashboard from './src/app/screens/Parent/ParentDashboard';
import ParentProfile from './src/app/screens/Parent/ParentProfile';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ParentProfile" component={ParentProfile} options={{ title: 'Child Immunization - ParentProfile.' }}/>  
      {/* <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ title: 'Child Immunization - Parent.' }}/> */}
        {/* <Stack.Screen name="Splash" component={Splash} options={{ title: 'Child Immunization.' }}/> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ title: 'Child Immunization - Login' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Parent's Registration" }}/>
        <Stack.Screen name="WorkerSignIn" component={WorkerSignIn} options={{ title: "Worker's Login" }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
