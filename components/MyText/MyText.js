import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
  const handleTextClick = () => {
    console.log('Text Clicked!');
    alert('The text has been clicked!');
  };
  return (
    <Text style={style.text} onPress={() => handleTextClick()}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;
