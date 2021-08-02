import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import axiosConfig from '../../../axiosConfig';
import { IRootState } from '../../redux/State';
import PostScreen from '../../Screen/PostScreen';
import Bio from './BioSection';
import Watchlist from './Watchlist';
import Following from './Following';
import Favorites from './Favorites';
import IUser from '../../model/User';
import Loading from '../../Screen/loading';
import colors from '../../config/colors';

let newUser: IUser = {
  REFERENCE: '0',
  TYPEID: '',
  name: '',
  bio: {
      greeting: '',
      description:''
  },
  image: 'key',
  watchlist: [],
  followed: [],
  favorites: []

}
export default function Profile() {
  
  let isMounted = true;
  //key value pairs for the header so that the route knows what to look for
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Posts' },
    { key: 'third', title: 'Favorite'},
    { key: 'fourth', title: 'Follow'}
  ]);
  const [loaded,setLoaded] = useState<Boolean>(false);
  const [userInfo, setUserInfo] = isMounted && useState<IUser>(newUser);
  let navigation = isMounted && useNavigation();
  let user = isMounted && useSelector((state: IRootState) =>
  {
    return state.sites.ILogin.username
  });
  //let userPage = page.replace('#','_');
  const loadUserInfo = () =>
  {
    console.log(`HI`);
    axiosConfig.get(`User/U_${user}`).then((response) =>
    {
      console.log(`${user} , bio=${response.data.TYPEID}`);
      setUserInfo(response.data);
      

      setLoaded(true);
    })
  }

  useEffect(() =>
  {
      isMounted = true;
      
    loadUserInfo();
    setIndex(0);
   
    return () =>
    {
      isMounted = false;
    }
  }, [navigation,user]);
  //Route to each component
const FirstRoute = () => (
  <Bio  bio={userInfo.bio} image={userInfo.image}  name={user}/>
);

const SecondRoute = () => (
  // <Favorites/>
  <PostScreen />
);

const ThirdRoute = () => (
  <Favorites list={userInfo.favorites}/>
 
);

const FourthRoute = () => (
    <Following following={userInfo.followed}/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});
  if(!loaded){
    return (
      <Loading></Loading>
    );
  } else {
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

}

const styles = StyleSheet.create({

    //specifically for header navigation
    TabBar: {
      backgroundColor: colors.TabBarHeader,
      paddingTop: "10%",
      //marginBottom:"10%",
    },
    
    TabView: {
      flex: 1,
      fontSize:13,
      
     
    },
    bio:{

    }
})