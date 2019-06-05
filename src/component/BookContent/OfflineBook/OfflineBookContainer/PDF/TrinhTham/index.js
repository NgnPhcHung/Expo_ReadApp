import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import TrinhTham from './TrinhTham'

export default class index extends Component {
  render() {
    return (
      <View >
        
        <Text>????/</Text>
      </View>
    )
  }
}
const styles = {
  text: {
    color: '#5DADE2',
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
}