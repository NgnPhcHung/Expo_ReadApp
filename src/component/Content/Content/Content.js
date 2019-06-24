import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Text, ImageBackground } from 'react-native'
import CustomButton from '../../Button/ButtonCustom'

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
  }

  render() {
    const link = '../../../../public/image/Background.jpeg'
    return (
      <View>
        <ImageBackground source={require(link)} style={{ width: '100%', height: '100%', }} >
          <View style={styles.btn}>
            <View  >
              <View style={styles.helloContent} />
              <View style={styles.hello} >
                <Text style={styles.text} >
                  Chúc bạn {this.props.user.name}, </Text>
                <Text style={styles.text} >
                  Đọc sách vui vẻ!!!
                </Text>
              </View>
            </View>
            <View>
              <CustomButton
                onPress={() => this.props.navigation.navigate('Details')}
                text="Đọc sách"
              />
              <View
                style={{ paddingTop: '5%' }}
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

const styles = StyleSheet.create({

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%'
  },
  img: {
    height: 300,
    width: 200,
    resizeMode: 'contain'
  },
  helloContent: {
    height: 150,
    width: 300,
    backgroundColor: '#B2BABB',
    borderRadius: 15,
    opacity: 0.7,
    position: 'relative',
    marginBottom: '30%'
  },
  hello: {
    position: 'absolute',
    paddingLeft: '10%',
    top: '15%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})