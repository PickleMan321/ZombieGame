import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native';



 const images = [
  {img: require('../../assets/street.jpg') , triggerIndex: 0},
  {img: require('../../assets/classroom.jpg') , triggerIndex: 1},
  {img: require('../../assets/class_hallway.jpg') , triggerIndex: 2},
  {img: require('../../assets/fire.jpg') , triggerIndex: 3},
  {img: require('../../assets/hospital_bed.jpg') , triggerIndex: 4},
  {img: require('../../assets/hospital_desk.jpg') , triggerIndex: 5},
  {img: require('../../assets/hospital_room.jpg') , triggerIndex: 6},
  {img: require('../../assets/abandoned_building.jpg') , triggerIndex: 7},
  {img: require('../../assets/lab.jpg') , triggerIndex: 8},
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
    <ImageBackground
      style={styles.image}
      resizeMode='cover'
      source={this.state.image}
    >
    {this.props.children}

    </ImageBackground>
  )
}
}



const styles= StyleSheet.create({
  image:{
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  }
})
