import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Textbox from './src/Components/Textbox'
import ScriptArray from './src/Components/ScriptArray'
import Modal from './src/Components/Modal'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <Textbox/>
      <Modal/>
      <TextInput/>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
