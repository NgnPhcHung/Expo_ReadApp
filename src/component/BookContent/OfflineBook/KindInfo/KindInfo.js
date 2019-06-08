import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import BookInfo from '../BookInfo/BookInfo'

export default class KindInfo extends Component {
  static navigationOptions = {
    title: 'Sách các loại nè ',
  };

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      isLoading: false
    }
  }

  componentDidMount() {
    const { api } = this.props.navigation.state.params
    fetch(api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: true,
          items: json
        })
        console.log(json)
      })
  }

  _renderItem = ({ item, index }) => (
    <View style={{ marginLeft: '5%' }} >
      <BookInfo
        title={item.name}
        url={item.url}
        image={item.image}
        index={index}
        navigate={this.props.navigation.navigate}
        key={index}
      />
    </View>
  )

  render() {
    const { items, isLoading } = this.state
    if (!isLoading) {
      return (
        <View>
        <Text style = { styles.text } >Nếu bạn thấy lâu thì nhớ bật internet lên nha...</Text>
          <Image
            style={ styles.featch }
            source={require('../../../../../public/image/featchapi-Loading.gif')}
          />
        </View>
      )
    }

    return (
      <View style={{ backgroundColor: '#EAEDED' }} >
        <View style={{ marginLeft: 20 }} >
          <FlatList
            data={this.state.items}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
      </View>
    )
  }
}
const styles = {
  featch: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 350,
    resizeMode: 'contain'
  },
  text:{
    fontSize:16,
    color:'#5499C7'
  }
}