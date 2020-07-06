import React from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

import FilterPicker from './FilterPicker';
import colors from '../constants/colors';

const UnitConversionInput = ({
  label,
  list,
  selected,
  onPickerChange,
  value,
}) => {
  Keyboard.dismiss();
  return (
    <View style={styles.paddingContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value.toString()}
            showSoftInputOnFocus={false}
          />
          <FilterPicker
            data={list}
            renderItem={({item}) => (
              <FilterPicker.Item label={item.name} subLabel={item.code} />
            )}
            onValueChange={onPickerChange}
            filter={item => item.name}
          />
        </View>
      </View>
      <Text style={styles.hintText}>
        {selected.name} - {selected.code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 4,
  },
  container: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 8,
    fontSize: 24,
    color: colors.primary,
  },
  picker: {
    width: 50,
  },
  hintText: {
    color: '#aaa',
  },
});

UnitConversionInput.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
  selected: PropTypes.object,
  onPickerChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default UnitConversionInput;
