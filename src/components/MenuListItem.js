import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

const MenuListItem = ({icon, label, onPress}) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.overflowContainer}>
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={icon} />
            <Text style={styles.label}>{label}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0.8,
    elevation: 3,
  },
  overflowContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  label: {
    color: colors.text,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
});

MenuListItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
    ),
  ]),
  label: PropTypes.string.isRequired,
};

export default MenuListItem;
