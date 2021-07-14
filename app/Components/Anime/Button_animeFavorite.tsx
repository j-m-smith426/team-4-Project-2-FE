import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

const Button_animeFavorite = () => {
    return (
        <View style={styles.favorite}>
          <Button
            
            onPress={() => Alert.alert('You Have added this anime to your favorites.')}
            title="Favorite"
            color='#f85B1A'
            accessibilityLabel="Adds to a user's favorite list"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    favorite: {
        margin:5,
        padding:10,
        
        
    }
});

export default Button_animeFavorite;