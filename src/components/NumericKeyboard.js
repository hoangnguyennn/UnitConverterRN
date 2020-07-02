import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import NumericKeyboardItem from './NumericKeyboardItem';

const deleteInput = <Feather name="delete" size={30} />;
const swap = <AntDesign name="swap" size={30} />;

const NumericKeyboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={1} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={2} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={3} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={deleteInput} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={4} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={5} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={6} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content="C" />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={7} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={8} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={9} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={swap} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={null} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={0} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content="." />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={null} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: '25%',
    padding: 4,
  },
});

export default NumericKeyboard;
