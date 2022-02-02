/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import star from '../../../assets/star';
import open from '../../../assets/open';
import {SvgXml} from 'react-native-svg';

export const RestaurantsComponent = ({restaurant = {}}) => {
  const {
    name = 'chakuch',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.collinsdictionary.com/images/thumb/restaurant_135621509_250.jpg?version=4.0.219',
    ],
    address = 'Beryanak,Tehran',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{color: 'red'}}>
              CLOSED TEMPORARILY
            </Text>
          )}
          {isOpenNow && <Open xml={open} width={20} height={20} />}
          <Image
            style={{width: 15, height: 15, marginLeft: '5%'}}
            source={{uri: icon}}
          />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};

const Title = styled(Text)`
font-family : ${props => props.theme.fonts.body}
  padding: 2%;
  color: ${props => props.theme.colors.ui.primary};
`;
const Rating = styled(View)`
  flex-direction: row;
  padding-left: 3%;
`;
const Address = styled(Text)`
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
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5%;
`;
const Open = styled(SvgXml)`
  flex-direction: row;
  margin-left: 5%;
`;
