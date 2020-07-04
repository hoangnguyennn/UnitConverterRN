import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

import I18n from '../i18n/i18n';
import colors from '../constants/colors';
import SideBarItem from './SideBarItem';

const SideBar = ({navigation, sideMenuData}) => {
  return (
    <View>
      <ImageBackground style={styles.imageBackground}>
        <Text style={styles.appName}>{I18n.t('appName')}</Text>
      </ImageBackground>
      <View style={styles.container}>
        {sideMenuData.map(item => (
          <SideBarItem
            title={I18n.t(item.label)}
            icon={item.icon}
            onPress={() => navigation.navigate(item.label)}
            key={item.id}
          />
        ))}
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
