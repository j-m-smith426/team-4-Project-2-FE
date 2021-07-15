import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';
import AnimeScreen from '../Screen/animeScreen';

interface RouterProps
{
    children?: any
}
const Stack = createStackNavigator();

const MainRoutes: React.FC<RouterProps> = (props:RouterProps) =>
{
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen
                name="Login"
                component={Login}
                />
                <Stack.Screen name="Post" component={PostScreen} />
                <Stack.Screen name="Anime" component={AnimeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default MainRoutes;