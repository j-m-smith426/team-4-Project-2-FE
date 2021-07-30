import React, { ChangeEvent, useState,useEffect } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Pressable, GestureResponderEvent } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions, SwitchPageAction } from "../redux/Actions";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { IRootState } from "../redux/State";
import IUser from "../model/User";
import axiosConfig from "../../axiosConfig";


const Login = () =>
{ 
    let navigation = useNavigation();
    //component states
    const [img, setImg] = useState<any>(<View style = {styles.profImg}>
        <Image
          
            source={require('../assets/scouter.png')} 
           
            />
       
            
    </View>);
    const [emailComp, setEmailComp] = useState<any>(<View/>);

    const [signup,setSignup] = useState<any>(                <TouchableOpacity>
        <Text style={styles.linkText} onPress={toSignup}>Sign Up</Text>
    </TouchableOpacity>);
    //Functionality states
    const [username, setUsername]= useState<string>("");
    const [password, setPassword]= useState<string>("");
    const [email, setEmail]= useState<string>("");

    const dispatch = useDispatch();
    const currentUser = useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username
    })
    useEffect(() =>
    {
        let isMounted = true;
        isMounted && checkLogin();
        return() => {isMounted = false}
    }, [navigation]);
    const onUserChange = (name:string) => {
        console.log("Username is: " + username);
        setUsername(name);
        
    }
    const onPassChange = (pass:string) => {
        setPassword(pass);
    }
    const onEmailChange = (email:string) => {
        setEmail(email);
    }

    const addToDb = () =>
    {
        let newUser: IUser = {
            REFERENCE: '0',
            userId: 'U#' + username,
            name: username,
            bio: {
                greeting: '',
                description:''
            },
            image: 'key',
            watchlist: [],
            followed: [],
            favorites: []

        }
        axiosConfig.post('User', newUser);
    }
    //-------------
    const submit = async () => {
        console.log("Username is" + username);
        
        try {
            let cogUser: CognitoUser= await Auth.signIn(username, password);
            
           
           
           if(cogUser){
           dispatch({
               type:LoginActions.LOGIN,
               payload:{
                   name: cogUser.getUsername(),
                  type:  cogUser.getUsername() === 'newUser' ? 'Admin': 'user'
               }
           })
               dispatch({
                   type: SwitchPageAction.UPDATE,
                   payload: {
                    PageName: 'Home',
                    parentID: `U#${cogUser.getUsername()}`
                }
            })
               navigation.navigate('Home');
           }
            
       
       } catch (error) {
           console.log('error signing in', error);
       }  
    }
    async function signUpSubmit() {
        try {
            const { user } = await Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,          
                }
            });
            if (user) {
                addToDb();
                toLogin();
            }
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    //login button state
    const [loginTrue, setLoginTrue] = useState<boolean>(true);


    //Check if someone is logged in
    const checkLogin = async() =>
    {
        if (currentUser !== 'Guest') {
            //Switch page info
            dispatch({
                type: SwitchPageAction.UPDATE,
                payload: {
                 PageName: 'Home',
                 parentID: `U#${currentUser}`
             }
         })
            navigation.navigate('Home');
        }
    }


    return (
        <View style = {styles.container}>
            {img}
            <View style= {styles.main}>
                {emailComp}
                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText ={onUserChange}
                        style={styles.TextInput}
                        autoCompleteType = "username"
                        placeholder="Username"/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText ={onPassChange}
                        textContentType = "password"
                        autoCompleteType = "password"
                        secureTextEntry = {true}
                        style={styles.TextInput}
                        placeholder="Password"/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={loginTrue ? submit : signUpSubmit}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                {signup}
            </View>
            <View style = {styles.filler}/>
        </View>


    );
    async function toSignup(){
        setImg(<View style={styles.filler}/>);
        setEmailComp(<View style={styles.inputView}>
            <TextInput
                onChangeText ={onEmailChange}
                style={styles.TextInput}
                autoCompleteType = "email"
                placeholder="Email"/>
        </View>);
        setSignup(<TouchableOpacity>
            <Text style={styles.linkText} onPress={toLogin}>Log in</Text>
        </TouchableOpacity>);
        setLoginTrue(false);
    } 
    async function toLogin(){
        setImg(<View style = {styles.profImg}>
            <Image
                style={styles.image}
                source={require('../assets/icon.png')} />
        </View>);
        setEmailComp(<View/>);
        setSignup(                <TouchableOpacity >
            <Text style={styles.linkText} onPress={toSignup}>Sign Up</Text>
        </TouchableOpacity>);
        setLoginTrue(true);
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
    },
    logo:{
        alignSelf:'auto',
      
        
    }


});
export default Login;