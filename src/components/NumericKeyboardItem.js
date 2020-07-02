import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

import colors from '../constants/colors';

const NumericKeyboardItem = ({content, onPress, style}) => {
  return (
    <View style={styles.container}>
      {content !== null ? (
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.content}>
            <Text style={{...styles.text, ...style}}>{content}</Text>
          </View>
        </TouchableNativeFeedback>
      ) : (
        <View style={styles.content} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  text: {
    fontSize: 30,
    color: colors.text,
  },
});

export default NumericKeyboardItem;
