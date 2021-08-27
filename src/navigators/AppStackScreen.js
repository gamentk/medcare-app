import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View
} from 'react-native';

// Icons
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import EnIcon from 'react-native-vector-icons/Entypo';

// Stacks
import {
    HomeStackScreen,
    ScanStackScreen,
    ReportStackScreen
} from '../navigators';

// Constants
import {
    COLORS,
    SIZES,
    FONTS
} from '../constants';

const AppStack = createBottomTabNavigator();
const AppStackScreen = () => {
    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 50,
                    paddingHorizontal: 45,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopWidth: 0
                }
            }}
        >
            <AppStack.Screen
                name="HomeStack"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FaIcon
                                name="home"
                                size={30}
                                color={(focused) ? COLORS.secondary : COLORS.gray}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name="ScanStack"
                component={ScanStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <McIcon
                                name="qrcode-scan"
                                size={30}
                                color={(focused) ? COLORS.secondary : COLORS.gray}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name="ReportStack"
                component={ReportStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <EnIcon
                                name="list"
                                size={30}
                                color={(focused) ? COLORS.secondary : COLORS.gray}
                            />
                        </View>
                    )
                }}
            />
        </AppStack.Navigator>
    );
}

export default AppStackScreen;