import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

const MenuListItem = ({icon, label, onPress}) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.overflowContainer}>
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={icon} />
            <Text>{label}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0.8,
    elevation: 3,
  },
  overflowContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
});

export default MenuListItem;
