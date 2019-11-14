import React,{Component} from 'react';
import {View, Text, StyleSheet,Button,FlatList} from 'react-native';
import ListAvatarExample from '../components/flatList';

const Transaction = () =>  {
    return(
     <View>
       <View style={styles.headerTransaction}>
          <View style={styles.transactionT}>
            <View style={styles.transactionText}>
                <Text style={styles.text}> Back </Text>
            </View>
            <View style={styles.transactionText1}>
                <Text style={styles.text}>Transaction History</Text>
                <Text style={styles.text}>1234 Transaction</Text>
            </View>
             <View  style={styles.transactionText2}>
                <Text style={styles.text}> Back </Text>
            </View>
      </View>
       </View>
          <View style={styles.titlemiddleTransaction}>
            <View style={styles.btn}>
                <Text style={styles.text}>YEAR</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.text}>MONTH</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.text}>WEEK</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.text}>DAY</Text>
            </View>
      </View>
       <View>
          <ListAvatarExample/>
       </View>
     </View>
    )
};
const styles = StyleSheet.create({
  headerTransaction: {
    width: '100%',
    height: 50,
  
  },
  transactionT: {
    color: 'white',
    flex: 1, 
    flexDirection: 'row',
  },
  transactionText: {
      paddingTop: 15,
  },
  transactionText1:{
    paddingLeft: 105,
    paddingTop: 5,
  },
  transactionText2:{
    paddingLeft: 105,
    paddingTop: 15,
  },
  text: {
    color: 'white',
  },
  middleTransaction: {
    flex: 1, 
    flexDirection: 'row',
  },
  titlemiddleTransaction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  btn: {
    width: '25%',
    height: 50,
    paddingTop: 12,
  },
  text: {
   textAlign: 'center',
  }
});
export default Transaction;
