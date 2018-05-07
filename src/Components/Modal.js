import React, {Component} from 'react';
import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';

export default class ModalExample extends Component {

  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible})
  }

  static getDerivedStateFromProps(props){
    if(props.index === 5) return { modalVisible:true };
    return null;
  }

  render() {
    return (
      <View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
            alert('Modal has been closed.');
          }}>
          <View style={{opacity:100,marginTop: 22,alignItems: 'center',justifyContent: 'center',height:'100%',width:'100%', backgroundColor:'skyblue'}}>
            <View>
              <Text style = {{fontWeight:'bold'}}>What is 2 + 2?</Text>

              <TouchableHighlight
              style = {{paddingTop:'15%',paddingBottom:'14%'}}
                onPress={() => {
                  Alert.alert("Right answer","You can count!");
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>4</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("You're funny");
              }}>
                <Text>Fish?</Text>

              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("I think so?");
              }}>
                <Text>Is that evne possible to answer?</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("C'mon, it's not that hard");
              }}>
                <Text>I give up</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


      </View>
    );
  }
}
