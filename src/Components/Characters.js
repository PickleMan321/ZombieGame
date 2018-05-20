import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';



 const images = [
  {img: require('../../assets/boy.png') , triggerIndex: 0},
  {img: require('../../assets/prof.png') , triggerIndex: 5},
  {img: require('../../assets/zambie.png') , triggerIndex: 16},

]



export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      image:images[0].img
    }
  }

static getDerivedStateFromProps(props){
  const imgBack = images.find(img => props.index===img.triggerIndex)
  if(!imgBack) return null;
  return {
    image:imgBack.img
  }
}
  render(){
  return (
    <Image
      resizeMode={'contain'}
      style={styles.image}
      source={this.state.image}
    >
    {this.props.children}

    </Image>
  )
}
}



const styles= StyleSheet.create({
  image:{
    backgroundColor: 'transparent',
    width: '90%',
    height: '40%',


  }
})