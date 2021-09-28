import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function RoundButton({
    style={},
    textStyle={},
    size=50,
    ...props
}) {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
            <Text style={[styles(size).text, textStyle]} > {props.title}</Text>
        </TouchableOpacity>
    )
};

const styles= (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 6,
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48D1CC',
        borderColor: '#48D1CC',
        borderWidth:2,
    },
    text:{
        color: '#fff',
        fontSize: size/2,
    },
});

export default RoundButton;