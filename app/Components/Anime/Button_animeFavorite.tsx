import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import colors from '../../config/colors';
import buttons from '../../config/buttons';
const Button_animeFavorite = () => {
    return (
        <View style={styles.button}>
          <Button
            
            onPress={() => Alert.alert('You Have added this anime to your favorites.')}
            title="Favorite"
            color={buttons.backColor}
            accessibilityLabel="Adds to a user's favorite list"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:colors.buttonPrimary,
        borderRadius:buttons.radius,
        margin:buttons.marg,
        padding:buttons.padd,
        fontSize:buttons.fSize,
       
        
        
    }
});

export default Button_animeFavorite;