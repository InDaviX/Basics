import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/Item/item';

const App = () => {
  return (
    <SafeAreaView>
      <Item name={'Telephone'} price={200} />
      <Item name={'Tablet'} price={160} />
      <Item name={'Smartwatch'} price={20} />
    </SafeAreaView>
  );
};

export default App;
