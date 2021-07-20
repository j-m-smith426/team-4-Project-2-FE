import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import buttons from '../../config/buttons';

const Button_animeComments = () => {
    let navigation = useNavigation();
    
    
    return (
        <View style={styles.button}>
           <Button
            
            onPress={() =>navigation.navigate('Post')}
            title="Comments"
            color={buttons.backColor}
            accessibilityLabel="Press to look at this anime's comments"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:buttons.backColor,
        borderRadius:buttons.radius,
        margin:buttons.marg,
        padding:buttons.padd,
        fontSize:buttons.fSize,
       
      
    }
});

export default Button_animeComments;

