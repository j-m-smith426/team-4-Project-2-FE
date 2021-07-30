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

//Route to each component
// const FirstRoute = () => (
//   <Bio/>
// );

// const SecondRoute = () => (
//   // <Favorites/>
//   <PostScreen />
// );

// const ThirdRoute = () => (
//   <Watchlist/>
 
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
// });

export default function ProfilePage() {
  //const layout = useWindowDimensions();

  //key value pairs for the header so that the route knows what to look for
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Posts' },
    { key: 'third', title: 'Watchlist'},
    { key: 'fourth', title: 'Follow'}
  ]);
  const [userInfo, setUserInfo] = useState<any>({ bio: { greeting: '', description: '' }, followed: [] });
  let navigation = useNavigation();
  const page = useSelector((state: IRootState) =>
  {
    return state.sites.IPageState.parentID;
  })
  
  let userPage = page.replace('#','_');
  const loadUserInfo = () =>
  {
    axiosConfig.get(`User/${userPage}`).then((response) =>
    {
      console.log('Response: ', response.data);
      setUserInfo(response.data);
    })
  }

  useEffect(() =>
  {
    let isMounted = true;
      isMounted && loadUserInfo();
    return() => {isMounted = false}
  }, [navigation]);
  //Route to each component
const FirstRoute = () => (
  <Bio bio={userInfo.bio} image={userInfo.image} following={userInfo.followed.includes(page)} user={userInfo} name={page.split('#')[1]}/>
);

const SecondRoute = () => (
  // <Favorites/>
  <PostScreen />
);

const ThirdRoute = () => (
  <Watchlist list={userInfo.watchlist}/>
 
);

const FourthRoute = () => (
  <Following />
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
      backgroundColor: "green",
      paddingTop: "10%",
    },

    TabView: {
      flex: 1,
    },
})