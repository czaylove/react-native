import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Note from './note';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  addNote() {
    if (this.state.noteText) {
      var D = new Date();
      this.state.noteArray;
    }
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginTop: '10%',
              marginBottom: '10%',
            }}>
            To Do List
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{width: '90%', height: 50, backgroundColor: 'skyblue'}}>
              <TextInput
                // onChangeText = {{noteText} => this.setState({noteText})}
                multiline={true}
                placeholder={'To Do'}
                placeholderTextColor="white"
              />
            </View>
            <View
              style={{width: '10%', height: 50, backgroundColor: 'skyblue'}}>
              <TouchableOpacity onPress={this.addNote.bind(this)}>
                <Text style={{marginTop: 15, fontWeight: 'bold'}}> + </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
