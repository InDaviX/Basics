/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Item = ({name, price}) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Name: {name}</Text>
      <Text style={{fontSize: 30}}>Price: {price}$</Text>
    </View>
  );
};
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Item;
