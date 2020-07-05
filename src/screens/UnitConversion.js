import React, {useReducer, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Big from 'big.js';

import I18n from '../i18n/i18n';
import colors from '../constants/colors';
import UnitConversionInput from '../components/UnitConversionInput';
import NumericKeyboard from '../components/NumericKeyboard';

import unitConversionData from '../constants/unitConversionData';

const initialState = {
  list: [],
  from: {},
  to: {},
  fromValue: '',
  toValue: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
    case 'CHANGE_FROM_TYPE':
    case 'CHANGE_FROM_VALUE':
    case 'CHANGE_TO_TYPE':
    case 'SWAP_FROM_TO':
      return {
        ...state,
        ...action.newState,
      };
    default:
      return state;
  }
};

const UnitConversion = ({route}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let {id} = route.params;
    let list = unitConversionData[id - 1].map(item => ({
      ...item,
      name: I18n.t(item.name),
    }));
    list.sort((a, b) => a.name > b.name);
    let from = list[0];
    let to = list[1];

    dispatch({type: 'INITIAL', newState: {list, from, to}});
  }, [route]);

  const onPickerChangeFrom = item => {
    let from = state.from;
    let to = state.to;
    let fromValue = state.fromValue;

    if (item.id === to.id) {
      to = from;
    }

    from = item;
    let toValue =
      fromValue === ''
        ? ''
        : new Big(fromValue).times(to.value).div(from.value);
    dispatch({type: 'CHANGE_FROM_TYPE', newState: {from, to, toValue}});
  };

  const onPickerChangeTo = item => {
    let from = state.from;
    let to = state.to;
    let fromValue = state.fromValue;

    if (item.id === from.id) {
      from = to;
    }

    to = item;
    let toValue =
      fromValue === ''
        ? ''
        : new Big(fromValue).times(to.value).div(from.value);
    dispatch({type: 'CHANGE_TO_TYPE', newState: {from, to, toValue}});
  };

  const onPressKeyboard = value => {
    let from = state.from;
    let to = state.to;
    let fromValue = state.fromValue;
    let toValue = state.toValue;
    switch (value) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        fromValue = fromValue === '0' ? value.toString() : fromValue + value;
        break;
      case 'C':
        fromValue = '';
        toValue = '';
        break;
      case 'swap':
        let tmp = from;
        from = to;
        to = tmp;
        break;
      case 0:
        fromValue = fromValue !== '0' ? fromValue + value : '0';
        break;
      case 'delete':
        fromValue = fromValue.substring(0, fromValue.length - 1);
        break;
      case '.':
        if (fromValue === '') {
          fromValue = '0.';
        } else if (!fromValue.includes('.')) {
          fromValue += '.';
        }
        break;
      default:
    }

    toValue =
      fromValue === ''
        ? ''
        : new Big(fromValue).times(to.value).div(from.value);
    dispatch({
      type: 'CHANGE_FROM_VALUE',
      newState: {fromValue, toValue, from, to},
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <UnitConversionInput
          label={I18n.t('From')}
          list={state.list}
          selected={state.from}
          onPickerChange={onPickerChangeFrom}
          value={state.fromValue}
        />
        <UnitConversionInput
          label={I18n.t('To')}
          list={state.list}
          selected={state.to}
          onPickerChange={onPickerChangeTo}
          value={state.toValue}
        />
      </View>
      <View style={styles.bottomKeyboard}>
        <NumericKeyboard onPress={onPressKeyboard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    padding: 4,
  },
  bottomKeyboard: {
    marginTop: 'auto',
  },
});

export default UnitConversion;
