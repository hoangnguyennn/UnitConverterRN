import React from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import {Picker} from '@react-native-community/picker';

const UnitConversionInput = ({label}) => {
  Keyboard.dismiss();
  return (
    <View style={styles.paddingContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="123"
            showSoftInputOnFocus={false}
          />
          <Picker style={styles.picker}>
            <Picker.Item label="Hi" value="Hi" />
            <Picker.Item label="Hi" value="Hi" />
          </Picker>
        </View>
      </View>
      <Text style={styles.hintText}>km - cm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 4,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 8,
    fontSize: 24,
  },
  picker: {
    width: 50,
  },
  hintText: {
    color: '#aaa',
  },
});

export default UnitConversionInput;
