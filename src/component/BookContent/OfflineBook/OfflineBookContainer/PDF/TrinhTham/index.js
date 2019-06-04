import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import Data from './Data'
import TrinhTham from './TrinhTham'

export default class index extends Component {
  render() {
    console.log(Data[0].url)
    return (
      <View >
        <ScrollView>
          {
            Data.map((e, i) =>
              <TrinhTham
                name={e.name}
                url={e.url}
                img={e.img}
                key={i}
              />)
          }
        </ScrollView>
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