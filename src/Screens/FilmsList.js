import React, {Component} from 'react'
import {Input} from 'react-native-elements'
import { FlatList,StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native'
import {filmslistarray} from '../mockData.js'
import Row from '../Component/uikit/Row'
import {fetchFilms} from '../api'

export default class FilmsList extends Component {

  state = {
    films: null,
    error: null,
    page: 2
  }

  componentDidMount() {
    this.getfilms()
    // console.log(this.state);
  }

  getfilms = async () => {
    const results = await fetchFilms(this.props.route.params.searchfilm)
    // console.log(results);
    if (results.Response == 'False') {
      this.setState({error: results.Error})
    } else {
      this.setState({films: results.Search})
    }
  }

  handleSelectFilm = film => {
    console.log(film);
    this.props.navigation.push('FilmDetails', film);
  };

  loadMoreFilms = async () => {
    const results = await fetchFilms(this.props.route.params.searchfilm + '&page=' + this.state.page)
    console.log('results!',results);
    console.log('state films',this.state);
    if (results.Response == 'False') {
      this.setState({error: results.Error})
    } else {
      const newData = this.state.films.concat(results.Search)
      this.setState(prevState => ({
        films: [...newData],
        page: prevState.page + 1
      }))
    }
  }

  render () {
    return (
      <View style={styles.container}>
      {this.state.error && (
        <Text>{this.state.error}</Text>
      )}
        <FlatList renderItem={({item}) => <Row title={item.Title}
                                               year={item.Year}
                                               imdbID={item.imdbID}
                                               onSelectFilm={this.handleSelectFilm}
                                               keyExtractor = { (item, index) => index.toString() } />}
                  data={this.state.films}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached = {this.loadMoreFilms}
                  onEndReachedThreshold={0}
                   />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
  }
})
