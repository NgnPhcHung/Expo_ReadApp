import React, { Component } from 'react'
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import TTModal from './TTModal'

export default class TrinhTham extends Component {

  render() {
    const { name, img } = this.props
    console.log('./img/' + img + '.jpg')
    return (
      <View style={styles.container} >
        <Text style= {styles.text} > {name} </Text>
       
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