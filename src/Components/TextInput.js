import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class TextInputs extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Answer goes here',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
       <TextInputs
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}
