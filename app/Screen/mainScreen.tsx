import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Text, View} from 'react-native'
import AnimeScreen from './animeScreen';
import PostScreen from './PostScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();
export default function MainScreen ()  {
    return ( 
        <View>
            <Text>Welcome to Scouter App!!</Text>

      <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Anime" component={AnimeScreen} />
       
        <Tab.Screen name="Users" component={PostScreen} />
      </Tab.Navigator>
      </NavigationContainer>  
    </View>
    );
}

