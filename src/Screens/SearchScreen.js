import React, {Component} from 'react'
import {Input} from 'react-native-elements'
import { StyleSheet, Text, View, Button, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import MyButton from '../Component/uikit/MyButton'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
  }
})

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class SearchScreen extends Component {

  state = {
    searchfilm: '',
    isValid: false,
  }

  componentDidUpdate (prevProps,prevState) {
    if (prevState.searchfilm !== this.state.searchfilm) {
      this.validateRequest()
    }
  }

  handleText = (text) => {
    this.setState({searchfilm: text})
  }

  validateRequest = () => {
    if (this.state.searchfilm.length > 1)
    {this.setState({isValid: true})}
    else {{this.setState({isValid: false})}}
  }

  handleSearch = searchRequest => {
    this.props.navigation.push('FilmsList', searchRequest);
  }


  render () {
  return (
    <DismissKeyboard>
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Input label='Type the title of the film' onChangeText={this.handleText} />
      <MyButton onSearch={this.handleSearch} title='Search' route='FilmsList' searchfilm={this.state.searchfilm} disabled={!this.state.isValid}/>
    </KeyboardAvoidingView>
    </DismissKeyboard>
  )
}
}
