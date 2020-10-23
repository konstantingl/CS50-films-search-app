import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation,} from '@react-navigation/native';


const styles = StyleSheet.create({
  row: { padding: 20 },
});

const Row = (props) => {
  const navigation = useNavigation()
  return (
  <View style={styles.row}>
    <Text>{props.title}</Text>
    <Text>{props.year}</Text>
    <TouchableOpacity onPress={() => props.onSelectFilm(props) }>
      <Text>See details</Text>
    </TouchableOpacity>
  </View>
)
}

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default Row;
