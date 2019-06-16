import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Button, Text, Image } from 'react-native'
import CustomButton from '../Button/ButtonCustom'

import Logo from './Logo'

export default class Content extends Component {

  static navigationOptions = {
    title: 'Xin Chào !!!',
    headerStyle: {
      backgroundColor: '#EBF5FB',
    },
    headerTitleStyle: {
      paddingLeft: "35%"
    }
  }

  change = (isChange) => {
    const { change } = this.props
    change(isChange)
    console.log(this.props.isChange)
  }

  render() {
    return (
      <View>
        <View>
          <Logo />
        </View>
        <View style={styles.btn}>
          <Image
            style={styles.img}
            source={require('../../../public/image/walking_pikachu.gif')}
          />
          <View style={styles.btnContainer} >
            <CustomButton
              onPress={() => this.props.navigation.navigate('Details')}
              text="Đọc sách"
            />
            <Button
              onPress={() => this.change()}
              title='change'
            />
          </View>
        </View>
      </View>
    )
  }
}
// <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
//   <Text style = { styles.blue } >Offline Book</Text>
// </TouchableHighlight>
const styles = StyleSheet.create({

  btn: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    height: 300,
    width: 200,
    resizeMode: 'contain'
  },
  btnContainer: {
    flexDirection: 'row',
  }
})