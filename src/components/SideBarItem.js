import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

const SideBarItem = ({title, icon: Icon, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    padding: 16,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.text,
  },
  text: {
    marginLeft: 20,
    color: colors.text,
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
});

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SideBarItem;
