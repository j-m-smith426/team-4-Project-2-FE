import React from 'react';

import { Text, View, StyleSheet, Pressable } from 'react-native';
import colors from '../../config/colors';


const Button_Comment = () => {
    return (
        <View style={styles.commentContainer}>

            <Pressable onPress={() => console.log('comment was pressed')}>
            <Text>Comment</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    commentContainer: {

        backgroundColor: colors.secondary,
        justifyContent: 'center',
        //marginHorizontal: '2%',
        width: '25%',
        alignItems: 'center',
        borderRadius: 80,


        height: '100%'
    }
});

export default Button_Comment;