import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style={styles.background} >
        <View style={styles.container}>
          <Image
            style={{ width: 400, height: 150, resizeMode: 'contain' }}
            source={require('../../../public/image/readToday.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#D35400'
  },
  container: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  background: {
    backgroundColor: '#AED6F1',
    shadowColor: '#17202A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 6,
    marginBottom: '25%'
  }
});
        // <Image
        //   style={{ width: 100, height: 200, rotation:300, resizeMode:'contain', left:"45%" }}
        //   source={require('../../../public/image/logoBook.png')}
        // />