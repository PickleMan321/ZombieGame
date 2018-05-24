import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';
import Textbox from '../Components/Textbox';
import TextInput from '../Components/TextInput';
import ScriptArray from '../Components/ScriptArray';
import Modal from '../Components/Modal';
import Background from '../Components/Background';
import Characters from '../Components/Characters';

export default class GameScreen extends React.Component {

  constructor(props){
    super(props);
    const { getParam } = props.navigation;
    this.state = { sentences : getParam("position", 0) };
  }

  handleScript() {
    this.setState({sentences: this.state.sentences + 1})
  }

  handleSave() {

  }

  handleExit() {

  }

  handleLoad() {

  }

  render() {
    return (
      <Background index = {this.state.sentences}>
        <Characters index = {this.state.sentences}/>
        <Textbox index={this.state.sentences} 
        handle={this.handleScript.bind(this)}
        saveGame={this.handleSave.bind(this)}
        exitGame={this.handleExit}
        loadGame={this.handleLoad}/>
        <Modal index = {this.state.sentences}/>
      </Background>
    );
  }
}
