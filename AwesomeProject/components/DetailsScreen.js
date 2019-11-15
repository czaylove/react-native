import React from 'react';
import {Button, View, Text} from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
