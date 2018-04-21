import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Textbox from './Components/Textbox';
import TextInput from './Components/TextInput';
import ScriptArray from './Components/ScriptArray';
import Modal from './Components/Modal';


export default class Root extends React.Component {

  constructor(){
    super();
    this.state = { sentences : 0 };
  }

  handlescript() {
    this.setState({sentences: this.state.sentences + 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <Textbox index = {this.state.sentences} handle = {this.handlescript.bind(this)}/>
        <Modal index = {this.state.sentences}/>
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
    marginTop: StatusBar.currentHeight,
  },
});
