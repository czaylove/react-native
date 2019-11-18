import React, {Component} from 'react';
import {View} from 'react-native';
import AddTodo from './containers/AddTodo';
class TodoApp extends Component {
  render() {
    return (
      <View>
        <AddTodo />
      </View>
    );
  }
}
export default TodoApp;
