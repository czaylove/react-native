/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';

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
          <Image
            style={{width: 160, height: 50, marginTop: 170}}
            source={{
              uri:
                'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/74166090_462258821060195_4948554429600104448_n.png?_nc_cat=109&_nc_oc=AQlRi9iWQAiHR4WxCryVR_71ordyGHHSPps09QRX8-E4wgJ5rVLQ4WEfav6OYngo-Io&_nc_ht=scontent.fhan3-1.fna&oh=c5eed79a0457a73a34d8e164383034f0&oe=5E55BC1F',
            }}
          />
        </View>
        <View style={{}}>
          <TextInput
            style={{
              height: 60,
              width: 300,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#140F26',
              color: 'white',
            }}
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 60,
              width: 300,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#140F26',
            }}
          />
        </View>
        <View>
          <TouchableHighlight>
            <View
              style={{
                marginLeft: 30,
                width: '90%',
                height: 60,
                backgroundColor: '#725FFF',
                borderRadius: 35,
              }}>
              <Text>SIGN IN</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <Text
            style={{
              color: '#808D91',
              paddingLeft: 40,
            }}>
            OR
          </Text>
        </View>
        <View>
          <Button
            color="#2A545D"
            title="CONTINUE WITH FACEBOOK"
            style={{height: '100'}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}>
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
