import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';



 const images = [
  {img: require('../../assets/boy.jpg') , triggerIndex: 0},
  {img: require('../../assets/prof.jpg') , triggerIndex: 5},
  {img: require('../../assets/zambie.jpg') , triggerIndex: 16},

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
    backgroundColor: '#ccc',
    flex: 1,
    width: '10%',
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
})
