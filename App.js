import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import ArDrivingCar from './src/ARDrivingCar';




export default () => {
  return (
    <ArDrivingCar />
  )
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});