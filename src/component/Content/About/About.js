import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class About extends Component {
  render() {
    const { title, containt } = this.props
    return (
      <View>
        <View style = { styles.container } >
          <Text style = {styles.text} >
            {title}: 
          </Text>
          <Text style = {styles.text2} >
            {containt}
          </Text>
        </View>
      </View>
    )
  }
}
const styles = {
  container: {
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#D5DBDB',
    padding: '5%',
    borderRadius: 10
  },
  text : {
    fontSize : 15,
    fontWeight: 'bold',
  },
  text2 : {
    fontSize : 20,
    fontWeight: 'bold',
    paddingLeft: '10%'
  }
}
