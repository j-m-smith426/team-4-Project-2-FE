import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import colors from '../config/colors'
import StarBorderOutlineIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
const Rating = () =>{
    const[defaultRating, setDefaultRating]=useState(2);
    const[maxRating, setMaxRating]=useState([1,2,3,4,5]);

    const filledStar='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const emptyStar='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
    const CustomRatingBar =() =>{
        return(
            <View style={styles.customBar}>
                {
                    maxRating.map((item,key)=>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=> setDefaultRating(item)}
                            >
                                <Image
                                style={styles.star}
                                source={
                                    item <= defaultRating
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
                {defaultRating + ' / ' + maxRating.length}
            </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => alert(defaultRating)}     
            >
                <Text>Rate</Text>
            </TouchableOpacity>
        </View>
    )


}
const styles=StyleSheet.create ({
    container:{
        flex:.1,
        padding:10,
        justifyContent:'center',
        margin:25
    },

    star:{
        width:40,
        height:40,
        resizeMode:'cover',
        
    },
    text:{
        textAlign:'center',
        fontSize:14,
        marginTop:5,
    },
    customBar:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10,
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