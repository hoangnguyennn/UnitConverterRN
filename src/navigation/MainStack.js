import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import I18n from '../i18n/i18n';
import colors from '../constants/colors';
import {Home, UnitConversion, Settings} from '../screens';
import HeaderTitle from '../components/HeaderTitle';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  const MenuIcon = (
    <Feather
      size={30}
      name="menu"
      style={styles.whiteIcon}
      onPress={() => navigation.openDrawer()}
    />
  );
  return (
    <Stack.Navigator
      screenOptions={({route}) => {
        navigation.setOptions({gestureEnabled: route.name === 'Home'});
        return {
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        };
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <HeaderTitle {...props} title={I18n.t('appName')} icon={MenuIcon} />
          ),
        }}
      />
      <Stack.Screen
        name="UnitConversion"
        component={UnitConversion}
        options={({route}) => ({
          title: I18n.t(route.params.title),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: I18n.t('Settings')}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  whiteIcon: {
    color: colors.white,
  },
});

export default MainStack;
