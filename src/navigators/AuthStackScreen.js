import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
    SignInScreen
} from '../screens';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen
                name="SignIn"
                component={SignInScreen}
            />
        </AuthStack.Navigator>
    );
}

export default AuthStackScreen;