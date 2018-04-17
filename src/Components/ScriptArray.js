import React from 'react'
import {View, Text} from 'react-native';

const sentences = [
  "Hey!",
  "I don't meant to alarm you",
   "But uh...",
  "There's someone behind you!",
  "Just kidding!",
  "N0Tic3 M3 S3MPai",
  "N0Tic3 M3 S3MPai!!",
  "N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai",
  "N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai N0Tic3 M3 S3MPai N0Tic3 M3 S3MPaiN0Tic3 M3 S3MPai N0Tic3 M3 S3MPai"
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
