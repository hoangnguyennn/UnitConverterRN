import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const SettingsIcon = ({style}) => {
  return <Feather name="settings" size={16} style={style} />;
};

const AboutUsIcon = ({style}) => {
  return <Feather name="info" size={16} style={style} />;
};

const sideMenuListData = [
  {id: 1, label: 'Settings', icon: SettingsIcon},
  {id: 2, label: 'About', icon: AboutUsIcon},
];

export default sideMenuListData;
