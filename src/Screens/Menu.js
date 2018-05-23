import React, { Component } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

export default class Menu extends Component {
  render(){

    const { navigate } = this.props.navigation;

    return(
      <View>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../../assets/fire.jpg')}
        />
        <Button
          onPress={ ()=>navigate("GameScreen") }
          style={styles.button}
          title="Start"
          color="#841584"
        />
        <Button
          onPress={ ()=>navigate("LoadMenu") }
          style={styles.button}
          title="Load"
          color="#841584"
        />
      </View>
    )
  }
}

const styles= StyleSheet.create({
  image:{
    backgroundColor: '#700d0d',
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:-1,
  },
  button:{
    backgroundColor: '#24662d',
    borderWidth:1
  },
})
