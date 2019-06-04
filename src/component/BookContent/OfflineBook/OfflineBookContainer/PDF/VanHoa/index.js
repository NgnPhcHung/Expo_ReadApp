import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import VanHoaData from './Data'
import VanHoa from './VanHoa'
export default class index extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {
            VanHoaData.map (( e, i ) =>
            <VanHoa 
              title = { e.title }
            />
            )
          }
                {console.log(this.props.title)}
        </ScrollView>
      </View>
    )
  }
}
