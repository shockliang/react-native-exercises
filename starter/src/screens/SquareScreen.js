import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +COLOR_INCREMENT or -COLOR_INCREMENT
    switch (color) {
      case 'red':
        !(red + change > 255 || red + change < 0) ? setRed(red + change) : null;
        break;
      case 'green':
        !(green + change > 255 || green + change < 0) ? setGreen(green + change) : null;
        break;
      case 'blue':
        !(blue + change > 255 || blue + change < 0) ? setBlue(blue + change) : null;
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color={"Red"}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"Green"}
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color={"Blue"}
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;