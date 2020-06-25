import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    bottom: 10,
    left: 10
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    top: 10,
    right: 10
  }
});

export default BoxScreen;