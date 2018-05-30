import React, { Component } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View, StyleSheet, TextInput, Image, Button, ScrollView } from 'react-native';

const wait = time => new Promise( s => setTimeout(s, time) )
const answerCorrect = async function() {
  await wait(500);
  alert("You got it!");
  return true;
}

const questions = [
  {
    text: "How fast would we have to be going if we wanted to be able to circle around the truck twice to gather all the zombies around it and then get back to this building?",
    type:"mc",
    triggerIndex: 43,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "If her acceleration is -.25 m/s^2, she’s currently going at 4 m/s, and she’s 20m ahead of the zombies going .5 m/s behind her, will she reach that building 100 m ahead of her?",
    type:"mc",
    triggerIndex: 99,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "If she’s going at .4 m/s, and the zombies are 60 m behind her traveling at .5 m/s, will she make it to the bank 120 m in front of her?",
    type:"mc",
    triggerIndex: 101,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "If we model his acceleration as 2(54x^3 - 63x^2 - 54x + 7)/(3x^2 + 1)^3 , his velocity is 2 m/s, and the zombies are currently 15m behind him going .5 m/s, will he make it to the building 200m ahead of him?",
    type:"mc",
    triggerIndex: 103,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0", correct:true },
      { text:"1" },
      { text:"-1" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "Who should we save?",
    type:"mc",
    triggerIndex: 107,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"The redhead!", correct:true },
      { text:"The brunette!" },
      { text:"The man in the wheelchair!" },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "If we take the distance equation to be d(t) = 1/2x^3 - 3x^2 + 4x +.15 m, what is the mass of the hammer we need to give the zombie a concussion and scare it away?",
    type:"mc",
    triggerIndex: 89,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"0" },
      { text:"100" },
      { text:"Really heavy", correct:true  },
      { text:"I need more info to answer" },
    ]
  },
  {
    text: "Assume that zombies travel at .25m/s on average, and the outbreak started 4 hours before the zombies showed up on campus, how far must the source be?",
    type:"mc",
    triggerIndex: 123,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"3600 meters?", correct:true },
      { text:"4200 meters?" },
      { text:"1500 meters?" },
      { text:"Really far?" },
    ]
  },
  {
    text: "If we model the of the speed of the zombies as 0.25x^4 -5x^3+2x^2+7x , based on the population geography between Boston and campus, and it taking four hours for the zombies to reach campus, where did this outbreak start??",
    answer: 8,
    type:'num',
    triggerIndex:146,
    onCorrect:answerCorrect,
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
      <ScrollView style={styles.modal} contentContainerStyle={styles.container} >

        { text && <Text style = {styles.questionText}>{text}</Text> }
        { image && <Image source={image} style={styles.questionImage} resizeMode="contain"/> }
        { type === "mc" ? this.renderChoices(question, choices) : this.renderInput(question) }



      </ScrollView>
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
          { question && this.renderQuestion(question) }
        </Modal>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    backgroundColor:'skyblue'
  },
  container: {
    alignItems:"center",
  },
  choice: {
    margin:5,
    padding:4,
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
