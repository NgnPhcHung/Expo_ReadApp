import React, { Component } from 'react'
import Note from './Note'
import { View, Text, TouchableOpacity, TextInput, Button, TouchableHighlight, ScrollView } from 'react-native'
import ShortId from 'shortid'
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';
import { AntDesign } from '@expo/vector-icons';

export default class index extends Component {
  state = {
    arr: [],
    value: ''
  }

  add = (value) => {

    const { submit } = this.props
    submit(value)
    this.setState({
      value: ''
    })
  }

  handleDelete = (i) => {
    const { del } = this.props
    del(i)
  }

  render() {
    const { arr, value } = this.state
    const { note } = this.props.note
    return (
      <View style={{ top: '4%' }} >
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.title} > Sách và trang đã ghi chú</Text>
          <View style={{ paddingTop:'3%'}} >
            <TouchableHighlight onPress={() => {
              this.setState({ visible: true });
            }}
            >
              <AntDesign name="pluscircleo" size={55} color="#F5B7B1" />
            </TouchableHighlight>
          </View>
        </View>
        <Dialog
          visible={this.state.visible}
          dialogTitle={<DialogTitle title="Thêm ghi chú" />}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <View style={{ flexDirection: 'row' }} >
              <Text style={styles.note} > Ghi chú: </Text>
              <TextInput
                style={styles.input}
                value={value}
                placeholder='type there'
                onChangeText={(value) => this.setState({ value })}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.add(value)}
            >
              <View style={styles.btnContainer} >
                <Text style={styles.add} >Thêm</Text>
              </View>
            </TouchableOpacity>
          </DialogContent>
        </Dialog>
        <View style={styles.noteContainer} >
          <ScrollView>
            {
              note.map((e, i) =>
                <Note
                  onSubmit={this.state.add}
                  title={e.note}
                  key={i}
                  index={i}
                  handleDelete={() => { this.handleDelete(i) }}
                />
              )
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = {
  input: {
    borderColor: '#212F3D',
    borderWidth: 30,
    borderRadius: 20,
    marginTop: '5%',
    paddingLeft: '6%',
    paddingRight: '3%',
    color: '#FDFEFE',
    fontSize: 20,
    height: 30,
  },
  note: {
    top: "10%",
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: '5%',
    marginRight:'5%'
  },
  add: {
    color: '#FDFEFE',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45, width: 80,
    borderRadius: 15,
    backgroundColor: '#85929E',
    marginLeft: '35%',
    marginTop: 10
  },
  noteContainer: {
    margin: 20
  }
}