import React, { Component } from 'react';
import { View } from 'react-native';
import ViewRecPage from './src/pages/ViewRecPage.js';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ViewRecPage/>
      </View>
    );
  }
}

export default App
