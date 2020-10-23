import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Input} from 'react-native-elements'

import FilmsList from './src/Screens/FilmsList'
import SearchScreen from './src/Screens/SearchScreen'
import FilmDetails from './src/Screens/FilmDetails'

const Stack = createStackNavigator ()

function MainStack() {
  return (
    <Stack.Navigator initialRouteName='SearchScreen'>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}/>
      <Stack.Screen
        name="FilmsList"
        component={FilmsList}/>
      <Stack.Screen
        name="FilmDetails"
        component={FilmDetails}/>
    </Stack.Navigator>
  )
}

export default class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
