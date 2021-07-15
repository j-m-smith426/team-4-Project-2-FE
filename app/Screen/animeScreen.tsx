import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Button_animeComments from '../Components/Anime/Button_animeComments';
import Button_animeFavorite from '../Components/Anime/Button_animeFavorite';
import Button_animeRating from '../Components/Anime/Button_animeRating';



export default function AnimeScreen() {
  return (
    <View style={styles.container}>
       <View style={styles.topMenu}>
       <Text style={styles.header}>Dragonball Z Anime Page</Text>
       </View>
      <Image
        style={styles.animeImg}
        source={require('../assets/dbz.jpg')}/>
        

        <Text style={styles.title}> Dragonball Z </Text>
        <Text style={styles.rating}>Rated 6 out of 7 Dragnballs</Text>
        <Text style={styles.content}>The epic episodic adventure of Goku and the Z Warriors as they defend the Earth 
        and the Universe from super-powered fighters and monsters</Text>
        
   
    <View style={styles.lowerMenu}>

    
        <Button_animeComments/>
        <Button_animeFavorite/>
    <Button_animeRating/>
    </View>
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  animeImg:{      
      height:200,
      width:300,
  },
  title:{
      fontFamily:'',
      fontSize: 32,
      color:'#000000',
      textAlign:'center',
  },
  content : {
      marginLeft:30,
      marginRight:30,
      color:'#000000',
      textAlign:'center',
  },
  
  topMenu:{
      color:'white',
      fontSize:18,
      backgroundColor:'#072083',
      flexDirection:'row',
      padding:10,
  },
  lowerMenu:{
    flexDirection:'row',
    //backgroundColor:'#072083',
    alignItems: 'center',
    justifyContent:'space-evenly',

  },
  rating:{
      color:'black',
      fontSize:18,
  },
  header:{
      color:'white'
  }
});
