import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Text, ImageBackground } from 'react-native'
import FirebaseTest from './FireBaseTest'
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
  render() {
    return (
      <View>  
        <ImageBackground source={require('../../../public/image/bg.jpg')} style = {{ width:'100%', height:'100%' }} >
          <View>
            <Logo />
          </View>
          <View style={styles.btn}>
            <CustomButton
              onPress={() => this.props.navigation.navigate('Details')}
              text="Đọc Luôn"
            />
          </View>
        </ImageBackground> 
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
    top: '5.2%', 
    left:'4.7%',
  },
  
})