import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
};
const getVariant = (position, size) =>
  `${positionVariant[position]}:${sizeVariant[size]}`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};

export const Spacer = styled(View)`
  ${({position, size}) => getVariant(position, size)}
`;
