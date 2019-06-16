import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, Button, FlatList } from 'react-native'
import BookChoice from './BookChoice'
import choices from './Data'

export default class index extends Component {

  _renderItem= ({ item, index }) => ( <BookChoice
    choice={item.choice}
    link={item.link}
    api={item.api}
    index={index}
    navigate={this.props.navigation.navigate}
  /> )

  render() {
    return (
      <View style={styles.container} >
      <View style = { styles.textContainer } >
        <Text style = { styles.text } >Các thể loại sách hiện có</Text>
      </View>
        <FlatList
          data={choices}
          renderItem={ this._renderItem }
          keyExtractor={( item, index )=>index}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  text : {
    fontWeight:'bold',
    fontSize:20,
    paddingTop: '2%',
    paddingBottom:'2%',
    paddingLeft:'10%',
    paddingRight:'10%',
    borderWidth:4,
    borderColor:'#34495E',
    borderRadius:10,
    borderLeftWidth:0,
    borderTopWidth:0,
    borderRightWidth:0,
  },
  textContainer:{
    marginBottom: '10%',
    marginTop:'3%',
    borderWidth:6,
    borderColor:'#AEB6BF',
    borderRadius:10,
    borderLeftWidth:0,
    borderTopWidth:0,
    opacity:0.5
  }
}