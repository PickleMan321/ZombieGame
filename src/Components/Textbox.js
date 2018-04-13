import React from 'react'
import {StyleSheet, View, Text,} from 'react-native';
import ScriptArray from './ScriptArray'


export default class App extends React.Component {

render(){
return(

<View style= {styles.container} >

<ScriptArray/>

</View>


)}




}

const styles = StyleSheet.create({
container: {
height:"40%",
paddingTop:20,
paddingLeft:15,
borderWidth: 3,
width:"100%",
backgroundColor:'firebrick'


}
})
