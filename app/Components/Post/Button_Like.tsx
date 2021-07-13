import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import colors from '../../config/colors';

const Button_Like = () => {
    return (
        <View style={styles.likeContainer}>
            <Pressable onPress={() =>console.log('like was pressed')}>
            <Text>Like</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    likeContainer: {
        backgroundColor: colors.primary,
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        position:'absolute'
    }
});

export default Button_Like;