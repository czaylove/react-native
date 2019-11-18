import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Note extends React.Component {
  render() {
    return (
      <View>
        <View key={this.props.keyvalue} />
        <Text>{this.props.val.date}</Text>
        <Text>{this.props.val.note}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod}>
          <Text>S</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
