import React from 'react'
import {View, Text} from 'react-native';
import sentences from '../../assets/script';

const script = sentences.split('\n').filter( line => line!=="").map( line => {

  if(line.indexOf(": ") < 0) return { message: line }


  const explodedLine = line.split(": ")

  return {
    speaker: explodedLine[0],
    message: explodedLine[1],
  }

})







export default class extends React.Component {

render(){
if(this.props.index >= script.length){
 return <Text>
 You is done :)
 </Text>
}

  return(
    <View>
      <Text>
         {script[this.props.index].speaker}
      </Text>
      <Text>
        {script[this.props.index].message}
      </Text>
    </View>
  )}

}
