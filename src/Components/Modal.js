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
    text: "Would we be able to circle around the truck twice to gather all the zombies around it and get back to this building?",
    type:"mc",
    triggerIndex: 45,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"Yes", correct:true },
      { text:"No" },
    ]
  },
  {
    text: "Which is the fastest route?",
    image: require('../../assets/zombiemap.png'),
    type:'mc',
    triggerIndex:70,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"A" },
      { text:"B", correct: true },
      { text:"C" },
      { text:"D" },
    ]
  },
  {
    text: "If her acceleration is -.25 m/s^2, she’s currently going at 4 m/s, and she’s 20m ahead of the zombies going .5 m/s behind her, will she reach that building 100 m ahead of her?",
    type:"mc",
    triggerIndex: 98,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"Yes", correct:true },
      { text:"No" },
    ]
  },
  {
    text: "If she’s going at .4 m/s, and the zombies are 60 m behind her traveling at .5 m/s, will she make it to the bank 120 m in front of her?",
    type:"mc",
    triggerIndex: 100,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"Yes", correct:true },
      { text:"No" },
    ]
  },
  {
    text: "If we model his acceleration as 2(54x^3 - 63x^2 - 54x + 7)/(3x^2 + 1)^3 , his velocity is 2 m/s, and the zombies are currently 15m behind him going .5 m/s, will he make it to the building 200m ahead of him?",
    type:"mc",
    triggerIndex: 102,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"Yes", correct:true },
      { text:"No" },
    ]
  },
  {
    text: "A concussion happens at 95G's or 932 Newtons. If we take the distance equation to be d(t) = 1/2x^3 - 3x^2 + 4x +.15 m, and it takes two seconds to swing, what is the mass of the hammer we need to give the zombie a concussion and scare it away?",
    type:"num",
    answer: 141.2,
    triggerIndex: 86,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
  },
  {
    text: "Assume that zombies travel at .25m/s on average, and the outbreak started 4 hours before the zombies showed up on campus, how far, in kilometers, must the source be?",
    type:"num",
    answer: 3.6,
    triggerIndex: 121,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
  },
  {
    text: "Trucks like this usually travel 10 mpg, or 16,900 m/gallon. If there is 1/50  of a gallon left in the truck, how close does it have to be to the wall to hit the wall with 1/100 of the gas tank left for a getaway?",
    type:"num",
    answer: 169,
    triggerIndex: 159,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
  },
  {
    text: "If we model the of the speed of the zombies as 0.25t^4 -4.5t^3+2t^2+7t, where t is time, based on the population geography between Boston and campus, and it taking four hours for the zombies to reach campus, how far, in kilometers, is the actual source??",
    answer: 213,
    type:'num',
    triggerIndex:143,
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
