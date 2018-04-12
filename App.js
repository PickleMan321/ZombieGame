import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from './Components/Modal'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Modal/>
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
    justifyContent: 'center',
  },
});
