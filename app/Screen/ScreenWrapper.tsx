import React from 'react';
import { useWindowDimensions, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../config/colors';

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
        height: DEVICEHEIGHT - STATUSBARHEIGHT,
        backgroundColor: colors.background,
    }
});

export default ScreenWrapper;