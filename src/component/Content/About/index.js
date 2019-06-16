import About from './About'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class index extends Component {
  render() {
    const arr = [
      {
        title: 'Thông tin ứng dụng',
        containt: 'Ứng dụng đọc sách'
      },
      {
        title: 'Phiên bản ứng dụng',
        containt: '1.0'
      },
      {
        title: 'Nhà sản xuất',
        containt : 'Nguyễn Phúc Hưng'
      },
    ]
    return (
      <View style = { styles.container }  >
        <Text style = { styles.text } >Thông tin</Text>
        {
          arr.map((e,i) =>
            <About 
              title = {e.title}
              containt = { e.containt }
              key = {i}
            />
          )
        }
      </View>
    )
  }
}

const styles = {
  container : {
    marginTop: '30%'
  },
  text : {
    fontSize : 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom : 20
  }
}
