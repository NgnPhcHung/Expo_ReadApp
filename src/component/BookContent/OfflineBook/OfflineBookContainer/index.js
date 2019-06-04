import React, { Component } from 'react'
import { View, Text, Image, Modal, WebView } from 'react-native'
import CustomButton from '../../../Button/ButtonCustom'

export default class index extends Component {

  render() {
    const { sourse } = this.props
    return (
      <View style={styles.container} >
        <Pdf
          source={sourse}
          style = { styles.pdf }
        />
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
  }
}
