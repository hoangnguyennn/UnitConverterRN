import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

const NumericKeyboardItem = ({content, onPress}) => {
  return (
    <View style={styles.container}>
      {content !== null ? (
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.content}>
            <Text style={styles.text}>{content}</Text>
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
    backgroundColor: '#eee',
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
    color: '#666',
  },
});

export default NumericKeyboardItem;
