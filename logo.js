import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class Logo extends Component {
  render(){
    return(
      <Image
            style={{width: 160, height: 50, marginTop: 170}}
            source={{
              uri:
                'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/74166090_462258821060195_4948554429600104448_n.png?_nc_cat=109&_nc_oc=AQlRi9iWQAiHR4WxCryVR_71ordyGHHSPps09QRX8-E4wgJ5rVLQ4WEfav6OYngo-Io&_nc_ht=scontent.fhan3-1.fna&oh=c5eed79a0457a73a34d8e164383034f0&oe=5E55BC1F',
            }}
          />
    )
  }
}