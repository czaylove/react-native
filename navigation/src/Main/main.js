import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
const Main = props => {
  return (
    <View>
      <View>
        <View
          style={{
            paddingBottom: 20,
            paddingTop: 20,
            backgroundColor: 'gray',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'blue',
              fontWeight: 'bold',
            }}>
            To Do List
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '80%', height: 50}}>
            <TextInput
              style={{
                marginLeft: '0%',
                backgroundColor: 'white',
                paddingLeft: '10%',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                paddingTop: 10,
              }}
              onChangeText={todoInput => props.textChange(todoInput)}
              multiline={true}
              placeholder={'NEW TO DO...'}
              placeholderTextColor="black"
            />
          </View>
          <View style={{width: '20%', height: 50, backgroundColor: 'green'}}>
            <TouchableOpacity onPress={props.addNewtodo}>
              <Text
                style={{
                  paddingTop: 15,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                ADD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingTop: 60,
          paddingBottom: 60,
        }}>
        <View style={{width: '80%', height: 50, backgroundColor: 'green'}}>
          <TextInput
            style={{
              marginLeft: '0%',
              backgroundColor: 'white',
              paddingLeft: '10%',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              paddingTop: 10,
            }}
            onChangeText={todoInput => props.textChange(todoInput)}
            multiline={true}
            placeholder={'SEARCH...'}
            placeholderTextColor="black"
          />
        </View>
        <View style={{width: '20%', height: 50, backgroundColor: 'green'}}>
          <TouchableOpacity onPress={props.addNewtodo}>
            <Text
              style={{
                paddingTop: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Main;
