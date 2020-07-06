import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';

const FilterPickerItem = ({label, subLabel}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.subLabel}>{subLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  subLabel: {
    color: colors.gray,
  },
});

FilterPickerItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FilterPickerItem;
