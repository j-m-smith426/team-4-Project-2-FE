import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack'

import MainRoutes from './app/Navigation/MainRoutes';

type RootParams = {
  Login: undefined;
  Post: undefined;
}



export default function App() {
  return (

    
        // <View style={styles.container}>
      <MainRoutes />
      
      );
    }
    {/* <Login/> */}
      //  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
});
