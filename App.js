import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
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
      <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
        }}
        resizeMode='stretch'
        source={require('./assets/schoolHallwayAnime.jpg')}
      >
        <Textbox index = {this.state.sentences} handle= {this.handlescript.bind(this)}/>
        <Modal index = {this.state.sentences}/>

      </ImageBackground>
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
