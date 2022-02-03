import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';

export const Title = styled(Text)`
font-family : ${props => props.theme.fonts.body}
  padding: 2%;
  color: ${props => props.theme.colors.ui.primary};
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding-left: 3%;
`;
export const Address = styled(Text)`
  padding: 2%;
  color: ${props => props.theme.colors.ui.primary};
`;
export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-right: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: 3%;
  background-color: white;
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5%;
`;
export const Open = styled(SvgXml)`
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  width: 20;
  height: 20;
`;
export const Star = styled(SvgXml)`
  width: 20;
  height: 20;
`;
export const Icon = styled(Image)`
  width: 15;
  height: 15;
`;
