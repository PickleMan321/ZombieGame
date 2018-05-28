import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';



 const images = [
  {img: require('../../assets/boy.png') , triggerIndex: 5},
  {img: require('../../assets/prof.png') , triggerIndex: 8},
  {img: require('../../assets/boy.png') , triggerIndex: 13},
    {img: require('../../assets/prof.png') , triggerIndex: 15},
    {img: require('../../assets/boy.png') , triggerIndex: 16},
  {img: require('../../assets/zambie.png') , triggerIndex: 18},
  {img: require('../../assets/boy.png') , triggerIndex: 19},

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
