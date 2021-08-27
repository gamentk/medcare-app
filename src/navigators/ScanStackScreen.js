import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
    ScanScreen
} from '../screens'

const ScanStack = createStackNavigator();
const ScanStackScreen = () => {
    return (
        <ScanStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <ScanStack.Screen
                name="Scan"
                component={ScanScreen}
            />
        </ScanStack.Navigator>
    );
}

export default ScanStackScreen;