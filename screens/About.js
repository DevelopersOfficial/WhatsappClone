import React from 'react';
import {Image, Text, View} from 'react-native';

export default function About() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        height: '90%',
      }}>
      <Image
        style={{width: 300, height: 300}}
        source={require('../src/assets/money.png')}
      />
    </View>
  );
}
