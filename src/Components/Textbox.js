import React from 'react'
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';
import ScriptArray from './ScriptArray'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = { sentences : 0};

  }

render(){
return(

    <TouchableHighlight
    style = {{height: "40%", width: "100%"}}
      onPress={() => this.setState ({
        sentences: this.state.sentences + 1

  })
}>

<View style= {styles.container} >

<ScriptArray index = {this.state.sentences}/>

</View>

</TouchableHighlight>

  )}
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop:20,
paddingLeft:15,
paddingRight: 15,
borderWidth: 3,
backgroundColor:'firebrick'

  }
})
