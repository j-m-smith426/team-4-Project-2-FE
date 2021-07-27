import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Post from './app/Components/Post/Post';
import Login from './app/Screen/Login';
import MainRoutes from './app/Navigation/MainRoutes';


import AnimeScreen from './app/Screen/animeScreen';
import PostScreen from './app/Screen/PostScreen';
import { Provider } from 'react-redux';
import { combineReducers, createStore, Store } from 'redux';
import { IAppState } from './app/redux/State';
import { IAppActions } from './app/redux/Actions';
import { Reducer } from './app/redux/Reducers';
import Amplify from 'aws-amplify';
import { currentConfig } from './amplifyConfig';




Amplify.configure(currentConfig);
export const rootReducer = combineReducers({
  sites:  Reducer
  });
const w:any = window;
export const store= createStore(rootReducer, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__() );
//export type RootState = ReturnType<typeof store.getState>;
export default function App() {
  return (


      <Provider store={store}>
        <MainRoutes />
      </Provider>
     
      );
    }
    {/* <Login/> */}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:"column",

  },
});
