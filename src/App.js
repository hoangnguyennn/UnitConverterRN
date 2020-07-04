import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';

import MainStack from './navigation/MainStack';
import SideBar from './components/SideBar';
import colors from './constants/colors';
import sideMenuListData from './constants/sideMenuListData';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => (
            <SideBar sideMenuData={sideMenuListData} {...props} />
          )}>
          <Drawer.Screen name="MainStack" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
