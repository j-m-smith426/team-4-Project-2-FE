import React from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
import colors from '../../config/colors'
const Button_animeComments = () => {
    
    
    
    return (
        <View style={styles.comments}>
           <Button
            
            onPress={() => Alert.alert('Eventually you will see the comments.')}
            title="Comments"
            color='#f85B1A'
            accessibilityLabel="Press to look at this anime's comments"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    comments: {
       backgroundColor:colors.primary, 
       borderRadius:25,
        margin:5,
        padding:10,
        
      
    }
});

export default Button_animeComments;

