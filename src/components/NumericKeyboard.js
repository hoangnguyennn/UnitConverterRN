import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import NumericKeyboardItem from './NumericKeyboardItem';

const deleteInput = <Feather name="delete" size={30} />;
const swap = <AntDesign name="swap" size={30} />;

const NumericKeyboard = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={1} onPress={() => onPress(1)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={2} onPress={() => onPress(2)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={3} onPress={() => onPress(3)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem
          content={deleteInput}
          onPress={() => onPress('delete')}
        />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={4} onPress={() => onPress(4)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={5} onPress={() => onPress(5)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={6} onPress={() => onPress(6)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content="C" onPress={() => onPress('C')} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={7} onPress={() => onPress(7)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={8} onPress={() => onPress(8)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={9} onPress={() => onPress(9)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={swap} onPress={() => onPress('swap')} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={null} onPress={() => onPress()} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={0} onPress={() => onPress(0)} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content="." onPress={() => onPress('.')} />
      </View>
      <View style={styles.itemContainer}>
        <NumericKeyboardItem content={null} onPress={() => onPress()} />
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
