import React, { Component } from 'react';
import { View } from 'react-native';
import AnimatedRecPage from './src/pages/AnimatedRecPage.js';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AnimatedRecPage/>
      </View>
    );
  }
}

export default App
