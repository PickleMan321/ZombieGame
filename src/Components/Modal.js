import React, { Component } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View, StyleSheet, TextInput, Image, Button, ScrollView } from 'react-native';

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
  },
  {
    text: "What is the following derivative evaluated at x=3?",
    image: require("../../assets/question3.png"),
    answer: 8,
    type:'num',
    triggerIndex:2,
    onCorrect() {
      alert("You got it!");
      return true;
    },
    onWrong:()=>alert("Nope. Try again!"),
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
    this.renderInput = this.renderInput.bind(this);
    this.renderChoices = this.renderChoices.bind(this);
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible, questionInput:""})
  }

  static getDerivedStateFromProps(props){

    const question = questions.find(q=>q.triggerIndex===props.index)
    if(!question) return null;

    return {
      modalVisible:true,
      question,
    }

  }
  renderChoices(question, choices) {
    return choices.map( (choice, k) => (
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

  renderInput({answer, onWrong, onCorrect}) {
    const { questionInput } = this.state;

    const checkAnswer = () => {
      if(!questionInput) return onWrong();
      if(Math.round(questionInput, 2) === Math.round(answer, 2)){ onCorrect(); this.setModalVisible()}
      else return onWrong();
    }

    return(
      <View>
        <TextInput
        value={this.state.questionInput}
        style={styles.questionInput}
        onChangeText = {t => this.setState({questionInput:t}) }
        onSubmitText = { checkAnswer }/>
        <Button title = "Submit Answer" onPress={ checkAnswer } />
      </View>
    )
  }

  renderQuestion(question) {

    const { choices, type, image, text } = question;

    return(
      <View style={styles.content} >
        { text && <Text style = {styles.questionText}>{text}</Text> }
        { image && <Image source={image} style={styles.questionImage} resizeMode="contain"/> }
        { type === "mc" ? this.renderChoices(question, choices) : this.renderInput(question) }
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
          onRequestClose={() => alert("Answer the question before leaving.")}>
          <ScrollView contentContainerStyle={styles.container}>
          { question && this.renderQuestion(question) }
          </ScrollView>
        </Modal>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'skyblue'
  },
  content:{
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  choice: {
    padding:4,
    margin:5,
    borderWidth:1,
    borderColor:'gray',
    width:"100%",
    backgroundColor:'skyblue'
  },
  questionText: {
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
  },
  choiceText: {
    fontSize:15,
    textAlign:'center',
  },
  questionImage: {
    height:70,
    width:"100%"
  },
  questionInput: {
    borderWidth:1,
    borderColor:'#0d0d0d',
    margin:5,
  }
})
