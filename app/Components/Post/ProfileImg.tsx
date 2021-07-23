import React from 'react';

import { Image, View, StyleSheet, Text, Pressable } from 'react-native';
interface Iprops
{
    username: string,
    profileImg: string
}

const ProfileImg = (props:Iprops) => {
    return (
            <Pressable onPress={() => console.log(props.username + ' was pressed')}>
        <View style={styles.container}>
                <View style={styles.imageCover}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon.png')} />
                    </View>
                <View>
                    <Text>{props.username}</Text>
                        
                </View>

        </View>
            </Pressable>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      alignItems: 'center'
    },
    imageCover: {

        width: '50%',
        height: '100%', 
        

       // backgroundColor: 'indigo',

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 100,
        
    }
});

export default ProfileImg;