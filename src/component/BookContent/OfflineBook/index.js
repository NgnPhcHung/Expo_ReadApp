import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, TouchableHighlight, FlatList } from 'react-native'
import BookChoice from './BookChoice'
import choices from './Data'

export default class index extends Component {

  _renderItem= ({ item, index }) => ( <BookChoice
    choice={item.choice}
    link={item.link}
    api={item.api}
    index={index}
    navigate={this.props.navigation.navigate}
  /> )

  render() {
    const { isOpenModalReducer, change } = this.props

    return (
      <View style={styles.container} >
        <FlatList
          data={choices}
          renderItem={ this._renderItem }
          keyExtractor={( item, index )=>index}
        />
      </View>
    )
  }
}
{/* <ScrollView>
  {
    choices.map((e, i) =>
      <BookChoice
        choice={e.choice}
        link={e.link}
        api={e.api}
        index = {i}
        key={i}
        navigate={this.props.navigation.navigate}
      />
    )
  }
</ScrollView> */}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
}