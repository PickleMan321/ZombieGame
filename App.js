import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import App from './src';

export default class Root extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
