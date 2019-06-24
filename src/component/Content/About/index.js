import About from './About'
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '../../Button/ButtonCustom'

export default class index extends Component {

  state = {
    name: ''
  }
  log = (name) => {
    const { login } = this.props
    
    login(name)
  }
  handleName = () => {

  }
  navigation = ()=>{
    this.props.navigation.navigate('Home')
  }
  myFuc = (name) => {
    this.log(name),
    this.navigation()
  }
  render() {
    const { name } = this.state
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
        containt: 'Nguyễn Phúc Hưng'
      },
    ]
    return (
      <View style={styles.container}  >
        <Text style={styles.text} >Thông tin</Text>
        {
          arr.map((e, i) =>
            <About
              title={e.title}
              containt={e.containt}
              key={i}
            />
          )
        }
        <View>
        <Text style = { styles.title } >Nhập tên bạn ở đây</Text>
          <TextInput
            style={styles.txtInput} 
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
        </View>
        <View style = { styles.button }>
          <Button
            text="Xác nhận"
            onPress={() => this.myFuc(name)}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: '15%'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  txtInput: {
    height: 30,
    borderColor: '#212F3D',
    borderWidth: 50,
    borderRadius: 20,
    marginTop: '2%',
    marginRight: '15%',
    marginLeft: '15%',
    paddingLeft: '6%',
    paddingRight: '3%',
    color: '#FDFEFE',
    fontSize: 25,
  }, 
  button : {
    marginLeft:'20%',
    marginRight:'20%', 
    marginTop:'2%'
  }, 
  title:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  }
}
