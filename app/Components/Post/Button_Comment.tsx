import React from 'react';

import { Text, View, StyleSheet, Pressable } from 'react-native';
import colors from '../../config/colors';


const Button_Comment = () =>
{
    
    return (
        <View style={styles.commentContainer}>

            
            <Text style={styles.buttonText}>Comment</Text>
            

        </View>
    );
}

const styles = StyleSheet.create({
    commentContainer: {

        backgroundColor: colors.buttonPrimary,
        justifyContent: 'center',
        //marginHorizontal: '2%',
        width: '25%',
        alignItems: 'center',
        borderRadius: 80,


        height: '100%'
    },
    buttonText: {
        color: colors.buttonSecondary
    }
});

export default Button_Comment;