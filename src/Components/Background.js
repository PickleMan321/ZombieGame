import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native';



 const images = [
  {img: require('../../assets/street.jpg') , triggerIndex: 0},
  {img: require('../../assets/hallway2.png') , triggerIndex: 5},
  {img: require('../../assets/Hallway1.png') , triggerIndex: 16},
  {img: require('../../assets/fire.jpg') , triggerIndex: 44},
  {img: require('../../assets/hospital_bed.jpg') , triggerIndex: 69},
  {img: require('../../assets/hospital_desk.jpg') , triggerIndex: 73},
  {img: require('../../assets/hospital_room.jpg') , triggerIndex: 79},
  {img: require('../../assets/DELaRoche run down.png') , triggerIndex: 85},
  {img: require('../../assets/lab.jpg') , triggerIndex: 123},
]



export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      image:images[0].img
    }
  }

static getDerivedStateFromProps(props,state){
  const imgBack = images.sort((a,b) => {
    if(a.triggerIndex > b.triggerIndex) return 1;
    if(a.triggerIndex < b.triggerIndex) return -1;
    if(a.triggerIndex === b.triggerIndex) return 0;
  })
  .filter(img => props.index > img.triggerIndex)
  if(!imgBack || imgBack.length === 0) return null;
  const currentImg = imgBack[imgBack.length-1];
  if(currentImg.img === state.image) return null;
  return {
    image:currentImg.img
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
