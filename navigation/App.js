import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Main from './src/Main/main';
import {FlatList} from 'react-native-gesture-handler';
import Note from './src/Main/note';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todos: [
        {id: 1, title: 'Todo List', done: false},
        {id: 2, title: 'Todo App', done: false},
      ],
    };
  }
  addNewtodo() {
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length,
      title: this.state.todoInput,
      done: false,
    });
    this.setState({
      todos,
      todoInput: '',
    });
  }
  toggleDone(item) {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState(todos);
  }
  remove(item) {
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.id !== item.id);
    this.setState({todos});
  }
  render() {
    // const statusbar = (Platform.OS=='ios') ? <View><Text>Test</Text></View> : <View></View>;
    return (
      <View>
        <View>
          <Main
            textChange={todoInput => this.setState({todoInput})}
            addNewtodo={() => this.addNewtodo()}
          />
        </View>
        <View>
          <FlatList
            style={{marginTop: 10}}
            data={this.state.todos}
            ListEmptyComponent={() => (
              <View>
                <Text style={{fontSize: 23, textAlign: 'center', color: 'red'}}>
                  Empty List
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <Note
                  todoItem={item}
                  toggleDone={() => this.toggleDone(item)}
                  remove={() => this.remove(item)}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}
