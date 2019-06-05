import React, { Component } from 'react'
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class TrinhTham extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Text style= {styles.text} > {hihi} </Text>
        <Text>Quac</Text>
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