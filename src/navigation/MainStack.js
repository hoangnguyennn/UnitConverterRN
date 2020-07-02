import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, UnitConversion, Settings} from '../screens';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => {
        navigation.setOptions({gestureEnabled: route.name === 'Home'});
        return {};
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UnitConversion" component={UnitConversion} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MainStack;
