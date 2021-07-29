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
    { key: 'fourth', title: 'Followed'}
  ]);
  const [userInfo, setUserInfo] = useState<any>({});
  const page = useSelector((state: IRootState) =>
  {
    return state.sites.IPageState.parentID;
  })
  let userPage = page.split('#');
  const loadUserInfo = () =>
  {
    axiosConfig.get(`User/${userPage[1]}`).then((response) =>
    {
      setUserInfo(response.data);
    })
  }

  useEffect(() =>
  {
    loadUserInfo();
  }, []);
  //Route to each component
const FirstRoute = () => (
  <Bio bio={userInfo.bio}/>
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