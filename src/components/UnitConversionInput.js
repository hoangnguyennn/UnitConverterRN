import React from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import {Picker} from '@react-native-community/picker';
import PropTypes from 'prop-types';

import I18n from '../i18n/i18n';
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
          <Picker
            style={styles.picker}
            onValueChange={onPickerChange}
            selectedValue={selected}>
            {list &&
              list.map((item, index) => (
                <Picker.Item
                  label={I18n.t(item.name)}
                  value={item}
                  key={index}
                />
              ))}
          </Picker>
        </View>
      </View>
      <Text style={styles.hintText}>
        {I18n.t(selected.name)} - {selected.code}
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
