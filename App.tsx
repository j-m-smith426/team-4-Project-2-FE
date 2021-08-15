import React from 'react';

import { StyleSheet } from 'react-native';

import MainRoutes from './app/Navigation/MainRoutes';


import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {LoginReducer, PageReducer, UpdateInfoReducer  } from './app/redux/Reducers';
import Amplify from 'aws-amplify';
import { currentConfig } from './amplifyConfig';
import thunk from 'redux-thunk';




Amplify.configure(currentConfig);
export const rootReducer = combineReducers({
  Login: LoginReducer,
  Page: PageReducer,
  Update:  UpdateInfoReducer
    

  });
const w:any = window;
export const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    //<Following />

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
