import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/core";

const Login = () =>
{
    let navigation = useNavigation();
    const [img, setImg] = useState<any>(<View style = {styles.profImg}>
        <Image
            style={styles.image}
            source={require('../assets/icon.png')} />
            
    </View>);
    const [email, setEmail] = useState<any>(<View/>);

    const [signup,setSignup] = useState<any>(                <TouchableOpacity>
        <Text style={styles.linkText} onPress={toSignup}>Sign Up</Text>
    </TouchableOpacity>);
    const [btnText,setBtnText] = useState<string>("LOGIN");
    const [mainSize,setMainSize] = useState(styles.main);
    return (
        <View style = {styles.container}>
            {img}
            <View style= {mainSize}>
                {email}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username"/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() =>navigation.navigate('Main') }>
                    <Text style={styles.text}>{btnText}</Text>

                </TouchableOpacity>
                {signup}
            </View>
            <View style = {styles.filler}/>
        </View>


    );
    async function toSignup(){
        setImg(<View style={styles.filler}/>);
        setEmail(<View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"/>
        </View>);
        setSignup(<TouchableOpacity>
            <Text style={styles.linkText} onPress={toLogin}>Log in</Text>
        </TouchableOpacity>);
        setBtnText("SIGN UP");
    } 
    async function toLogin(){
        setImg(<View style = {styles.profImg}>
            <Image
                style={styles.image}
                source={require('../assets/icon.png')} />
        </View>);
        setEmail(<View/>);
        setSignup(                <TouchableOpacity >
            <Text style={styles.linkText} onPress={toSignup}>Sign Up</Text>
        </TouchableOpacity>);
        setBtnText("LOGIN");
        setMainSize(styles.main);
    } 
}
  
const styles = StyleSheet.create({
    profImg: {
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        maxWidth:500,
        height: '50%'
        
    },
    filler:{
        flex:1
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 50,
        
    },
    loginBtn:
    {
        width:"90%",
        borderRadius:1000,
        height:"20%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.buttonPrimary,
        marginBottom: "2%"
    },

    linkText: {
        height: "20%",
        marginBottom: "42%",
        alignItems: "center",
      },

    container: {
        backgroundColor: colors.background,
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    inputView: {
        backgroundColor: colors.background,
        borderRadius: 1000,
        width: "90%",
        //flex:2,
        height:"20%",
        marginBottom: "2%",
        alignItems: "center",
        
      },
      
    TextInput: {
        height: '90%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width:'90%',
        borderRadius: 30,
        //outlineWidth: 0
    },
    main: {
        flexDirection:"column",
        backgroundColor: colors.tertiary,
        alignItems: "center",
        paddingTop:20,
        //justifyContent: "center",
        borderRadius: 30,
        borderWidth: 1,
        width: '80%',
        maxWidth:500,
        flex:1,
        minHeight:300,
        justifyContent:"space-between"
        
    },
    text: {
        //flex: 1,
        flexDirection: 'row',
       // backgroundColor: 'yellow',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
    }


});
export default Login;