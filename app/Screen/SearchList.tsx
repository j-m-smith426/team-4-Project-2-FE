import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Pressable, TouchableOpacity} from 'react-native';
import IAnime from '../model/Anime'
import axios from '../../axiosConfig'
import { getTokenSourceMapRange } from 'typescript';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';


interface IProps
{
    page: string,
}

const dummyAnime=[
  {
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
},{
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
},
{
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
},
{
  REFERENCE:'0',
  TYPEID:'A#FakeAnime',
  name:'IamAFake',
  bio:'bad day for me',
  image:'',
}
];


const SearchList=(props:IProps)=> {

  const [animeArr, setAnime] = useState<IAnime[]>(dummyAnime);     
  const [refreshing, setRefreshing] = useState(false); 
  const navigation = useNavigation(); 

  useEffect(() =>
  {getAnimeBySearch()
  },[navigation])

  const getAnimeBySearch = useCallback( async () =>
  {
    axios.get<any[]>('/Anime/search/'.replace('#','_'))
    .then(response =>
      {
      response.data && response.data.forEach((data) =>
         { let anime =
          {
            REFERENCE:'0',
            TYPEID:'',
            name:'',
            bio:'',
            image:''
          };
          anime.REFERENCE=data.REFERENCE;
          anime.TYPEID=data.TYPEID;
          anime.name=data.name;
          anime.bio=data.bio;
          anime.image=data.image;

          animeArr.push(anime);
          

        }
        )    
        setAnime(animeArr)
  }
  )
  }, [refreshing]);
function getThere(){
  console.log('hello');
}

  return (
    <View style={styles.container}>
       
       {/* //only renders a small amount then adds as you scroll */}
       
        <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.TYPEID}
            data={animeArr}
            renderItem={({item})=>(
              <TouchableOpacity onPress={getThere}>
                <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>

            )}
        />
      

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
export default SearchList;
