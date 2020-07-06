import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  BackHandler,
  ToastAndroid,
  StyleSheet,
} from 'react-native';

import I18n from '../i18n/i18n';
import MenuListItem from '../components/MenuListItem';
import menuListData from '../constants/menuListData';

const menu = menuListData.map(item => ({...item, label: I18n.t(item.label)}));
menu.sort((a, b) => a.label > b.label);

const Home = ({navigation}) => {
  const [canExit, setCanExit] = useState(false);

  useEffect(() => {
    let timer;
    const backAction = () => {
      if (canExit) {
        clearTimeout(timer);
        BackHandler.exitApp();
      } else {
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        setCanExit(true);
        timer = setTimeout(() => {
          setCanExit(false);
        }, 3000);
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove();
    };
  }, [canExit]);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={menu}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <MenuListItem
              label={item.label}
              icon={item.icon}
              onPress={() =>
                navigation.navigate('UnitConversion', {
                  id: item.id,
                  title: item.label,
                })
              }
            />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  itemContainer: {
    padding: 4,
    width: '50%',
  },
});

export default Home;
