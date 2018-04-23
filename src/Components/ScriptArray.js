import React from 'react'
import {View, Text} from 'react-native';

const sentences = [
  "Hey!",
  "This is all we have for now",
   "But don't worry",
  "More is to come!",
  "For now, here's a question!",
  "Hope you enjoyed!"

]


export default class extends React.Component {

render(){

  return(
    <View>
      <Text>
        {sentences[this.props.index]}
      </Text>
    </View>
  )}

}
