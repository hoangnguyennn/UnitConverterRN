import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../constants/colors';
import SideBarItem from './SideBarItem';

const SettingsIcon = ({style}) => {
  return <Feather name="settings" size={16} style={style} />;
};

const SideBar = ({navigation}) => {
  return (
    <View>
      <ImageBackground style={styles.imageBackground}>
        <Text style={styles.appName}>Unit Converter</Text>
      </ImageBackground>
      <View style={styles.container}>
        <SideBarItem
          title="Settings"
          icon={props => <SettingsIcon {...props} />}
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    padding: 16,
    paddingTop: 48,
    backgroundColor: colors.primary,
  },
  appName: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
  container: {
    marginTop: 8,
  },
});

export default SideBar;
