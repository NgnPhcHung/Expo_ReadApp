import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppContainer from './src/component/ScreenManager'
import { Provider } from 'react-redux'
// import Store from './src/store'

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}  >
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABB2B9',
  },
});
