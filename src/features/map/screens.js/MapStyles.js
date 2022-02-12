import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled(View)`
  flex: 1;
`;

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
