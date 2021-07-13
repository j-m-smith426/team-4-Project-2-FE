import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Button_Like = () => {
    return (
        <View style={styles.likeContainer}>
            <Text>Like</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    likeContainer: {
        backgroundColor: 'turquoise',
        width: '20%',
        height: '100%',
        //alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        position:'absolute'
    }
});

export default Button_Like;