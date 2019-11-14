import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['YEAR', 'MONTH', 'WEEK', 'DAY'],
      
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40 ,  width: '100%',textAlign: 'center'},
  text: { margin: 20 }
});