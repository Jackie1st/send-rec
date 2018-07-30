import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SendRecPage from './src/pages/SendRecPage.js';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SendRecPage/>
      </View>
    );
  }
}

export default App
