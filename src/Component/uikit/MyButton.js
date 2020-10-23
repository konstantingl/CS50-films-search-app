import React, {Component} from 'react';
import { Button } from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState
} from '@react-navigation/native';

const MyButton = (props) => {
    const navigation = useNavigation();
    return (
      <Button
        disabled={props.disabled}
        title={props.title}
        onPress={() => props.onSearch(props)}
      />
    );
}

export default MyButton
