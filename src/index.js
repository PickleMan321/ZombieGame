import React from 'react';
import { View } from 'react-native';
import Router from './config/router';

export default class Root extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router />
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
