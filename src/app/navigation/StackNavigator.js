import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/Splash";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ParentDrawer" component={DrawerNavigator} options={{ headerShown: false, title: 'Parent Dashboard.' }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Parent's Registration" }} />
            {/* <Stack.Screen name="Edit Profile" component={EditProfileScreen} options={{ title: 'Child Immunization - Edit Profile.' }}/>   */}           
            <Stack.Screen name="Splash" component={Splash} options={{ title: 'Child Immunization.' }} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Child Immunization - Login' }} />
            <Stack.Screen name="WorkerSignIn" component={WorkerSignIn} options={{ title: "Worker's Login" }} />
        </Stack.Navigator>
    )
}



export {StackNavigator};