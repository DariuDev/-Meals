import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

export const RestaurantsComponent = ({restaurant = {}}) => {
  const {
    name = 'chakuch',
    icon,
    photos = [
      'https://www.collinsdictionary.com/images/thumb/restaurant_135621509_250.jpg?version=4.0.219',
    ],
    address = 'Beryanak,Tehran',
    isOpenNow = true,
    rating = 4,
    isTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
const Title = styled(Text)`
font-family : ${props => props.theme.fonts.body}
  padding: 2%;
  color: ${props => props.theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)`
  background-color: white;
  margin: 3%;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 3%;
  background-color: white;
`;
