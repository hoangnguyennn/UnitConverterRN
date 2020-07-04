import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../constants/colors';

const HeaderTitle = ({title, icon}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
    color: colors.white,
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
});

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default HeaderTitle;
