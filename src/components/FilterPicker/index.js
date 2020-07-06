import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  Modal,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import FilterPickerItem from './PickerItem';

const FilterPicker = ({
  data,
  filter = item => item,
  onValueChange = () => {},
  renderItem,
}) => {
  const [search, setSearch] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  const hideModal = () => {
    setModalVisible(false);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={hideModal}>
        <View
          style={[
            styles.modalContainer,
            {height: Dimensions.get('window').height - keyboardHeight},
          ]}>
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalInputFilter}
              placeholder={'Search here'}
              value={search}
              onChangeText={text => setSearch(text)}
            />
            <FlatList
              style={styles.modalFlatList}
              keyboardShouldPersistTaps={'handled'}
              data={data.filter(item => {
                let key = filter(item);
                if (typeof key === 'object') {
                  return true;
                }

                return key
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })}
              renderItem={({item}) => (
                <TouchableNativeFeedback
                  onPress={() => {
                    hideModal();
                    onValueChange(item);
                  }}>
                  <View>{renderItem({item})}</View>
                </TouchableNativeFeedback>
              )}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.touchableBorderRadius}>
        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.pickerDropdownIcon}>
            <AntDesign name="caretdown" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 50,
    minHeight: 50,
  },
  modalContainer: {
    justifyContent: 'center',
    position: 'relative',
  },
  modalOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    marginVertical: 64,
    marginHorizontal: 32,
    borderRadius: 4,
  },
  modalInputFilter: {
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  modalFlatList: {
    marginVertical: 8,
  },
  touchableBorderRadius: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  pickerDropdownIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

FilterPicker.Item = FilterPickerItem;

FilterPicker.Item.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FilterPicker.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.func,
  onValueChange: PropTypes.func,
  renderItem: PropTypes.elementType.isRequired,
};

export default FilterPicker;
