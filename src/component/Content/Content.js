import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Button, Text, Image, ImageBackground } from 'react-native'
import CustomButton from '../Button/ButtonCustom'

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
      <ImageBackground source = {require('../../../public/image/Background.jpeg')} style={{width: '100%', height: '100%', }} >
        <View style={styles.btn}>
          <View style={styles.btnContainer} >
            <CustomButton
              onPress={() => this.props.navigation.navigate('Details')}
              text="Đọc sách"
            />
            <View
              style = {{ paddingTop: '15%' }}
            >
            <CustomButton
              onPress={() => this.props.navigation.navigate('About')}
              text='Thông tin ứng dụng'
            />
            </View>
          </View>
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
    top: '40%'
  },
  img: {
    height: 300,
    width: 200,
    resizeMode: 'contain'
  },
  btnContainer: {
    
  }
})