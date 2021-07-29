import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Button_animeComments from '../Components/Anime/Button_animeComments';
import Button_animeFavorite from '../Components/Anime/Button_animeFavorite';
import Button_animeRating from '../Components/Anime/Button_animeRating';
import {Storage} from 'aws-amplify'
import { useEffect } from 'react';
import axios from '../../axiosConfig';
import IAnime from '../model/Anime'
import SearchList from './SearchList'

const newAnime:IAnime = {
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
}

export default function AnimeScreen() {
  const [anime,setAnime] = useState<IAnime>(newAnime);
  const currentPage = "A#DragonBallZ";

   
    useEffect(() =>
    {
      let isMounted = true;
      isMounted && getAnime()
      return() => {isMounted = false}
    }, [])
    const getAnime = async () =>
    {axios.get('/Anime/'+currentPage.replace('#','_'))
      .then(response =>{setAnime(response.data)});
    }
  
  return (
    <View style={styles.container}>
       <View style={styles.topMenu}>
       <Text style={styles.header}>{anime.TYPEID.split('#')[1]}</Text>
       </View>
      <Image
     
        style={styles.animeImg}
        // source={require('../assets/dbz.jpg')}/>
        source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`}}/> 
        
     
    
        <Text style={styles.title}>{anime.TYPEID.split('#')[1]}</Text>
        {/* <Text style={styles.rating}></Text> */}
        <Text style={styles.content}>{anime.bio}</Text>
    
    <View style={styles.lowerMenu}>
    

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
      //fontFamily:'',
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
