import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export default class ModalExample extends Component {

  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible(visible = true) {
    this.setState({modalVisible: visible})
  }

  static getDerivedStateFromProps(props){
    if(props.index === 5) return { modalVisible:true };
    return null;
  }

  render() {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
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
    );
  }
}
