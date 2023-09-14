// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* ------ Screen Details ----- */

import LoginScreen from '../screens/auth/login';
import SpendTrackerScreen from '../screens/home/spend-tracker';

const Stack = createNativeStackNavigator();

const  NavigatorScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerShown: false
                }} initialRouteName="Login">
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="SpendTracker"
                    component={SpendTrackerScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigatorScreen;