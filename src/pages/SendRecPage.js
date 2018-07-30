import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

class SendRecPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      comment: '',
      location: '',
      rating: '',
      recipient: ''
    };
  }

  inputs = (title, description, comment, location, rating, recipient) => {
    alert(`title: ${title}, description: ${description}, comment: ${comment}, location: ${location}, rating: ${rating}, recipient: ${recipient}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Input Recommendation Title"
          onChangeText={(title) => this.setState({title: text})}
          value={this.state.title}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.title}</Text>
        </hr>
        <TextInput
          style={styles.input}
          placeholder="Input Recommendation Description"
          onChangeText={(description) => this.setState({description: text})}
          value={this.state.description}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.description}</Text>
        </hr>
        <TextInput
          style={styles.input}
          placeholder="Input Recommendation Comment"
          onChangeText={(comment) => this.setState({comment: text})}
          value={this.state.comment}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.comment}</Text>
        </hr>
        <TextInput
          style={{height: 40}}
          placeholder="Input recommendation Location!"
          onChangeText={(location) => this.setState({location})}
          value={this.state.location}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.location}</Text>
        </hr>
        <TextInput
          style={{height: 40}}
          placeholder="Input recommendation Rating!"
          onChangeText={(rating) => this.setState({rating})}
          value={this.state.rating}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.rating}</Text>
        </hr>
        <TextInput
          style={{height: 40}}
          placeholder="Input Recommendation Recipient!"
          onChangeText={(recipient) => this.setState({recipient})}
          value={this.state.recipient}/>
        <Text style={{padding: 10, fontSize: 42}}>{this.state.recipient}</Text>
        </hr>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {() => this.inputs(this.state.title, this.state.description, this.state.comment, this.state.location, this.state.rating, this.state.recipient)}>
            <Text style = {styles.submitButtonText}> SUBMIT </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default SendRecPage


