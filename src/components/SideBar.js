import React from 'react';
import {View, Text} from 'react-native';

const SideBar = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Settings')}>SideBar</Text>
    </View>
  );
};

export default SideBar;
