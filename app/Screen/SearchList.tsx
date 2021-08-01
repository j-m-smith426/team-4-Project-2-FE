import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Pressable, TouchableOpacity} from 'react-native';
import IAnime from '../model/Anime'
import axios from '../../axiosConfig'
import { getTokenSourceMapRange } from 'typescript';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SwitchPageAction } from '../redux/Actions';
import colors from '../config/colors';
import IUser from '../model/User';


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
  name: string,
  image: string,
}


const SearchList=()=> {

  const [animeArr, setAnime] = useState<IAnimeList[]>([]);     
  const [userArr, setUserArr] = useState<IAnimeList[]>([]);
  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  const route = useRoute();
  const params:any = route.params;
  const { val } = params;
  

  useEffect(() =>
  {
    let isMounted = true;
    if (isMounted) {
      console.log('val',val);
      getAnimeBySearch();
    }
    return()=>{isMounted = false}
  },[navigation,params])

  const getAnimeBySearch = useCallback( async () =>
  {
    console.log("Sending request iwth " + val);
    if(val){
      axios.get<any[]>('Anime/search/' + val)
      .then(response =>
        {
        console.log(response.data);
        const newArr: IAnimeList[] = [];
        const userinfoArr: IAnimeList[] = [];
        response.data && response.data.forEach(data =>
        { 
          console.log(data.TYPEID);
          let anime =
            {
              // REFERENCE:'0',
              TYPEID:'',
              name:'',
              // bio:'',
               image:''
            };
            anime.TYPEID=data.TYPEID;
          anime.name = data.TYPEID.substring(2);
          anime.image = data.image;
          if (anime.TYPEID.startsWith('A#')) {
            newArr.push(anime);
            
          }
          else if (anime.TYPEID.startsWith('U#')) {
              userinfoArr.push(anime)
            }
        }
          )    
        setAnime(newArr);
        setUserArr(userinfoArr);
        console.log(animeArr);
        console.log(userinfoArr);
      })
    }

  }, [val]);
  function getThereUser(name: string)
  {
    console.log(name);
  dispatch({
    type: SwitchPageAction.UPDATE,
    payload: {
      name: 'User',
      parentID: name
    }
  });
  navigation.navigate('User')
}

    
  function getThereAnime(name: string)
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
      <View style={styles.userBox} >

      <Text style={styles.Title}>Users</Text>
       <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.TYPEID}
        data={userArr}
        renderItem={({item})=>(
          <View style={styles.card}>
              <TouchableOpacity onPress={() =>getThereUser(item.TYPEID)}>
               
              <View style={styles.info}>
                <Image style={styles.image} source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.image}`}}/> 
                <View style={styles.text}>
                <Text style={styles.item}>{item.name}</Text>
                </View>
                </View>
                </TouchableOpacity>
                </View>

)}
/>
      </View>
      <View style={styles.userBox} >

      <Text style={styles.Title}>Anime</Text>
        <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.TYPEID}
        data={animeArr}
        renderItem={({item})=>(
          <View style={styles.card}>
              <TouchableOpacity onPress={() =>getThereAnime(item.TYPEID)}>
               
              <View style={styles.info}>
                <Image style={styles.image} source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.image}`}}/> 
                <View style={styles.text}>
                <Text style={styles.item}>{item.name}</Text>
                </View>
                </View>
                </TouchableOpacity>
                </View>

)}
        />
</View>
      

        {/* //loads all items before showing on screen */}
        {/* <ScrollView>
        {people.map(item=>(
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                    </View>
        ))}
    </ScrollView> */}

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
  Title: {
    fontSize: 24,
  },
  userBox: {
    flex:1
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
export default SearchList;
function useRouter() {
  throw new Error('Function not implemented.');
}

