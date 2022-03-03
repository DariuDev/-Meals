// 'use strict';
// import React, {useContext, useRef, useEffect, useState} from 'react';
// import {AppRegistry, Text, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PendingViewContainer,
  RNCameraContainer,
  SnapContainer,
} from './CameraStyleScreen';
// import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';
// import {RNCamera} from 'react-native-camera';

// const PendingView = () => (
//   <PendingViewContainer>
//     <Text>Waiting</Text>
//   </PendingViewContainer>
// );

// export const CameraScreen = ({navigation}) => {
//   const {user} = useContext(AuthenticationContext);
//   const cameraRef = useRef();

//   const takePicture = async () => {
//     const options = {quality: 0.5, base64: true};
//     if (cameraRef) {
//       const data = await cameraRef.takePictureAsync(options);
//       console.log(data.uri);
//       AsyncStorage.setItem(`${user.uid}-data`, data.uri);
//       navigation.goBack();
//     }
//   };

//   return (
//     <SnapContainer onPress={takePicture}>
//       <RNCameraContainer
//         ref={camera => (cameraRef.current = camera)}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.on}
//         androidCameraPermissionOptions={{
//           title: 'Permission to use camera',
//           message: 'We need your permission to use your camera',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//         androidRecordAudioPermissionOptions={{
//           title: 'Permission to use audio recording',
//           message: 'We need your permission to use your audio',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}>
//         {({camera, status, recordAudioPermissionStatus}) => {
//           if (status !== 'READY') {
//             return <PendingView />;
//           }
//         }}
//       </RNCameraContainer>
//     </SnapContainer>
//   );
// };

// AppRegistry.registerComponent('App', () => CameraScreen);
import React, {useRef, useState, useEffect, useContext} from 'react';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {View, TouchableOpacity, Text} from 'react-native';

import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';
import { useCamera } from 'react-native-camera-hooks';
const PendingView = () => (
  <PendingViewContainer>
    <Text>Waiting</Text>
  </PendingViewContainer>
);

export const CameraScreen = ({navigation}) => {
  const cameraRef = useCamera();
  const {user} = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const {status} = await RNCamera.requestPermissionsAsync();
    })();
  }, []);

  return (
    <SnapContainer onPress={() => snap()}>
      <RNCameraContainer
        type={RNCamera.Constants.Type.back}
        ref={cameraRef}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
        }}
      </RNCameraContainer>
    </SnapContainer>
  );
};
