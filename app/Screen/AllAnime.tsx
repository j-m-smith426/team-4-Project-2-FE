import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Pressable, TouchableOpacity, Image} from 'react-native';
import IAnime from '../model/Anime'
import axios from '../../axiosConfig'
import { getTokenSourceMapRange } from 'typescript';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SwitchPageAction } from '../redux/Actions';
import colors from '../config/colors';



interface IProps
{
    page: string 
}

const dummyAnime=[
  {
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
}
];

interface IAnimeList
{
  
  TYPEID:string,
  name:string,
  image:string,
  genre:string,
}


const AllAnime=()=> {

  const [animeArr, setAnime] = useState<IAnimeList[]>([]);     

  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  

  useEffect(() =>
  {
    let isMounted = true;
    if (isMounted) {
      
      getAllAnime();
    }
    return()=>{isMounted = false}
  },[navigation])

  const getAllAnime = async () =>
  {
      axios.get<any[]>('Anime/all')
      .then(response =>
        {
        console.log(response.data);
        const newArr:IAnimeList[] = [];
        response.data && response.data.forEach(data =>
        { 
          console.log(data.TYPEID);
          let anime =
            {
              // REFERENCE:'0',
              TYPEID:'',
              name:'',
              // bio:'',
              image:'',
              genre:'',
            };
            anime.TYPEID=data.TYPEID;
            anime.name=data.TYPEID.substring(2);
            anime.genre=data.genre;
            anime.image=data.image;
            newArr.push(anime);
          }
        )
        newArr.sort((animeA,animeB) =>
        {
          return animeA.TYPEID.split('#')[1].localeCompare(animeB.TYPEID.split('#')[1])
        })
          setAnime(newArr);
          console.log(animeArr);
      })
    }
  function getThere(name: string)
  {
    console.log(name);
  dispatch({
    type: SwitchPageAction.UPDATE,
    payload: {
      name: 'Anime',
      parentID: name
    }
  });
  navigation.navigate('Anime')
 
  
}

  return (
    <View style={styles.container}>
       
       {/* //only renders a small amount then adds as you scroll */}
       
        <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.TYPEID}
            data={animeArr}
            renderItem={({item})=>(
              <View style={styles.card}>
              <TouchableOpacity onPress={() =>getThere(item.TYPEID)}>
               
              <View style={styles.info}>
                <Image style={styles.image} source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.image}`}}/> 
                <View style={styles.text}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
                </View>
                </View>
                </TouchableOpacity>
                </View>

            )}
        />
    </View>
  );

    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    //paddingTop:40,
    paddingHorizontal:5,
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  item:{
      margin:2,
      padding:10,
      backgroundColor: colors.tertiary,
    fontSize: 24,
    textAlign:"center",
  },
  image: {

    height: 100,
    width: 100,
    //maxHeight: '40%',
    resizeMode:"stretch",
    
  },
  card:{
    
    flexDirection:"row",
    padding:5,
    backgroundColor: colors.tertiary,
    fontSize: 24,
    borderBottomWidth: 1,
   

  },
  info:{
    flexDirection:"row",

  },
  genre:{
    backgroundColor:colors.background,
    textAlign:"center",

  },
  text:{
    
  },
  
});
export default AllAnime;


