import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{opacity:100,marginTop: 22,alignItems: 'center',justifyContent: 'center',height:'90%',width:'100%', backgroundColor:'darkred'}}>
            <View>
              <Text style = {{fontWeight:'bold'}}>WHAT IS YOUR CHOICE?</Text>

              <TouchableHighlight
              style = {{paddingTop:'15%',paddingBottom:'14%'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Correct Answer for Now</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Wrong Answer for Now</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Wrong Answer for Now</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Wrong Answer for Now</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Answer options</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
