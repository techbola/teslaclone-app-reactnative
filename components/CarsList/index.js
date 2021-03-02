import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Cars from './cars';
import styles from './styles';
import CartItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({item}) => <CartItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;