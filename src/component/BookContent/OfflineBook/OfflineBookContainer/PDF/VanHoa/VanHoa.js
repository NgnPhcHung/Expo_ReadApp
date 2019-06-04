import React, { Component } from 'react'
import { Text, View } from 'react-native'
export default class VanHoa extends Component {
  render() {
    console.log(this.props.title)
    return (
      <View>
        <Text> { this.props.title } </Text>
      </View>
    )
  }
}
