import React, { Component } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const questions = [
  {
    text: "What is the derivative of a constant?",
    type:"mc",
    triggerIndex: 38,
    onCorrect() {
      alert("You got it!");
      return true;
    },
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "What is the limit of 1/x as it goes to infinity?",
    type:"mc",
    triggerIndex: 63,
    onCorrect() {
      alert("You got it!");
      return true;
    },
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "How heavy is this?",
    type:"mc",
    triggerIndex: 79,
    onCorrect() {
      alert("You got it!");
      return true;
    },
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0" },
      { text:"100" },
      { text:"Really heavy", correct:true  },
      { text:"I need more info to answer" },
    ]
  }
]

export default class ModalExample extends Component {

  constructor() {
    super();
    this.state = {
      question:null,
      modalVisible: false,
    };
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible})
  }

  static getDerivedStateFromProps(props){

    const question = questions.find(q=>q.triggerIndex===props.index)
    if(!question) return null;

    return {
      modalVisible:true,
      question,
    }

  }

  renderQuestion(question) {

    const { choices } = question;

    return(
      <View style={styles.container}>
        <Text style = {styles.questionText}>{question.text}</Text>
        {
          choices.map( (choice, k) => (
            <TouchableHighlight
            key = { k }
            style = {{ width:"100%" }}
            onPress={() => {
              if(!choice.correct) question.onWrong();
              else {
                question.onCorrect();
                this.setModalVisible();
              }
            }}>
              <View style = { styles.choice }>
                <Text style={styles.choiceText}>{ choice.text }</Text>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    )
  }

  render() {

    const { question } = this.state;

    return (
      <View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          { question && this.renderQuestion(question) }
        </Modal>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    opacity:100,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1,
    backgroundColor:'skyblue'
  },
  choice: {
    padding:10,
    borderWidth:1,
    borderColor:'gray',
    width:"100%",
    backgroundColor:'skyblue'
  },
  questionText: {
    fontWeight:'bold',
    fontSize:35,
    textAlign:'center',
  },
  choiceText: {
    fontSize:20,
    textAlign:'center',
  }
})
