import React, { Component } from 'react'
import { View, WebView,StyleSheet } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default class index extends Component {
  render() {
    // const { url } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <WebView 
          source={{ uri: "https://drive.google.com/file/d/10N4dTq4W2HknZioXBSoNfV9NSt0nCyoy/view?usp=sharing" }}
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
  webview : {
    marginTop: -50, 
  }
});