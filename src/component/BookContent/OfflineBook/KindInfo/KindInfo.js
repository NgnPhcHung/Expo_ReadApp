import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import BookInfo from '../BookInfo/BookInfo'
import { AntDesign } from '@expo/vector-icons';

export default class KindInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      isLoading: false
    }
  }

  static navigationOptions = {
    title: 'Sách các loại nè ',
  };

  iLoading = () => {
    const { change } = this.props
    console.log(this.props.isLoading)
    change()

  }

  book = (api) => {
    console.log(api)
    fetch(api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoading: !this.state.isLoading
        },
          // () => this.iLoading()
        )
      })
  }

  componentDidMount() {
    const { api } = this.props.navigation.state.params
    this.book(api)
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
  navigate = () => {
    const { navigate } = this.props.navigation.state.params
    navigate()
  }
  render() {
    // console.log("this navigate",this.props.navigation.state.params.choice)
    const { choice } = this.props.navigation.state.params
    const { isLoading } = this.state
    console.log(this.props.isLoading)
    if (!isLoading) {
      return (
        <View style={{ top: 50 }} >
          <Text style={styles.text} >Nếu bạn thấy lâu thì nhớ bật internet lên nha...</Text>
          <Image
            style={styles.featch}
            source={require('../../../../../public/image/featchapi-Loading.gif')}
          />
        </View>
      )
    }

    return (
      <View style={{ backgroundColor: '#EAEDED', paddingTop: 50 }} >
        <View style={{ marginLeft: 20 }} >
          <View>
            <Text style={styles.fetchedTxt} >Đây là thể loại {choice}</Text>
          </View>
          <View style={{ position: 'relative', paddingBottom: '3%', marginBottom: 10 }} >
            <FlatList
              data={this.state.items}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index}
              numColumns={2}
            />
          </View>
          <View style={{ position: 'absolute', top: '85%', alignSelf: 'flex-end', right: 10 }} >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Note')}
            >
              <AntDesign name="tags" size={55} color="#F5B7B1" />
            </TouchableOpacity>
          </View>
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
  text: {
    fontSize: 16,
    color: '#5499C7'
  },
  fetchedTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.4,
    textAlign: 'center',
  }
}