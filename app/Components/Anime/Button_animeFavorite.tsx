import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import buttons from '../../config/buttons';
const Button_animeFavorite = () =>
{
    let navigation = useNavigation();
    return (
        <View style={styles.favorite}>
          <Button
            
            onPress={() => navigation.navigate('User')}
            title="Favorite"
            color={buttons.backColor}
            accessibilityLabel="Adds to a user's favorite list"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    favorite: {
        backgroundColor:buttons.backColor,
        borderRadius:buttons.radius,
        margin:buttons.marg,
        padding:buttons.padd,
        fontSize:buttons.fSize,
       
        
        
    }
});

export default Button_animeFavorite;