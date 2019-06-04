import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppContainer from './src/component/ScreenManager'
import { Provider } from 'react-redux'
import Store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store} >
          <AppContainer />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
