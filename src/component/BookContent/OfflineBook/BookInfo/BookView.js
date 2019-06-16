import React, { Component } from 'react'
import { WebView, StyleSheet, View } from 'react-native'
import { Constants } from 'expo';

export default class BookView extends Component {
  handleOnScroll = () => {
    console.log("chao");
  }
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
// window.addEventListener('scroll', function(e) {
//   e.preventDefault();
//   i += 1;
//   this.state.scroll = i
//   console.log('this is book scroll'+ this.state.scroll)
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  webview: {
    marginTop: -400,
    marginLeft:-80,
    marginRight:-80,
  }
});