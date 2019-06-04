import { Modal, WebView, View, TouchableHighlight, Text, Dimensions, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class TTModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { url } = this.props
    return (
      <View style={styles.container} >
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});