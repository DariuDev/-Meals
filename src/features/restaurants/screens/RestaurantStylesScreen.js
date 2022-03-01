import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';

export const ActivityIndicatorContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
`;
export const RestaurantList = styled(FlatList).attrs({
  contentContaierStyle: {padding: 4},
})``;
