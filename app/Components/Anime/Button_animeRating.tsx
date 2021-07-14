import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';






const Button_animeRating = () => {
    return (
        <View style={styles.button}>
           <Button
            
            onPress={() =>Alert.alert('Eventually you will be able to rate this anime.')}
            title="Rate Anime"
            color='#f85B1A'
            accessibilityLabel="Press to give your rating of this anime."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        
        margin:5,
        padding:10,
        borderRadius:25,      
    },
    text:{
        color:'red',
    }
});

export default Button_animeRating;