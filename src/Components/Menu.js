import React from 'react'
import {Button, ImageBackground, StyleSheet} from 'react-native';



export defualt class extends React.Component {
render(){
  return(
    <View>
    <ImageBackground
      style={styles.image}
      resizeMode='cover'
      source={require('../../assets/fire.jpg')}
    />
  <Button
    onPress={startButton}
    style={styles.button}
    title="Start"
    color="#841584"
  />

  <Button
    onPress={loadButton}
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
    button:{
      backgroundColor: '#24662d'
      borderWidth: '1'
    }
    backgroundColor: '#700d0d',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
})
