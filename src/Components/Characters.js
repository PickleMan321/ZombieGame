import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';



 const images = [
     {img: require('../../assets/blank.png') , triggerIndex: 0},
  {img: require('../../assets/prof.png') , triggerIndex: 7},
  {img: require('../../assets/blank.png') , triggerIndex: 9},
    {img: require('../../assets/prof.png') , triggerIndex: 14},
    {img: require('../../assets/blank.png') , triggerIndex: 16},
  {img: require('../../assets/zambie.png') , triggerIndex: 18},
  {img: require('../../assets/prof.png') , triggerIndex: 21},
  {img: require('../../assets/blank.png') , triggerIndex: 25},
  {img: require('../../assets/prof.png') , triggerIndex: 26},
  {img: require('../../assets/blank.png') , triggerIndex: 40},
  {img: require('../../assets/prof.png') , triggerIndex: 43},
  {img: require('../../assets/blank.png') , triggerIndex: 44},
  {img: require('../../assets/prof.png') , triggerIndex: 50},
  {img: require('../../assets/boy.png') , triggerIndex: 57},
  {img: require('../../assets/prof.png') , triggerIndex: 60},
  {img: require('../../assets/blank.png') , triggerIndex: 65},
  {img: require('../../assets/prof.png') , triggerIndex: 67},
  {img: require('../../assets/blank.png') , triggerIndex: 69},
  {img: require('../../assets/prof.png') , triggerIndex: 72},
  {img: require('../../assets/blank.png') , triggerIndex: 73},
  {img: require('../../assets/prof.png') , triggerIndex: 77},
  {img: require('../../assets/blank.png') , triggerIndex: 78},
  {img: require('../../assets/prof.png') , triggerIndex: 82},
  {img: require('../../assets/blank.png') , triggerIndex: 83},
  {img: require('../../assets/prof.png') , triggerIndex: 84},
  {img: require('../../assets/blank.png') , triggerIndex: 85},
  {img: require('../../assets/prof.png') , triggerIndex: 88},
  {img: require('../../assets/blank.png') , triggerIndex: 89},
  {img: require('../../assets/prof.png') , triggerIndex: 91},
  {img: require('../../assets/blank.png') , triggerIndex: 93},
  {img: require('../../assets/prof.png') , triggerIndex: 94},
  {img: require('../../assets/blank.png') , triggerIndex: 103},
  {img: require('../../assets/prof.png') , triggerIndex: 107},
  {img: require('../../assets/boy.png') , triggerIndex: 109},
  {img: require('../../assets/prof.png') , triggerIndex: 110},
  {img: require('../../assets/blank.png') , triggerIndex: 111},
  {img: require('../../assets/prof.png') , triggerIndex: 113},
  {img: require('../../assets/blank.png') , triggerIndex: 121},
  {img: require('../../assets/prof.png') , triggerIndex: 122},
  {img: require('../../assets/blank.png') , triggerIndex: 123},
  {img: require('../../assets/boy.png') , triggerIndex: 124},
  {img: require('../../assets/prof.png') , triggerIndex: 129},
  {img: require('../../assets/boy.png') , triggerIndex: 130},
  {img: require('../../assets/prof.png') , triggerIndex: 131},
  {img: require('../../assets/boy.png') , triggerIndex: 133},
  {img: require('../../assets/prof.png') , triggerIndex: 134},
  {img: require('../../assets/boy.png') , triggerIndex: 135},
  {img: require('../../assets/prof.png') , triggerIndex: 136},
  {img: require('../../assets/blank.png') , triggerIndex: 142},
  {img: require('../../assets/prof.png') , triggerIndex: 145},
  {img: require('../../assets/boy.png') , triggerIndex: 146},
  {img: require('../../assets/blank.png') , triggerIndex: 147},
  {img: require('../../assets/boy.png') , triggerIndex: 148},
  {img: require('../../assets/prof.png') , triggerIndex: 149},
  {img: require('../../assets/boy.png') , triggerIndex: 150},
  {img: require('../../assets/blank.png') , triggerIndex: 151},
  {img: require('../../assets/prof.png') , triggerIndex: 153},
  {img: require('../../assets/blank.png') , triggerIndex: 154},
  {img: require('../../assets/prof.png') , triggerIndex: 156},
  {img: require('../../assets/blank.png') , triggerIndex: 158},
  {img: require('../../assets/boy.png') , triggerIndex: 161},
  {img: require('../../assets/blank.png') , triggerIndex: 162},
  {img: require('../../assets/prof.png') , triggerIndex: 164},
  {img: require('../../assets/blank.png') , triggerIndex: 165},
  {img: require('../../assets/boy.png') , triggerIndex: 166},
  {img: require('../../assets/blank.png') , triggerIndex: 167},
  {img: require('../../assets/prof.png') , triggerIndex: 168},
  {img: require('../../assets/boy.png') , triggerIndex: 169},
  {img: require('../../assets/blank.png') , triggerIndex: 170},
  {img: require('../../assets/prof.png') , triggerIndex: 174},
  {img: require('../../assets/boy.png') , triggerIndex: 175},
  {img: require('../../assets/prof.png') , triggerIndex: 176},
  {img: require('../../assets/boy.png') , triggerIndex: 177},
  {img: require('../../assets/prof.png') , triggerIndex: 178},
  {img: require('../../assets/blank.png') , triggerIndex: 179},
  {img: require('../../assets/prof.png') , triggerIndex: 180},
  {img: require('../../assets/blank.png') , triggerIndex: 181},
  {img: require('../../assets/prof.png') , triggerIndex: 184},
  {img: require('../../assets/blank.png') , triggerIndex: 187},


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
