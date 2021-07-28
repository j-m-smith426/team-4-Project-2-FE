import React,{ useEffect } from 'react';
import { useState } from 'react';
import { useWindowDimensions, View, StyleSheet, Dimensions, StatusBar, Platform, } from 'react-native';

const DEVICEHEIGHT = Dimensions.get('screen').height;
const STATUSBARHEIGHT = StatusBar.currentHeight || 24;
let windowHeight = DEVICEHEIGHT;


const ScreenWrapper = ({ children }) =>
{
    
    windowHeight = useWindowDimensions().height;
   
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        height:DEVICEHEIGHT- STATUSBARHEIGHT

    }
});

export default ScreenWrapper;