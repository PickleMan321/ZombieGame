import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Textbox from './src/Components/Textbox';
import TextInput from './src/Components/TextInput';
import ScriptArray from './src/Components/ScriptArray';
import Modal from './src/Components/Modal';


export default class App extends React.Component {

  constructor(){
    super();
    this.state = { sentences : 0};

  }

  handlescript() {
    this.setState({sentences: this.state.sentences + 1})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Textbox index = {this.state.sentences} handle= {this.handlescript.bind(this)}/>
        <Modal index = {this.state.sentences}/>
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
