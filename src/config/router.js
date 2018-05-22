import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainMenu from './Components/Menu';

export default createStackNavigator({
  MainMenu: {
    screen:MainMenu,
  },
  LoadMenu: {
    screen:MainMenu,
  },
  GameScreen:{
    screen:GameScreen,
  }
}, { header:null });
