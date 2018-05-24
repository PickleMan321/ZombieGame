import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
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

  static getDerivedStateFromProps({ navigation:{ getParam } }) {
    if(getParam("position")) return { sentences: getParam("position") };
    return null;
  }

  handleScript() {
    this.setState({sentences: this.state.sentences + 1})
  }

  handleSave() {

  }

  handleExit() {
    this.props.navigation.dispatch(StackActions.reset({ 
      index:0,
      actions:[ NavigationActions.navigate({ routeName:"MainMenu" })],
    }));
  }

  handleLoad() {
    this.props.navigation.navigate("LoadMenu");
  }

  render() {
    return (
      <Background index = {this.state.sentences}>
        <Characters index = {this.state.sentences}/>
        <Textbox index={this.state.sentences} 
        handle={this.handleScript.bind(this)}
        saveGame={this.handleSave.bind(this)}
        exitGame={this.handleExit.bind(this)}
        loadGame={this.handleLoad.bind(this)}/>
        <Modal index = {this.state.sentences}/>
      </Background>
    );
  }
}
