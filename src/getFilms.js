import React from 'react'
import {FlatList, Text} from 'react-native'
import Row from './Component/uikit/Row'

const GetFilms = (props) => {
  const renderItem = ({item}) => <Row title={item.Title}
                                      year={item.Year}
                                      onSelectFilm={props.onSelectFilm}
                                      keyExtractor = { (item, index) => index.toString() } />
  return (
  <FlatList renderItem={renderItem} data={props.films} />
)
}

export default GetFilms
