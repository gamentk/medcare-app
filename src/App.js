// Make sure this import stay at the top
import 'react-native-gesture-handler';

import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Navigators
import {
    AuthStackScreen,
    AppStackScreen
} from './navigators';
import { COLORS } from './constants';

// Entry Point
const RootStack = createStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="App"
        >
            <RootStack.Screen
                name="Auth"
                component={AuthStackScreen}
            />
            <RootStack.Screen
                name="App"
                component={AppStackScreen}
            />
        </RootStack.Navigator>
    );
}

const navTheme = DefaultTheme;
navTheme.colors.background = COLORS.white;

const App = () => {
    return (
        <NavigationContainer
            theme={navTheme}
        >
            <RootStackScreen />
        </NavigationContainer>
    );
}

export default App;

/*
* TODO 1: Finish the fucking Home screen
*/