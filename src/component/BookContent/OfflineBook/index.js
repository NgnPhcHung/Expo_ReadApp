import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, TouchableHighlight } from 'react-native'
import BookChoice from './BookChoice'
import choices from './Data'

export default class index extends Component {

  render() {
    const { isOpenModalReducer, change } = this.props

    return (
      <View style={styles.container} >
        <ScrollView>
          {
            choices.map((e, i) =>
                <BookChoice
                  choice={e.choice}
                  link={e.link}
                  isOpen = { this.props.isOpenModalReducer }
                  change = { this.props.change }
                  key={i}
                  navigate = { this.props.navigation.navigate }
                />
            )
          }
        </ScrollView>
      </View>
    )
  }
}
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

// fetch('http://openlibrary.org/api/volumes/brief/json/id:1;lccn:50006784|olid:OL6179000M;lccn:55011330')