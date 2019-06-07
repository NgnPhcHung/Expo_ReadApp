import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
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
    <View style ={{ marginLeft:'5%' }} >
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
    // console.log(this.props.navigation.state.params.api)
    const { items, isLoading } = this.state
    if (!isLoading) {
      return (
        <View>
          <Text>Chờ tý, đang kiếm sách...</Text>
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

{/* <ScrollView horizontal={false} >
  {
    items.map((e, i) =>
      <BookInfo
        title={e.name}
        url={e.url}
        image={e.image}
        index = { i }
        navigate={this.props.navigation.navigate}
        key={i}
      />
    )
  }
</ScrollView> */}