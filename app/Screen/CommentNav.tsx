import React from "react";
import { View, StyleSheet } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useSelector } from "react-redux";
import colors from "../config/colors";
import { IRootState } from "../redux/State";
import CommentScreen from "./CommentScreen";
import LoadPosts from "./LoadPosts";
import ScreenWrapper from "./ScreenWrapper";

const CommentNav = () =>
{
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Comment' },
    { key: 'second', title: 'PostList' },
  ]);
    const Comment = () =>
    {
        return (
        
            <View style={styles.TabView}>
                <CommentScreen />
            </View>
        )
    }
    const CommentList = () =>
    {
        const [currentPost] = useSelector((state: IRootState) =>
        {
            return [state.sites.IPageState.postID];
        });
        return (
            <View>
                <LoadPosts page={currentPost} />
            </View>
        )
    }

    const renderScene = SceneMap({
        first: Comment,
        second: CommentList,
    
    });

    return (
        <ScreenWrapper>

        <TabView
            style={styles.TabView}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={props => <TabBar {...props} style={styles.TabBar} />}
            //initialLayout={{ width: layout.width }}
            />
            </ScreenWrapper>
    );
  
}
const styles = StyleSheet.create({

    //specifically for header navigation
    TabBar: {
      backgroundColor: colors.TabBarHeader,
      paddingTop: "5%",
    },

    TabView: {
      flex: 1,
    },
})
export default CommentNav;