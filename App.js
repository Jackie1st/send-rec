import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SendRecPage from '/src/pages/SendRecPage.js';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <text>{ SendRecPage }</text>
        <Route exact path="/src/pages/:SendRecID" component={SendRecPage} />
        <Text>Open up App.js to start working on your app!</Text>
      </View>

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

export default App
