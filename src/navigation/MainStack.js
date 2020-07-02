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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Unit Converter'}}
      />
      <Stack.Screen
        name="UnitConversion"
        component={UnitConversion}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MainStack;
