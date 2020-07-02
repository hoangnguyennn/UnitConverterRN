import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainStack from './navigation/MainStack';
import SideBar from './components/SideBar';
import colors from './constants/colors';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
          <Drawer.Screen name="MainStack" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
