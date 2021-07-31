import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Pressable, TouchableOpacity} from 'react-native';
import IAnime from '../model/Anime'
import axios from '../../axiosConfig'
import { getTokenSourceMapRange } from 'typescript';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SwitchPageAction } from '../redux/Actions';


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
              // image:''
            };
            anime.TYPEID=data.TYPEID;
            anime.name=data.TYPEID.substring(2);
            newArr.push(anime);
          }
          )    
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
              <TouchableOpacity onPress={() =>getThere(item.TYPEID)}>
                <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>

            )}
        />
    </View>
  );

    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  item:{
      margin:23,
      padding:20,
      backgroundColor:'pink',
      fontSize:24,


  }
  
});
export default AllAnime;


