import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainStack from './navigation/MainStack';
import SideBar from './components/SideBar';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
