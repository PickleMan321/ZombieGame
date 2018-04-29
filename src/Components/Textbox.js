import React from 'react'
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';
import ScriptArray from './ScriptArray'


export default class App extends React.Component {

render(){
return(

    <TouchableHighlight
    style = {{height: "40%", width: "100%"}}
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
justifyContent: 'flex-start',
paddingLeft:5,
paddingRight: 5,
borderWidth: 3,
backgroundColor:'skyblue'

  }
})
