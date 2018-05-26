import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { STORE_NAME, SAVE_GAME_KEY } from '../config/constants';

export default class LoadMenu extends Component {

  constructor() {
    super();
    this.state = {
      saves: [],
    }
  }

  async componentDidMount() {
    const saveJSON = await AsyncStorage.getItem(STORE_NAME+":"+SAVE_GAME_KEY);
    const saves = JSON.parse(saveJSON).map( ({ position, date }) => ({
      position, date: new Date(date)
    }))

    this.setState({ saves })

  }

  async deleteSave(index) {
    const { saves } = this.state;
    let newSaves = saves.slice();
    newSaves.splice(index,1);
    await AsyncStorage.setItem(STORE_NAME+":"+SAVE_GAME_KEY, JSON.stringify(newSaves));
    this.setState({ saves:newSaves });
  }

  render(){

    const { navigate, goBack } = this.props.navigation;
    const { saves } = this.state

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../../assets/fire.jpg')}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Saved Games</Text>
        </View>
        <FlatList
          data = { saves }
          renderItem = {({item:{position, date}, index}) => (
            <View style={styles.row}>
              <TouchableOpacity
              style={{ flex:1 }}
              onPress={() => navigate("GameScreen", { position })}>
                <Text style={styles.buttonText}>{date.toLocaleDateString()} {date.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.deleteButton}
              onPress={this.deleteSave.bind(this)}>
                <Text style={{ fontSize:20 }}>&#10008;</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, key) => ""+key}/>
          <TouchableOpacity
          style={styles.row}
          onPress={_=>goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    alignItems:'center',
    flex:1,
  },
  image:{
    backgroundColor: '#700d0d',
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:-1,
  },
  row:{
    padding:10,
    width:300,
    height:50,
    backgroundColor:'white',
    flexDirection:'row',
    borderWidth:1,
  },
  header:{
    height:50,
    backgroundColor:'white',
    width:300,
  },
  headerText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:"bold",
  },
  buttonText: {
    fontSize:20,
  },
  deleteButton: {
    width: 30,
    alignItems:'flex-end',
    justifyContent:'center'
  }
})
