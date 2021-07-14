import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import PostScreen from './PostScreen';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';

const mainScreen = () => {
    return (
        <View></View>
    );
}

export default mainScreen;