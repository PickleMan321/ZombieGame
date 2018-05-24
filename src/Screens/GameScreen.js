import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { STORE_NAME, SAVE_GAME_KEY } from '../config/constants';
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
    if(getParam("position")) {
      return { sentences: getParam("position") };
    }
    return null;
  }

  handleScript() { 
    // FIXME: triggers don't respond to nonzero initial script indcies when the game loads. 
    // revise the comparison operators to account for this.  
    this.setState({sentences: this.state.sentences + 1})
  }

  async handleSave() {
    try {
      let saves = [{date:new Date, position:this.state.sentences}];
      const oldSaves = await AsyncStorage.getItem(STORE_NAME+":"+SAVE_GAME_KEY);
      if(oldSaves) {
        saves = saves.concat(JSON.parse(oldSaves));
      }
      await AsyncStorage.setItem(STORE_NAME+":"+SAVE_GAME_KEY, JSON.stringify(saves))
    } catch(e) {
      alert("Storage Error: " + e.message);
    }
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
