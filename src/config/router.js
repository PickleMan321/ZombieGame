import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainMenu from '../Screens/Menu';
import GameScreen from '../Screens/GameScreen';

const RootStackNav = createStackNavigator({
  MainMenu: {
    screen:MainMenu,
  },
  LoadMenu: {
    screen:MainMenu,
  },
  GameScreen:{
    screen:GameScreen,
  }
}, {
  headerMode:"none",
  initialRouteName:"GameScreen"
});

export default class extends Component {

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <RootStackNav />
    )
  }

}
