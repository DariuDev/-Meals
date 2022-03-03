import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const PendingViewContainer = styled(View)`
  flex: 1;
  background-color: lightgreen;
  justify-content: center;
  align-items: center;
`;
export const RNCameraContainer = styled(RNCamera)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const SnapContainer = styled(TouchableOpacity)`
  background-color: #fff;
  padding-horizontal: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const SnapTxt = styled(Text)`
  padding: 14px;
`;
