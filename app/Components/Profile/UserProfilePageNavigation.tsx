import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/State';

import Bio from './BioSection';
import Following from './Following';
import Favorites from './Favorites';
import IUser from '../../model/User';
import colors from '../../config/colors';
import { updateLoggedInUser } from '../../redux/Actions/UsersActions';
import PostScreen from '../../Screen/Comment-Post/PostScreen';
import PostScreenUser from '../../Screen/Comment-Post/PostScreenUser';

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
  let navigation = isMounted && useNavigation();
  let user = isMounted && useSelector((state: IRootState) =>
  {
    return state.Login.ILogin.user
  });
  const dispatch = useDispatch();

  useEffect(() =>
  {
      isMounted = true;
    dispatch(updateLoggedInUser(user.TYPEID));
    
    setIndex(0);
   
    return () =>
    {
      isMounted = false;
    }
  }, [navigation]);
  //Route to each component
const FirstRoute = () => (
  <Bio  bio={user.bio} image={user.image}  name={user.TYPEID.split('#')[1]}/>
);

const SecondRoute = () => (
  // <Favorites/>
  <PostScreenUser />
);

const ThirdRoute = () => (
  <Favorites list={user.favorites}/>
 
);

const FourthRoute = () => (
    <Following following={user.followed}/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
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
      backgroundColor: colors.TabBarHeader,
      paddingTop: "5%",
      //marginBottom:"10%",
    },
    
    TabView: {
      flex: 1,
      fontSize:13,
      
     
    },
    bio:{

    }
})