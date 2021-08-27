import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
    HomeScreen
} from '../screens'

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;