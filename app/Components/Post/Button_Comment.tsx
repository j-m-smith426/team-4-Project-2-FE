import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Button_Comment = () => {
    return (
        <View style={styles.commentContainer}>
            <Text>Comment</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        backgroundColor: 'grey',
        width: '20%',
        height: '100%'
    }
});

export default Button_Comment;