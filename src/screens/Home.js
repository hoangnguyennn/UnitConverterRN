import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import MenuListItem from '../components/MenuListItem';
import menuListData from '../constants/menuListData';

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={menuListData}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <MenuListItem
              label={item.label}
              icon={item.icon}
              onPress={() => navigation.navigate('UnitConversion')}
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
