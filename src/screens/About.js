import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import appIcon from '../assets/images/ic_launcher.png';
import colors from '../constants/colors';

const About = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.appIcon} source={appIcon} />
      <Text style={styles.appName}>{DeviceInfo.getApplicationName()}</Text>
      <Text style={styles.appVersion}>{DeviceInfo.getVersion()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  appName: {
    marginTop: 8,
    color: colors.text,
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
  appVersion: {
    color: colors.text,
    fontSize: 16,
  },
});

export default About;
