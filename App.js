import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is going to be our header</Text>
      </View>
      <View>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>All rights reserved</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
