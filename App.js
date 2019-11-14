/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ErrorInputTextboxExample from './components/pageLogin'
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
import Logo from './logo';

const App = () => {
  return (
    <>
      <ImageBackground
        source={{
          uri:
            'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/75453566_463820187584355_3539062788594860032_n.png?_nc_cat=107&_nc_oc=AQmagH7lO3k1cH-j8opbwl_W6BenpYhzZnisVJ4S4Mh50wgpNx27hHyEDcCM25FqULw&_nc_ht=scontent.fhan3-2.fna&oh=f6b00a94c99c9dc6382e09225d64df35&oe=5E41640C',
        }}
        style={{width: '100%', height: '100%'}}>
        
        <View>
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              marginLeft: 365,
              fontSize: 15,
            }}>
            Skip
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Logo />
        </View>
        
        <View style={{
          paddingTop: 122,
        }}>
          <TextInput
            style={{
              marginLeft: 40,
              height: 55,
              width: '80%',
              borderColor: 'gray',
              borderWidth: 1,
              color: 'white',
              borderRadius: 11,
              opacity: 50,
            }}
           
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 55,
              marginTop: 20,
              marginLeft: 40,
              width: '80%',
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#0E1B2C',
              color: 'white',
              borderRadius: 11,
              
            }}
          />
        </View>
        <View style={{
           paddingTop: 20,
        }}>
          <TouchableHighlight>
            <View
              style={{
                marginLeft: 40,
                width: '80%',
                height: 55,
                backgroundColor: '#725FFF',
                borderRadius: 35,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 17,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                 }}
              >SIGN IN</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{
           paddingTop: 20,
        }}>
          <Text
            style={{
              color: '#808D91',
              textAlign: 'center'
            }}>
            OR
          </Text>
        </View>
        <View style={{
           paddingTop: 20,
        }}>
        <TouchableHighlight>
          
            <View
              style={{
                marginLeft: 40,
                width: '80%',
                height: 55,
                backgroundColor: '#2B545D',
                borderRadius: 35,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 17,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                 }}
              >CONTINUE WITH FACEBOOK</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View 
        style={{
          flex: 1, 
          flexDirection: 'row', 
          marginLeft: 10,
          paddingTop: 20,
        }}>
          <Text
            style={{
              color: '#808D91',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            FORGOT DETAILS?
          </Text>
          <Text
            style={{
              color: '#808D91',
              marginLeft: 150,
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            CREATE ACCOUNT
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};
export default App;
