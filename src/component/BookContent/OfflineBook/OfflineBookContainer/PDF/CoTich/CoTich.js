import React, { Component } from 'react'
import { View, StyleSheet,Dimensions } from 'react-native'

export default class CoTich extends Component {
  render() {
    const { bookURL } = this.props
    return (
      <View style = { StyleSheet.container } >
        <Pdf 
          sourse = { bookURL }
          style = { styles.pdf }
        />      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
  }
});