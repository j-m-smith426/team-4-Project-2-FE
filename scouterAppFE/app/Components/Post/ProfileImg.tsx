import React from 'react';
import { Image, View, StyleSheet, Text, Pressable } from 'react-native';


const ProfileImg = () => {
    return (
            <Pressable onPress={() => console.log('User name was pressed')}>
        <View style={styles.container}>
                <View style={styles.imageCover}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon.png')} />
                    </View>
                <View>
                        <Text>user name</Text>
                        
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
        borderRadius: 50,
        
    }
});

export default ProfileImg;