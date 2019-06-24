import React, { Component } from 'react'
import { WebView, StyleSheet, View } from 'react-native'
import { Constants } from 'expo';

export default class BookView extends Component {

  render() {
    const { url } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: url }}
          style={styles.webview}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  webview: {
    marginTop: -50
  }
});