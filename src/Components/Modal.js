import React, {Component} from 'react';
import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';

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
              <Text style = {{fontWeight:'bold'}}>What is 2 + 2?</Text>

              <TouchableHighlight
              style = {{paddingTop:'15%',paddingBottom:'14%'}}
                onPress={() => {
                  Alert.alert("Right answer","THATS RIGHT NOOB");
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>4</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("Wrong answer",'This is the wrong answer');
              }}>
                <Text>Fish?</Text>

              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("Wrong answer",'This is the wrong answer');
              }}>
                <Text>Is that evne possible to answer?</Text>
              </TouchableHighlight>
              <TouchableHighlight
              style = {{paddingBottom:'14%'}}
              onPress={() => {
                Alert.alert("Wrong answer",'This is the wrong answer');
              }}>
                <Text>I give up</Text>
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
