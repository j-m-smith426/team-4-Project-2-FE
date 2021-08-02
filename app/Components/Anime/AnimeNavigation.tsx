import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import PostScreen from "../../Screen/PostScreen";
import Anime from "./Anime";

export default function AnimePage() {
  
  let isMounted = true;
  //key value pairs for the header so that the route knows what to look for
  const [index, setIndex] = isMounted && React.useState(0);
  const [routes] =
    isMounted &&
    React.useState([
      { key: "first", title: "OverView" },
      { key: "second", title: "Posts" },
    ]);
  let navigation = isMounted && useNavigation();
  const anime =
    isMounted &&
    useSelector((state: IRootState) => {
      return state.sites.IPageState.parentID;
    });
  useEffect(() => {
    isMounted = true;
    isMounted && setIndex(0);
    return () => {
      isMounted = false;
    };
  }, [navigation, anime]);

  const FirstRoute = () => <Anime />;

  const SecondRoute = () => (   
    <PostScreen />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      style={styles.TabView}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => <TabBar {...props} style={styles.TabBar} />}
     
    />
  );
}

const styles = StyleSheet.create({
  //specifically for header navigation
  TabBar: {
    backgroundColor: "green",
    paddingTop: "5%",
  },

  TabView: {
    flex: 1,
    fontSize: 15,
  },
  bio: {},
});
