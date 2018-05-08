import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Textbox from './src/Components/Textbox';
import TextInput from './src/Components/TextInput';
import ScriptArray from './src/Components/ScriptArray';
import Modal from './src/Components/Modal';
import Background from './src/Components/Background';


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
  <Background index = {this.state.sentences}>
   <Textbox index = {this.state.sentences}  handle= {this.handlescript.bind(this)}/>
      <Modal index = {this.state.sentences}/>
      </Background>
    );
  }
}
