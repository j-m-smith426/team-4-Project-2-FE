import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import colors from "../config/colors";

const Login = () => {
    return (
        <View style= {styles.main}>
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
        </View>

    );
}
const styles = StyleSheet.create({
    inputView: {
        backgroundColor: colors.background,
        borderRadius: 30,
        width: "90%",
        height: 60,
        marginBottom: 20,
        alignItems: "center",
      },
      
    TextInput: {
        height: '90%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width:'90%',
        borderRadius: 30,
    },
    main: {
        backgroundColor: colors.tertiary,
        alignItems: "center",
        paddingTop:20,
        //justifyContent: "center",
        borderRadius: 30,
        borderWidth: 1,
        width: '80%',
        maxWidth:500,
        height: '30%'
    },
    text: {
        //flex: 1,
        flexDirection: 'row',
       // backgroundColor: 'yellow',
        alignSelf: 'center',
        marginTop: 10,
        height: 70,
        justifyContent: 'center',
        position: 'relative',
    }


});
export default Login;