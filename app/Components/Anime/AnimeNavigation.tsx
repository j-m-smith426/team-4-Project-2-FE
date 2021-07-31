import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import axiosConfig from '../../../axiosConfig';
import { IRootState } from '../../redux/State';
import AnimeScreen from '../../Screen/animeScreen'
import PostScreen from '../../Screen/PostScreen';
import Anime from './Anime';

export default function AnimePage() {
  //const layout = useWindowDimensions();

  //key value pairs for the header so that the route knows what to look for
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'OverView' },
    { key: 'second', title: 'Posts' },
    
  ]);
  const [animeInfo, setAnimeInfo] = useState<any>({ name:'',bio:'', genre:''});
  let navigation = useNavigation();
  const anime = useSelector((state: IRootState) =>
  {
    return state.sites.IPageState.parentID;
  })
  

  
const FirstRoute = () => (
  
  <Anime />
);

const SecondRoute = () => (
  // <Favorites/>
  <PostScreen />
);

 

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  
});

  return (
    <TabView
      style = {styles.TabView}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => <TabBar {...props} style = {styles.TabBar}/>}
      //initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({

    //specifically for header navigation
    TabBar: {
      backgroundColor: "green",
      paddingTop: "10%",
     
    },

    TabView: {
      flex: 1,
      fontSize:15,
      
     
    },
    bio:{

    }
})