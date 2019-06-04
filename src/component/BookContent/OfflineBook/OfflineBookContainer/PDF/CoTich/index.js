import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native'
import Data from './Data'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container} >
        {/* <ScrollView>
          {
            Data.map ((e,i) => {
              <CoTich 

              />
            })
          }
        </ScrollView> */}
        <Text>hihihi</Text>
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
    flex: 1,
    width: Dimensions.get('window').width,
  }
});