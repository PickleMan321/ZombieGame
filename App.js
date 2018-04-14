import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Modal from './Components/Modal'
import TextInput from './Components/TextInput'
=======
import Textbox from './src/Components/Textbox'
import ScriptArray from './src/Components/ScriptArray'
import Modal from './src/Components/Modal'
>>>>>>> 8b3a15bc0b127320566c27aaec651257f1577061

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <Textbox/>
      <Modal/>
<<<<<<< HEAD
      <TextInput/>
        <Text>Open up App.js to start working on your app!</Text>
=======

>>>>>>> 8b3a15bc0b127320566c27aaec651257f1577061
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
