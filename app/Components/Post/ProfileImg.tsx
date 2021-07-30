import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SwitchPageAction } from '../../redux/Actions';

import { Image, View, StyleSheet, Text, Pressable } from 'react-native';
interface Iprops
{
    username: string,
    profileImg: string
}

const ProfileImg = (props: Iprops) =>
{
    let navigation = useNavigation();
    const dispatch = useDispatch();
    const goToUser = () =>
    {
        dispatch({
            type: SwitchPageAction.UPDATE,
            payload: {
                PageName: 'User',
                parentID: `U#${props.username}`
            }
        })
        navigation.navigate("User");
    }
    
    return (
            <Pressable onPress={() => goToUser}>
        <View style={styles.container}>
                <View style={styles.imageCover}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.profileImg}`,
                            method: 'GET',
                            cache: 'reload',
                            headers: { Pragma: 'no-cache' },
                        }} />
                    </View>
                <View >
                    <Text testID = 'Name'>{props.username}</Text>
                        
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

        width: '45%',
        height: '100%', 
        

       // backgroundColor: 'indigo',

    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 50,
        
    }
});

export default ProfileImg;