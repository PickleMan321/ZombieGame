import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class OptionButton extends Component {
    render() {
        const { onPress, textStyle, style, title, children } = this.props;

        return (
            <TouchableOpacity onPress = {onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]}>{ title || children }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin:3,
    },
    text: {
        fontSize:15,
        fontWeight:"bold",
        color:"white"
    }
})