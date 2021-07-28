import React from 'react';
import { View, StyleSheet } from 'react-native';
import FavoriteCard from '../Components/Anime/FavoriteCard';


const data: IFavorite[] = [{
    animeName: 'dbz',
    animeImg: 'dbz'
},
    {
        animeName: 'dbz',
        animeImg: 'dbz'
}]


const FavoriteScreen = () => {
    return (
        //Container of all Cards
        <View>
            <FavoriteCard />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        justifyContent: 'space-between'
    }
});

export default FavoriteScreen;