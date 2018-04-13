import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Textbox from './src/Components/Textbox'
import ScriptArray from './src/Components/ScriptArray'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Textbox/>

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
