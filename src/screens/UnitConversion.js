import React from 'react';
import {View, StyleSheet} from 'react-native';

import UnitConversionInput from '../components/UnitConversionInput';
import NumericKeyboard from '../components/NumericKeyboard';

const UnitConversion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <UnitConversionInput label="From" />
        <UnitConversionInput label="To" />
      </View>
      <View style={styles.bottomKeyboard}>
        <NumericKeyboard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: 4,
  },
  bottomKeyboard: {
    marginTop: 'auto',
  },
});

export default UnitConversion;
