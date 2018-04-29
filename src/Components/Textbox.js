import React from 'react'
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';
import ScriptArray from './ScriptArray'


export default class App extends React.Component {

render(){
return(

    <TouchableHighlight
    style = {{height: "30%", width: "100%"}}
    onPress = {this.props.handle}
>

<View style= {styles.container} >

<ScriptArray index = {this.props.index}/>

</View>

</TouchableHighlight>

  )}
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems:'center',
paddingTop:20,
paddingLeft:15,
paddingRight: 15,
borderWidth: 3,
backgroundColor:'skyblue'

  }
})
