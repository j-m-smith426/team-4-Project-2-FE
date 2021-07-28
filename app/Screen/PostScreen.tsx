import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import Post from '../Components/Post/Post';
import IPost from '../model/Post';
import AddPost from '../Components/Post/addPost';
import ScreenWrapper from './ScreenWrapper';
import axios from '../../axiosConfig'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Auth } from 'aws-amplify';




// const postArr: IPost[] = [
//     {
//         username:'user1', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
//     },
//     {
//        username:'user2', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'002',
//     },
//     {
//        username:'user3', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'003',
//     }
// ]


const PostScreen = () =>
{
    const [refreshing, setRefreshing] = useState(false);
    const [postArr,setPostArr] = useState<IPost[]>()
    const currentPage = "A#DragonBall";
    useEffect(() =>
    {
        getPosts();
    }, [])
    const getPosts = useCallback(async () =>
    {
        console.log('Name:',Auth.currentAuthenticatedUser());
        setRefreshing(true);
        let newArray: IPost[] = [];
        let [pageType, page] = currentPage.split('#');
        axios.get<any[]>(`Post/Page/${pageType}_${page}`, {
            
        }).then(response =>
        {
            
           //console.log('Response:',response.data);
            //construct each post
            response.data.forEach((data) =>
            {
                let post: IPost = {
                    username: '',
                    userProfilePic: '',
                    image: '',
                    Contents: '',
                    timestamp: 0,
                    postID: ''
    
                    
                };
                let name: string = data.REFERENCE.split('#')[0]
                // axios.get<any>(`User/${name}`, {
                // }).then(userResponse =>
                // {
                //     let userData = userResponse.data
                post.userProfilePic = 'l';//userData.image
                // })
                post.username = name;
                post.postID = data.REFERENCE;
                post.Contents = data.content;
                post.timestamp = data.Stamp;
                post.image = data.image;
               
                    newArray.push(post);
            });
            setPostArr(newArray);
            
        });
       
        
        setRefreshing(false);
    }, [refreshing]);
    //console.log('Result',postArr);
    return (
        <ScreenWrapper>
            <AddPost username="user1" userProfilePic="pic"/>
            <FlatList
                //viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
                data={postArr}
                renderItem={
                    ({ item }) => (
                        <View style={styles.item}>
                            <Post username={item.username} userProfilePic={item.userProfilePic} Contents={item.Contents} image={item.image} timestamp={item.timestamp} postID={item.postID} />
                        </View>
                    )}
                keyExtractor={item => item.postID}
                // onEndReachedThreshold={0.0}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getPosts} />}
                />

        </ScreenWrapper>
        
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

export default PostScreen;