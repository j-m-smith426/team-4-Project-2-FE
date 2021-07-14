import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import buttons from '../../config/buttons';
import colors from '../../config/colors';





const Button_animeRating = () => {
    return (
        <View style={styles.button}>
           <Button
            
            onPress={() =>Alert.alert('Eventually you will be able to rate this anime.')}
            title="Rate Anime"
            color={buttons.backColor}
            accessibilityLabel="Press to give your rating of this anime."
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

export default Button_animeRating;