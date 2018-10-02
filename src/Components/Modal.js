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
    text: "I. (Chapter 1 of Zombies Calculus) Before leaving MATH 152 today, you (very wisely) look out of the classroom window to see if there are any zombies lurking (or lurching) nearby. Sure enough, there's a big ol' zombie standing below the window near the De La Roche entrance. Although your calculus text is one of your most prized possessions, this is a matter of life or death, so you open the window, remove the screen, and drop the book on top of the undead creature's unkempt head. The height of the falling book is governed by the equation above where y is the height in feet above the ground and t is the time in seconds. (a) If the zombie is six feet tall, when does the book hit him? (b) At what velocity does the book hit the zombie? ",
    image: require('../../assets/QuestionOne.png'),
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
    text: "(Chapter 2 of Zombies Calculus) Suppose that a zombie infects about five people every hour and that the zombie outbreak began with one zombie. Let t be the time in hours since the first infection and let Z(t) be the total number of zombies after t hours. (a) Determine the total number of zombies after 0 hours, 1 hour, 2 hours, 3 hours, 4 hours, and 5 hours. Display your results in a table. (When computing the total number of zombies, include both the new zombies and the ones that are already present.) (b) Using the data you collected in part (a), find a simple formula for Z(t). Check that your formula predicts the results in your table. (c) The current world population is about 7.3 billion people. Based on your zombie population model, how long would it take for the entire world population to become zombies?",
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
    text: "(Chapter 2 of Zombies Calculus) In Problem II, we assumed that a zombie infects about five people every hour and that the zombie outbreak began with one zombie. We saw that this assumption leads to the mathematical model above, where $t$ is the time in hours since the first infection and Z(t) is the total number of zombies after t hours. (a) What is the average rate of change of the number of zombies between $t=3$ and $t=4$ hours? (b) What is the instantaneous rate of change of the number of zombies at $t=4$ hours?",
    image: require('../../assets/QuestionTwo.png'),
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
    text: "(Read chapter 3 of Zombies Calculus.) Normal distributions are special functions that are used to model many real-world phenomena. Normal distributions are of central importance in statistics. The formula for the normal distribution with mean mu and standard deviation sigma is above.",
    image: require('../../assets/QuestionThree.png'),
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
    text: "If a quantity $X$ is normally distributed, then the probability that $X$ is between two given numbers, say, $a$ and $b$, equals the area under the graph of the normal distribution between $a$ and $b$. That is, the probability that a< X <b equals above?",
    image: require('../../assets/QuestionThreePart2.png'),
    type:"mc",
    triggerIndex: 102,
    onCorrect:answerCorrect,
    onWrong:()=>alert("Nope. Try again!"),
    choices: [
      { text:"Yes", correct:true },
      { text:"No" },
    ]
  }



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
