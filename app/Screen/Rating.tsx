import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import colors from '../config/colors'
import StarBorderOutlineIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import axios from '../../axiosConfig'
import IAnime from '../model/Anime';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/State';



interface RatingProps{
    page: String
}
const Rating = (props: RatingProps) =>{
    const[rating, setRating]=useState(0);
    const[userRating,setUserRating] = useState(2);
    const[maxRating, setMaxRating]=useState([1,2,3,4,5]);
    
    const filledStar='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const emptyStar='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
    const [currPage,setCurrPage]= useState<String>(props.page);
    const currentUser = useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    });
    const user = "U_" + currentUser;
    

    useEffect(() =>
    {animeAvg()},[])
    const animeAvg = async () =>{
        axios.get('/Rating/'+ currPage.replace('#','_'))
        .then(response =>{
            console.log(`Average = ${response.data}`)
            if(response.data){
                setRating(Math.round(response.data* 100) / 100 );
            } else {
                setRating(0);
            }
        });
    };
    const rateAnime = async() => {
        console.log(`page = ${currPage}, User = R#${currentUser} rating = ${userRating}`)
        await axios.put('Ratings', {
            parentID: currPage,
            postID: `R#${currentUser}`,
            rating: userRating
        })
        animeAvg();
        
    }
    
    
    const CustomRatingBar =() =>{
        return(
            <View style={styles.customBar}>
                {
                    maxRating.map((item,key)=>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=> setUserRating(item)}
                            >
                                <Image
                                style={styles.star}
                                source={
                                    item <= userRating
                                    ? {uri:filledStar}
                                    : {uri:emptyStar}
                                }
                                
                                />
                            </TouchableOpacity>

                        )
                    })
                }
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Rate This Anime</Text>
            <CustomRatingBar/>
            <Text style={styles.text}>
                {rating + ' / ' + maxRating.length}
            </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={rateAnime}
            >
                <Text>Rate</Text>
            </TouchableOpacity>
        </View>
    )


}
const styles=StyleSheet.create ({
    container:{
        //flex: 1,
        //flexDirection:'row',
        padding:10,
        justifyContent:'center',
        margin: '3%'
    },

    star:{
        width:20,
        height:20,
        resizeMode:'cover',
        
    },
    text:{
        textAlign:'center',
        fontSize:14,
        //marginTop:5,
    },
    customBar:{
        justifyContent:'center',
        flexDirection:'row',
        //marginTop:10,
        backgroundColor:colors.background,
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
        
        padding:5,
        backgroundColor:"green",
        

    }

})

export default Rating;