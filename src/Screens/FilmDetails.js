import React,{Component} from 'react'
import { Text, FlatList, ScrollView, Image, View, StyleSheet, ActivityIndicator } from "react-native";

export default class FilmDetails extends React.Component {
  state = {
    moviedetails: [],
    loaded: false
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('Title'),
    }
  }

  componentDidMount() {
    return fetch(`https://www.omdbapi.com/?apikey=e3b724fa&i=${this.props.route.params.imdbID}&plot=full`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({moviedetails: responseJson})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  renderItem = ({item}) => {
    let width = ''
    if (item.Value[0] === '1' && item.Value[1] === '0' && item.Value[2] === '0') {
      width= "100"
    } else {
      width = item.Value.replace(/[^0-9]/g, '').substring(0, 2)
    }
    return (
      <View style={{marginBottom: 20}}>
        <Text style={{marginBottom: 10}}>
          {`${item.Source} : ${item.Value}`}
        </Text>
        <View
          style={{width: Number(width) * 3,
                  height: 20,
                  backgroundColor: '#CFA029',
                  borderRadius: 10
                }}>
        </View>
      </View>

    )
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
        {(this.state.moviedetails.length === 0) ? (
          <ActivityIndicator />
        ) : (
        <View style = {styles.view}>
          <Image
          style={{width: 200, height: 300, marginBottom: 10}}
          source={{uri: this.state.moviedetails.Poster}}
          />
          <Text style={styles.title}> {this.state.moviedetails.Title}</Text>
          <Text>{this.state.moviedetails.Year}</Text>
          <Text style={styles.plot}> {this.state.moviedetails.Plot} </Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.moviedetails.Ratings}
            renderItem={this.renderItem }
          />
        </View> )}
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  plot: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    fontStyle: 'italic',
    fontSize: 11,
    textAlign: 'left',
  },
  graph: {
    height: 10,
  },
})
