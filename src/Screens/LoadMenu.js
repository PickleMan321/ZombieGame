import React, { Component } from 'react';
import { FlatList, Image, TouchableHighlight, StyleSheet, View, Text } from 'react-native';

const dummySaves = [
    { position: 5, date: new Date},
    { position: 9, date: new Date},
]

export default class LoadMenu extends Component {

  render(){

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          resizeMode='cover'
          source={require('../../assets/fire.jpg')}
        />
        <FlatList 
          data = { dummySaves }
          renderItem = {({item:{position, date}, index}) => (
            <TouchableHighlight 
            style={styles.button}
            onPress={() => navigate("GameScreen", { position })}>
              <Text >{date.toLocaleDateString()} {date.toLocaleTimeString()}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, key) => ""+key}/>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    alignItems:'center',
    flex:1,
  },
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
    padding:10,
    width:300,
    height:50,
    backgroundColor:'white',
  },
})
