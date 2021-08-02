import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions, SwitchPageAction } from "../redux/Actions";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { IRootState } from "../redux/State";
import axiosConfig from "../../axiosConfig";
import { AuthError } from "@aws-amplify/auth/lib-esm/Errors";
import { Icon } from "react-native-elements/dist/icons/Icon";


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
    </TouchableOpacity>
    );
    //Functionality states
    const [username, setUsername]= useState<string>("");
    const [password, setPassword]= useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState('');

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
        
        setUsername(name);
        
    }
    const onPassChange = (pass:string) => {
        setPassword(pass);
    }
    const onEmailChange = (emailvalue:string) => {
        setEmail(emailvalue);
    }

    const addToDb = async() =>
    {
        let newUser = {
            REFERENCE: '0',
            userID: 'U#' + username.toLowerCase(),
            name: username.toLowerCase(),
            bio: {
                greeting: '',
                description:''
            },
            image: 'newUser/1627507631221.jpg',
            watchlist: [],
            followed: [],
            favorites: []

        }
        await axiosConfig.post('User', newUser);
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
                   name: cogUser.getUsername().toLowerCase(),
                   type: (cogUser.getUsername().toLowerCase() === ('newuser' || 'animefanatic')) ? 'Admin': 'user'
               }
           })
               dispatch({
                   type: SwitchPageAction.UPDATE,
                   payload: {
                    PageName: 'Home',
                    parentID: `U#${cogUser.getUsername().toLowerCase()}`
                }
            })
               navigation.navigate('Home');
           }
            
       
       } catch (err) {
            console.log('error signing in', err);
            let authErr:AuthError = err
            setError(authErr.message);
            
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
                setError('Please check your e-mail for confirmation');
            }
            
        } catch (err) {
            console.log('error signing up:', err);
            let authErr:AuthError = err
            setError(authErr.message);
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
    const SignUpValidation = () =>
    {
        let passwordLength = (password.length >= 8);
        let passwordCapital = password.match('[A-Z]');
        let passwordLowerCase = password.match('[a-z]');
        let passwordSpecial = password.match('[^A-Za-z0-9]')
        
            return (
                <View>
                    <View style={styles.textinfo}>

                    {passwordLength &&<Icon name='check'></Icon>}
                    <Text>Password must be 8 characters long</Text>
                    </View>
                    <View style={styles.textinfo}>

                    {passwordCapital &&<Icon name='check'></Icon>}
                    <Text>Password must contain an uppercase letter</Text>
                    </View>
                    <View style={styles.textinfo}>

                    {passwordLowerCase && <Icon name='check'></Icon>}
                    <Text>Password must contain a lowercase letter</Text>
                    </View>
                    <View style={styles.textinfo}>

                    {passwordSpecial &&<Icon name='check'></Icon>}
                    <Text>Password must contain a special character</Text>
                    </View>
                </View>
            )
        
    }


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {styles.container}>
            {img}
                    <Text>{error||''}</Text>
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
                        <Text style={styles.text}>{loginTrue ? 'LOGIN' : 'SIGNUP'}</Text>
                    </TouchableOpacity>
                    
                    {signup}
                    
            </View>
                    <View style={styles.container}>
                        {!loginTrue &&<SignUpValidation/>}
                    </View>
                <View style={styles.filler} />
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

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
        setSignup(
        <TouchableOpacity>
            <Text style={styles.linkText} onPress={toLogin}>LOGIN</Text>
        </TouchableOpacity>);
        setLoginTrue(false);
    } 
    async function toLogin(){
        setImg(<View style = {styles.profImg}>
            <Image
                style={styles.image}
                source={require('../assets/scouter.png')} />
        </View>);
        setEmailComp(<View/>);
        setSignup(                
        <TouchableOpacity >
            <Text style={styles.linkText} onPress={toSignup}>SIGNUP</Text>
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
        flex: 1,
        //justifyContent:'flex-start'
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
        height: "30%",
        //marginBottom: "42%",
        // alignItems: "center",
        
      },

    container: {
        backgroundColor: colors.background,
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        paddingVertical: "9%",
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
      
        
    },
    textinfo: {
        flexDirection: 'row',
        alignItems: 'center'
    }


});
export default Login;