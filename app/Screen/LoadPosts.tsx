import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { FlatList, RefreshControl, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import axiosConfig from "../../axiosConfig";
import Post from "../Components/Post/Post";
import { IPost } from "../model/Post";
import { IRootState } from "../redux/State";

interface IProps
{
    page: string,
}

const LoadPosts = (props:IProps) =>
{   let isMounted = true;
    const [refreshing, setRefreshing] = isMounted && useState(false);
    const [postArr, setPostArr] = isMounted && useState<IPost[]>();
    const [profilepic, setProfilePic] = isMounted && useState('key');
    const navigation = isMounted && useNavigation();
    useEffect(() =>
    {
        isMounted = true;
        isMounted && getPosts();
        return()=> {isMounted = true}
    }, [navigation]);


    const getPosts = useCallback(async () =>
    {
        setRefreshing(true);
        let newArray: IPost[] = [];
        axiosConfig.get<any[]>(`Post/Page/${props.page.replace('#','_')}`, {
            
        }).then(response =>
        {
            
           
            //construct each post

            response.data && response.data.forEach((data) =>
            {
               let post = {
                    username: '',
                    userProfilePic: '',
                    image: '',
                    Contents: '',
                    timestamp: 0,
                    postID: '',
                    parentID:''
    
                    
                };
                //User Name For Post
                let name: string = data.REFERENCE.split('#')[0];
               
        axiosConfig.get<any>(`User/U_${name}`, {
        }).then(userResponse =>
            {
            let userData = userResponse.data;
                //User Profile Pic
                setProfilePic(userData.image);
            })
                post.userProfilePic = profilepic;
                post.username = name;
                post.postID = data.REFERENCE;
                post.Contents = data.content;
                post.timestamp = data.Stamp;
                post.image = data.image;
                post.parentID = data.TYPEID;
               
                    newArray.push(post);
            });
            setPostArr(newArray);
            setRefreshing(false);
        });
       
        
        
    }, [refreshing]);
    return(
            <FlatList
                //viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
                data={postArr}
                renderItem={
                    ({ item }) =>
                    {
                        
                      return  (
                            <View style={styles.item}>
                              <Post username={item.username}
                                  userProfilePic={item.userProfilePic}
                                  Contents={item.Contents}
                                  image={item.image}
                                  timestamp={item.timestamp}
                                  postID={item.postID}
                                  parentID={item.parentID}/>
                            </View>
                        )
                    }}
                keyExtractor={item => item.postID}
                // onEndReachedThreshold={0.0}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getPosts} />}
                />

        
    );
}
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  
    },
    item: {
        marginVertical: 8,
    }
});
  
export default LoadPosts;