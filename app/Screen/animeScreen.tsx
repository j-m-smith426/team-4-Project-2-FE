import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Rating from './Rating'
import {Storage} from 'aws-amplify'
import { useEffect } from 'react';
import axios from '../../axiosConfig';
import IAnime from '../model/Anime'
import SearchList from './SearchList'
import { AntDesign } from '@expo/vector-icons';

const newAnime:IAnime = {
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
  genre:'',
  rating:1,
}

export default function AnimeScreen() {
  const [anime,setAnime] = useState<IAnime>(newAnime);
  const currentPage = "A#DragonBallZ";
  const [clicked, setClicked] = useState(false);
    const handleStarClick = () => {
        console.log("Clicked");
        setClicked(!clicked);
    };

   
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
       <Text style={styles.topMenu}>{anime.TYPEID.split('#')[1]}</Text>
          <Text>   </Text>
       <TouchableOpacity onPress = {() => handleStarClick()}>
                        <AntDesign name = "heart" size = {20} color = {clicked? "gold":"grey"}/>
                    </TouchableOpacity>
       </View>
      <Image     
        style={styles.animeImg}
        // source={require('../assets/dbz.jpg')}/>
        source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`}}/> 
        <Text style={styles.genre}>{anime.genre}</Text>

    
        {/* <Text style={styles.rating}></Text> */}
        <Rating/>
        <Text style={styles.content}>{anime.bio}</Text>
   
  </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom:25,

  },
  animeImg:{      
      height:300,
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
      color:'black',
      fontSize:26,
      backgroundColor:'#fff',
      flexDirection:'row',
      padding:5,
      margin:5,
      alignItems:"center",
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
  },
  genre: {
    backgroundColor: "#E9E9E9",
    width: "50%",
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
}
});
