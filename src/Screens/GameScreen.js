import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Textbox from '../Components/Textbox';
import TextInput from '../Components/TextInput';
import ScriptArray from '../Components/ScriptArray';
import Modal from '../Components/Modal';
import Background from '../Components/Background';
import Characters from '../Components/Characters';

export default class GameScreen extends React.Component {

  constructor(){
    super();
    this.state = { sentences : 0 };
  }

  handlescript() {
    this.setState({sentences: this.state.sentences + 1})
  }

  render() {
    return (
      <Background index = {this.state.sentences}>
        <Characters index = {this.state.sentences}/>
        <Textbox index = {this.state.sentences}  handle= {this.handlescript.bind(this)}/>
        <Modal index = {this.state.sentences}/>
      </Background>
    );
  }
}
