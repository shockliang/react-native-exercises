import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter + 1};
    case 'decrement':
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <View>
      <Button title={"Increase"} onPress={() => dispatch({type: 'increment'})}/>
      <Button title={"Decrease"} onPress={() => dispatch({type: 'decrement'})}/>
      <Text>Current Count: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;