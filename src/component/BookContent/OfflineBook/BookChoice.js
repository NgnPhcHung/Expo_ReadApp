import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default class BookChoice extends Component {

  navigate = (link) => {
    const { navigate } = this.props;
    navigate(link)
    console.log('this is link:  ', this.props.link)

  }

  render() {
    const { choice, link } = this.props
    console.log('this is openn:  ', this.props.isOpen)

    console.log('this is navigate:  ', this.navigate)
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10%', marginTop: '10%'
      }} >
        <Image
          style={{ resizeMode: 'contain', width: 40, height: 50, rotation:30 }}
          source={require('../../../../public/image/logoBook.png')}
        />
        <TouchableOpacity
          onPress={() => this.navigate(link)}>
          <Text style={styles.text}>{choice}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = {
  text: {
    color: '#5DADE2',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }
}