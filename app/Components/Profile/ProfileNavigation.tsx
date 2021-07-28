import * as React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Bio from './BioSection';
import Favorites from './Favorites';
import Watchlist from './Watchlist';

//Route to each component
const FirstRoute = () => (
  <Bio/>
);

const SecondRoute = () => (
  <Favorites/>
);

const ThirdRoute = () => (
  <Watchlist/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function ProfilePage() {
  //const layout = useWindowDimensions();

  //key value pairs for the header so that the route knows what to look for
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Favorites' },
    { key: 'third', title: 'Watchlist'},
  ]);

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