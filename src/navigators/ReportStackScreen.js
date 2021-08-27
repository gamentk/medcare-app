import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
    ReportScreen
} from '../screens'

const ReportStack = createStackNavigator();
const ReportStackScreen = () => {
    return (
        <ReportStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <ReportStack.Screen
                name="Report"
                component={ReportScreen}
            />
        </ReportStack.Navigator>
    );
}

export default ReportStackScreen;