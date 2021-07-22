import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import  colors from '../../config/colors';

const FavoriteCard = () => {
    return (
        // Outside Container Style Container
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/dbz.jpg')} />
            <Text>DragonBallZ</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 50,
        height: '80%',
        width: '90%'
    },
    image: {
        height: '70%',
        width: '80%',
        //maxHeight: '40%',
        alignSelf: 'center',
        resizeMode: 'center'
    }
});
export default FavoriteCard;