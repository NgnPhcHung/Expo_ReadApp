import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class BookInfo extends Component {
  navigate = (link, url) => {
    const { navigate } = this.props;
    navigate(link, url)

  }
  render() {

    const { url, image } = this.props
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={() => this.navigate('BookView', { url: url })} >
          <View style={styles.imageContainer} >
            <Image
              style={styles.img}
              source={{ uri: image }}
            />
              <Text style={styles.txt} >{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = {
  img: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 7,
    borderWidth: 6,
    borderTopWidth: 0,
    borderLeftWidth: 3,
    borderTopWidth: 0,
    borderColor: '#d6d7da',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  txt: {
    position:'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FDFEFE',
    top: 20,
    backgroundColor: '#2E4053',
    padding:10,
    borderRadius:10,
  },
  container: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  }
}