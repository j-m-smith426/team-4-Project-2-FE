import React from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';

const Button_animeRating = () => {
    return (
        <View style={styles.commentContainer}>
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
    commentContainer: {
        margin:5,
        padding:10,
        
       
    }
});

export default Button_animeRating;