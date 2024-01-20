import React from "react";
import { View,StyleSheet,Text } from "react-native";

const MyFlexProp = ()=>{
    return(
        <View style={styles.container}>
            <View style={[styles.box,{backgroundColor:'red'}]}/>
            <View style={[styles.box,{backgroundColor:'green'}]}/>
            <View style={[styles.box,{backgroundColor:'blue'}]}/>
            <View style={[styles.box,{backgroundColor:'red'}]}/>
            <View style={[styles.box,{backgroundColor:'green'}]}/>
            <View style={[styles.box,{backgroundColor:'blue'}]}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        maxHeight:550,
        backgroundColor:'powderblue',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap'
    },
    box:{
        width:100,
        height:100
    }
})
export default MyFlexProp