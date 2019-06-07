import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default class BookChoice extends Component {

  navigate = (link, api) => {
    const { navigate } = this.props;
    navigate(link, api)

  }

  render() {
    const { choice, index, api } = this.props
    return (
      <TouchableOpacity
        onPress={() => this.navigate("KindInfo", { api: api, choice: choice })}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 10,
          paddingBottom:'10%',
          paddingTop:-10,
          backgroundColor: this.props.index % 2 == 0 ? "" : "#F2F4F4",
          borderBottomWidth: 5,
          borderBottomColor:'#AEB6BF',
          borderRightWidth:3,
          borderRightColor:'#AEB6BF',
          borderRadius:10
        }} >
          <Image
            style={styles.image}
            source={require('../../../../public/image/logoBook.png')}
          />
          <Text style={styles.text}>{choice}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = {
  text: {
    color: '#5DADE2',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 50,
  },
  
}