import React from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
import buttons from '../../config/buttons';
import colors from '../../config/colors'
const Button_animeComments = () => {
    
    
    
    return (
        <View style={styles.button}>
           <Button
            
            onPress={() => Alert.alert('Eventually you will see the comments.')}
            title="Comments"
            color={buttons.backColor}
            accessibilityLabel="Press to look at this anime's comments"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:colors.buttonPrimary,
        borderRadius:buttons.radius,
        margin:buttons.marg,
        padding:buttons.padd,
        fontSize:buttons.fSize,
       
      
    }
});

export default Button_animeComments;

