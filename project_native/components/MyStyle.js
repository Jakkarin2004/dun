import React from "react";
import { StyleSheet,Text,View } from "react-native-web";

const MyStyle = () =>{
    return(
        <View style={stlyles.container}>
            <Text style={stlyles.red}>just red</Text>
            <Text style={stlyles.blue}>just blue</Text>
            <Text style={[stlyles.blue,stlyles.red]}>blue then red</Text>
            <Text style={[stlyles.red,stlyles.blue]}>red then blue</Text>
        </View>
    );
}

const stlyles = StyleSheet.create({
    container:{
        maginTop:50,
    },
    blue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }
});

export default MyStyle;