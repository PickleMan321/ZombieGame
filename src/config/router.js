import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainMenu from '../Screens/MainMenu';
import LoadMenu from '../Screens/LoadMenu';
import GameScreen from '../Screens/GameScreen';

export default createStackNavigator({
  MainMenu: {
    screen:MainMenu,
  },
  LoadMenu: {
    screen:LoadMenu,
  },
  GameScreen:{
    screen:GameScreen,
  }
}, {
  headerMode:"none",
  initialRouteName:"MainMenu"
});
