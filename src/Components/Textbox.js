import React from 'react'
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';
import ScriptArray from './ScriptArray'
import OptionButton from './OptionButton';


export default class TextBox extends React.Component {

  render() {

    const { exitGame, loadGame, saveGame } = this.props;

    return (
      <View style = {styles.container}>
        <TouchableHighlight
        onPress = {this.props.handle}
        style={styles.textBoxButton}>
          <View style= {styles.textContainer} >
            <ScriptArray index = {this.props.index}/>
          </View>
        </TouchableHighlight>
        <View style={styles.optionsBar}>
          <OptionButton onPress = {_=>saveGame()} title="Save" />
          <OptionButton onPress = {_=>loadGame()} title="Load" />
          <OptionButton onPress = {_=>exitGame()} title="Exit" />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: "40%", 
    width: "100%"
  }, 
  textBoxButton:{
    flex:1,
  },
  textContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft:5,
    paddingRight: 5,
    borderWidth: 3,
    backgroundColor:'skyblue'
  },
  optionsBar: {
    flexDirection:"row", 
    height:30,
    backgroundColor:"rgba(0,0,0,.5)", 
    justifyContent:'flex-end',
    alignItems:'center',
  }
})
